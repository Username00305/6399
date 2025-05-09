class Game {
    constructor() {
        this.player1Board = new Board('player1-board', 'player1-score');
        this.player2Board = new Board('player2-board', 'player2-score');
        this.timer = new Timer();
        this.inputHandler = new InputHandler(this.player1Board, this.player2Board);
        this.ended = false;
        this.setupEventListeners();
    }

    setupEventListeners() {
        const startButton = document.getElementById('start-game');
        const timerSelect = document.getElementById('timer-select');
        const customTimeInput = document.getElementById('custom-time');

        startButton.addEventListener('click', () => this.startGame());
        
        timerSelect.addEventListener('change', (e) => {
            if (e.target.value === 'custom') {
                customTimeInput.style.display = 'inline-block';
            } else {
                customTimeInput.style.display = 'none';
            }
        });

        this.timer.setTimeUpCallback(() => this.endGame());
    }

    startGame() {
        // Reset boards
        this.player1Board.init();
        this.player2Board.init();
        this.ended = false;

        // Get selected time
        const timerSelect = document.getElementById('timer-select');
        const customTimeInput = document.getElementById('custom-time');
        let seconds;

        if (timerSelect.value === 'custom') {
            seconds = parseInt(customTimeInput.value) * 60;
            if (isNaN(seconds) || seconds <= 0) {
                alert(getText('invalidTime'));
                return;
            }
        } else {
            seconds = parseInt(timerSelect.value);
        }

        // Start timer
        this.timer.start(seconds);
    }

    endGame() {
        if (this.ended) return;
        this.ended = true;
        const player1Score = this.player1Board.getScore();
        const player2Score = this.player2Board.getScore();
        let message;

        if (player1Score > player2Score) {
            message = getText('playerWins', { player: '1' });
        } else if (player2Score > player1Score) {
            message = getText('playerWins', { player: '2' });
        } else {
            message = getText('draw');
        }

        // 页面显示结果并放烟花
        this.showFireworks(getText('timeUp') + '<br>' + message);
    }

    checkBothGameOver() {
        if (this.ended) return;
        if (this.player1Board.isGameOver() && this.player2Board.isGameOver()) {
            this.endGame();
        }
    }

    showFireworks(resultHtml) {
        const fireworks = document.getElementById('fireworks');
        fireworks.innerHTML = `<div style='color:#fff;font-size:2.5rem;text-align:center;margin-bottom:30px;'>${resultHtml}</div><canvas id='fireworks-canvas' width='800' height='600' style='max-width:90vw;max-height:60vh;'></canvas><button id='close-fireworks' style='margin-top:30px;padding:10px 30px;font-size:1.2rem;cursor:pointer;'>Close</button>`;
        fireworks.style.display = 'flex';
        // 简单烟花动画
        this.launchFireworks();
        document.getElementById('close-fireworks').onclick = () => {
            fireworks.style.display = 'none';
        };
    }

    launchFireworks() {
        const canvas = document.getElementById('fireworks-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const W = canvas.width;
        const H = canvas.height;
        let particles = [];
        function randomColor() {
            return `hsl(${Math.random()*360},100%,60%)`;
        }
        function createFirework() {
            const x = Math.random()*W*0.8+W*0.1;
            const y = Math.random()*H*0.5+H*0.1;
            const count = 30+Math.random()*20;
            for(let i=0;i<count;i++){
                const angle = (Math.PI*2/count)*i;
                const speed = Math.random()*4+2;
                particles.push({
                    x,y,
                    vx: Math.cos(angle)*speed,
                    vy: Math.sin(angle)*speed,
                    alpha: 1,
                    color: randomColor()
                });
            }
        }
        let frame = 0;
        function animate() {
            ctx.clearRect(0,0,W,H);
            if(frame%20===0) createFirework();
            particles.forEach(p=>{
                p.x+=p.vx;
                p.y+=p.vy;
                p.vy+=0.05;
                p.alpha-=0.012;
            });
            particles = particles.filter(p=>p.alpha>0);
            particles.forEach(p=>{
                ctx.globalAlpha = p.alpha;
                ctx.beginPath();
                ctx.arc(p.x,p.y,3,0,Math.PI*2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });
            ctx.globalAlpha = 1;
            if(document.getElementById('fireworks').style.display==='flex'){
                requestAnimationFrame(animate);
            }
        }
        animate();
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // 默认英文
    localStorage.setItem('language', 'en');
    document.getElementById('language-select').value = 'en';
    updateLanguage('en');
    window.game = new Game();
}); 