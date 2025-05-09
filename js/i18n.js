const translations = {
    en: {
        title: "6399play - Puzzle Duel",
        player1: "Player 1 (WASD)",
        player2: "Player 2 (Arrow Keys)",
        startGame: "Start Game",
        score: "Score: ",
        howToPlay: "How to Play",
        instructionsContent: [
            "Welcome to <strong>6399play</strong> — the online puzzle game platform from 6399, designed for two players! Here, you and your friends can compete in real time and enjoy the pure fun of puzzle battles. Whether you're a puzzle game veteran or a newcomer, you'll find your challenge on 6399play.",
            "1. 6399play supports WASD (Player 1) and Arrow keys (Player 2) for two-player battles. Perfect for friends, colleagues, or family to play together online.",
            "2. When two tiles with the same number touch, they merge into one and your score increases!",
            "3. The goal is to get the highest score within the time limit.",
            "4. 6399play supports both English and Chinese, features a clean interface, smooth controls, is completely free, and has no ads.",
            "5. As part of the classic 6399 puzzle game series, 6399play is committed to providing players with a high-quality online gaming experience.",
            "Join 6399play now, challenge your friends to a duel, and enjoy the fun of puzzle and competition!"
        ],
        gameOver: "Game Over!",
        playerWins: "Player {player} wins!",
        timeUp: "Time's up!",
        draw: "It's a draw!"
    },
    zh: {
        title: "6399play双人益智小游戏",
        player1: "玩家 1 (WASD)",
        player2: "玩家 2 (方向键)",
        startGame: "开始游戏",
        score: "分数: ",
        howToPlay: "关于6399play与游戏说明",
        instructionsContent: [
            "欢迎来到 <strong>6399play</strong> —— 6399旗下专为双人设计的在线益智小游戏平台！在这里，你可以和朋友一起实时对战，体验最纯粹的益智乐趣。无论你是益智游戏老玩家，还是第一次接触，都能在6399play找到属于你的挑战。",
            "1. 6399play支持WASD（玩家1）和方向键（玩家2）双人对战，适合朋友、同事、家人一起在线竞技。",
            "2. 当两个相同数字的方块相碰时，它们会合并成一个，分数增加！",
            "3. 目标是在限定时间内获得更高分数。",
            "4. 6399play支持中英文切换，界面简洁，操作流畅，完全免费，无广告打扰。",
            "5. 作为6399经典益智游戏系列的一员，6399play致力于为玩家带来高质量的在线小游戏体验。",
            "快来6399play，和朋友一起双人对战，享受益智与竞技的乐趣吧！"
        ],
        gameOver: "游戏结束！",
        playerWins: "玩家 {player} 获胜！",
        timeUp: "时间到！",
        draw: "平局！"
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateUIText();
}

function getText(key, params = {}) {
    let text = translations[currentLanguage][key] || translations['en'][key];
    if (params) {
        Object.keys(params).forEach(param => {
            text = text.replace(`{${param}}`, params[param]);
        });
    }
    return text;
}

function updateUIText() {
    document.getElementById('game-title').textContent = getText('title');
    document.getElementById('player1-title').textContent = getText('player1');
    document.getElementById('player2-title').textContent = getText('player2');
    document.getElementById('start-game').textContent = getText('startGame');
    document.getElementById('instructions-title').textContent = getText('howToPlay');

    // 动态渲染说明内容
    const instructionsContent = translations[currentLanguage].instructionsContent;
    const container = document.querySelector('.instructions-content');
    container.innerHTML = '';
    instructionsContent.forEach(line => {
        const p = document.createElement('p');
        p.innerHTML = line;
        container.appendChild(p);
    });
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    languageSelect.value = currentLanguage;
    languageSelect.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
    });
    updateUIText();
}); 