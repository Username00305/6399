function updateInterfaceLanguage(language) {
    const translations = {
        'zh-CN': {
            search: '搜索游戏...',
            title: '游戏世界',
            subtitle: '无尽娱乐',
            description: '发现数百款可直接在浏览器中玩的免费游戏，无需下载，无需安装 - 即刻享受乐趣！',
            gameCount: '游戏总数',
            activeUsers: '活跃用户',
            freeGames: '免费游戏',
            playNow: '立即玩',
            moreInfo: '更多信息',
            categories: '热门分类',
            puzzleGames: '益智游戏',
            actionGames: '动作游戏',
            strategyGames: '策略游戏',
            cardGames: '卡牌游戏',
            home: '首页',
            recent: '最近玩过',
            new: '新游戏',
            hot: '热门',
            update: '更新',
            arcade: '街机游戏',
            puzzle: '益智游戏',
            action: '动作游戏',
            quickLinks: '快速链接',
            information: '信息',
            about: '关于我们',
            privacy: '隐私政策'
        },
        'en': {
            search: 'Search games...',
            title: 'Game World',
            subtitle: 'Endless Fun',
            description: 'Discover hundreds of free games playable directly in your browser - no download required!',
            gameCount: 'Games',
            activeUsers: 'Active Users',
            freeGames: 'Free Games',
            playNow: 'Play Now',
            moreInfo: 'More Info',
            categories: 'Popular Categories',
            puzzleGames: 'Puzzle Games',
            actionGames: 'Action Games',
            strategyGames: 'Strategy Games',
            cardGames: 'Card Games',
            home: 'Home',
            recent: 'Recently Played',
            new: 'New Games',
            hot: 'Hot',
            update: 'Update',
            arcade: 'Arcade Games',
            puzzle: 'Puzzle Games',
            action: 'Action Games',
            quickLinks: 'Quick Links',
            information: 'Information',
            about: 'About Us',
            privacy: 'Privacy Policy'
        },
        'ja': {
            search: 'ゲームを検索...',
            title: 'ゲームワールド',
            subtitle: '無限の楽しみ',
            description: 'ブラウザで直接プレイできる無料ゲームを何百も発見しよう！',
            gameCount: 'ゲーム数',
            activeUsers: 'アクティブユーザー',
            freeGames: '無料ゲーム',
            playNow: 'プレイする',
            moreInfo: '詳細情報',
            categories: '人気カテゴリー',
            puzzleGames: 'パズルゲーム',
            actionGames: 'アクションゲーム',
            strategyGames: '戦略ゲーム',
            cardGames: 'カードゲーム',
            home: 'ホーム',
            recent: '最近プレイした',
            new: '新しいゲーム',
            hot: '人気',
            update: '更新',
            arcade: 'アーケードゲーム',
            puzzle: 'パズルゲーム',
            action: 'アクションゲーム',
            quickLinks: 'クイックリンク',
            information: '情報',
            about: '私たちについて',
            privacy: 'プライバシーポリシー'
        }
        // 可以继续添加其他语言...
    };

    const texts = translations[language] || translations['en'];
    
    // 更新所有可翻译元素
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (texts[key]) {
            element.textContent = texts[key];
        }
    });

    // 更新所有需要翻译的文本
    const elements = {
        'input[placeholder]': 'search',
        'h1 span:first-child': 'title',
        'h1 span:last-child': 'subtitle',
        '.text-gray-400.text-lg': 'description',
        'h2.text-xl': 'categories'
    };

    // 使用动画效果更新文本
    for (let [selector, key] of Object.entries(elements)) {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            setTimeout(() => {
                element.textContent = texts[key];
                element.style.opacity = '1';
            }, 200);
        }
    }

    // 更新统计卡片
    document.querySelectorAll('.stat-card .text-gray-400').forEach((el, index) => {
        el.style.opacity = '0';
        setTimeout(() => {
            if (index === 0) el.textContent = texts.gameCount;
            if (index === 1) el.textContent = texts.activeUsers;
            if (index === 2) el.textContent = texts.freeGames;
            el.style.opacity = '1';
        }, 200);
    });

    // 更新游戏分类按钮
    document.querySelectorAll('.category-tag').forEach((btn, index) => {
        btn.style.opacity = '0';
        setTimeout(() => {
            const categories = [texts.puzzleGames, texts.actionGames, texts.strategyGames, texts.cardGames];
            if (categories[index]) {
                btn.textContent = categories[index];
            }
            btn.style.opacity = '1';
        }, 200);
    });

    // 更新游戏卡片按钮
    document.querySelectorAll('.game-card button').forEach(btn => {
        btn.style.opacity = '0';
        setTimeout(() => {
            btn.textContent = texts.playNow;
            btn.style.opacity = '1';
        }, 200);
    });

    document.querySelectorAll('.game-card a').forEach(link => {
        link.style.opacity = '0';
        setTimeout(() => {
            link.textContent = texts.moreInfo;
            link.style.opacity = '1';
        }, 200);
    });

    // 添加过渡效果的样式
    const style = document.createElement('style');
    style.textContent = `
        .fade-transition {
            transition: opacity 0.2s ease-in-out;
        }
    `;
    document.head.appendChild(style);
}

// 添加到现有的script标签中
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            
            // 更新活动状态
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// 在现有script标签中添加
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        // 移除所有active类
        document.querySelectorAll('.nav-item').forEach(i => {
            i.classList.remove('active');
        });
        
        // 添加active类到当前点击项
        this.classList.add('active');
        
        // 如果是分类链接，滚动到对应区域
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// 在script标签中添加
const cursor = document.createElement('div');
cursor.className = 'cursor-glow';
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    // 平滑跟随效果
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    
    cursorX += dx * 0.1;
    cursorY += dy * 0.1;
    
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    
    requestAnimationFrame(animate);
}

animate();

// 添加交互效果
document.querySelectorAll('.game-card, .nav-item, button, a').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.mixBlendMode = 'difference';
    });
    
    elem.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.mixBlendMode = 'normal';
    });
});
