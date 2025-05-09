class InputHandler {
    constructor(player1Board, player2Board) {
        this.player1Board = player1Board;
        this.player2Board = player2Board;
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.addEventListener('keydown', (event) => {
            if (event.defaultPrevented) return;

            let moved = false;
            switch(event.key) {
                // Player 1 controls (WASD)
                case 'w':
                case 'W':
                    moved = this.player1Board.move('up');
                    break;
                case 's':
                case 'S':
                    moved = this.player1Board.move('down');
                    break;
                case 'a':
                case 'A':
                    moved = this.player1Board.move('left');
                    break;
                case 'd':
                case 'D':
                    moved = this.player1Board.move('right');
                    break;

                // Player 2 controls (Arrow keys)
                case 'ArrowUp':
                    moved = this.player2Board.move('up');
                    event.preventDefault();
                    break;
                case 'ArrowDown':
                    moved = this.player2Board.move('down');
                    event.preventDefault();
                    break;
                case 'ArrowLeft':
                    moved = this.player2Board.move('left');
                    event.preventDefault();
                    break;
                case 'ArrowRight':
                    moved = this.player2Board.move('right');
                    event.preventDefault();
                    break;
            }
            // 检查双方是否都GameOver
            if (typeof window.game !== 'undefined') {
                window.game.checkBothGameOver();
            }
        });
    }
} 