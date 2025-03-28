function updateInterfaceLanguage(language) {
    const translations = {
        'zh-CN': {
            // 左侧菜单
            menu: {
                home: '首页',
                recentlyPlayed: '最近玩过',
                newGames: '新游戏',
                popularGames: '热门游戏',
                // 游戏分类
                categories: '游戏分类',
                puzzleGames: '益智解谜',
                actionGames: '动作冒险',
                strategyGames: '策略游戏',
                arcadeGames: '街机游戏',
                sportsGames: '体育竞技',
                racingGames: '赛车竞速',
                shootingGames: '射击游戏',
                cardGames: '卡牌游戏',
                boardGames: '棋盘游戏',
                wordGames: '文字游戏'
            },
            // 顶部区域
            header: {
                search: '搜索游戏...',
                guest: '访客'
            },
            // 主标题区域
            hero: {
                title: '游戏世界',
                subtitle: '无尽娱乐',
                description: '发现数百款可直接在浏览器中玩的免费游戏，无需下载，无需安装 - 即刻享受乐趣！'
            },
            // 统计数据
            stats: {
                gameCount: '游戏总数',
                activeUsers: '活跃用户',
                freeGames: '免费游戏'
            },
            // 分类标题
            categories: {
                title: '热门分类',
                puzzle: '益智游戏',
                action: '动作游戏',
                strategy: '策略游戏',
                card: '卡牌游戏'
            },
            // 游戏卡片
            gameCard: {
                playNow: '立即玩',
                moreInfo: '更多信息'
            },
            sections: {
                popularGames: '热门分类',
                featuredGames: '精选游戏',
                friendsPlaying: '朋友在玩',
                playNow: '立即玩',
                moreInfo: '更多信息'
            }
        },
        'en': {
            menu: {
                home: 'Home',
                recentlyPlayed: 'Recently Played',
                newGames: 'New Games',
                popularGames: 'Popular Games',
                // 游戏分类
                categories: 'Categories',
                puzzleGames: 'Puzzle Games',
                actionGames: 'Action & Adventure',
                strategyGames: 'Strategy Games',
                arcadeGames: 'Arcade Games',
                sportsGames: 'Sports Games',
                racingGames: 'Racing Games',
                shootingGames: 'Shooting Games',
                cardGames: 'Card Games',
                boardGames: 'Board Games',
                wordGames: 'Word Games'
            },
            header: {
                search: 'Search games...',
                guest: 'Guest'
            },
            hero: {
                title: 'Game World',
                subtitle: 'Endless Fun',
                description: 'Discover hundreds of free games playable directly in your browser - no download required!'
            },
            stats: {
                gameCount: 'Games',
                activeUsers: 'Active Users',
                freeGames: 'Free Games'
            },
            categories: {
                title: 'Popular Categories',
                puzzle: 'Puzzle Games',
                action: 'Action Games',
                strategy: 'Strategy Games',
                card: 'Card Games'
            },
            gameCard: {
                playNow: 'Play Now',
                moreInfo: 'More Info'
            },
            sections: {
                popularGames: 'Popular Categories',
                featuredGames: 'Featured Games',
                friendsPlaying: 'Friends Playing',
                playNow: 'Play Now',
                moreInfo: 'More Info'
            }
        },
        'ja': {
            menu: {
                home: 'ホーム',
                recentlyPlayed: '最近プレイしたゲーム',
                newGames: '新着ゲーム',
                popularGames: '人気ゲーム',
                // 游戏分类
                categories: 'カテゴリー',
                puzzleGames: 'パズルゲーム',
                actionGames: 'アクション＆アドベンチャー',
                strategyGames: '戦略ゲーム',
                arcadeGames: 'アーケードゲーム',
                sportsGames: 'スポーツゲーム',
                racingGames: 'レースゲーム',
                shootingGames: 'シューティングゲーム',
                cardGames: 'カードゲーム',
                boardGames: 'ボードゲーム',
                wordGames: 'ワードゲーム'
            },
            search: 'ゲームを検索...',
            title: 'ゲームワールド',
            subtitle: '無限の楽しみ',
            description: 'ブラウザで直接プレイできる無料ゲームを何百も発見しよう！',
            gameCount: 'ゲーム数',
            activeUsers: 'アクティブユーザー',
            freeGames: '無料ゲーム',
            playNow: 'プレイする',
            moreInfo: '詳細情報',
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
            privacy: 'プライバシーポリシー',
            sections: {
                featuredGames: 'おすすめゲーム',
                friendsPlaying: '友達がプレイ中',
                playNow: 'プレイする',
                moreInfo: '詳細情報'
            }
        }
        // 可以继续添加其他语言...
    };

    const texts = translations[language] || translations['en'];
    
    // 使用fade效果更新文本
    function updateTextWithFade(element, newText) {
        if (!element) return;
        element.style.opacity = '0';
        setTimeout(() => {
            element.textContent = newText;
            element.style.opacity = '1';
        }, 200);
    }

    // 更新左侧菜单栏
    const menuSelectors = {
        // 主导航
        '.nav-home span': texts.menu.home,
        '.nav-recent span': texts.menu.recentlyPlayed,
        '.nav-new span': texts.menu.newGames,
        '.nav-popular span': texts.menu.popularGames,
        // 分类标题
        '.categories-title': texts.menu.categories,
        // 游戏分类
        '.nav-puzzle span': texts.menu.puzzleGames,
        '.nav-action span': texts.menu.actionGames,
        '.nav-strategy span': texts.menu.strategyGames,
        '.nav-arcade span': texts.menu.arcadeGames,
        '.nav-sports span': texts.menu.sportsGames,
        '.nav-racing span': texts.menu.racingGames,
        '.nav-shooting span': texts.menu.shootingGames,
        '.nav-card span': texts.menu.cardGames,
        '.nav-board span': texts.menu.boardGames,
        '.nav-word span': texts.menu.wordGames
    };

    // 更新所有菜单文本
    for (let [selector, text] of Object.entries(menuSelectors)) {
        const element = document.querySelector(selector);
        updateTextWithFade(element, text);
    }

    // 更新搜索框占位符
    document.querySelector('input[type="text"]').placeholder = texts.header.search;

    // 更新访客文本
    document.querySelector('.flex.items-center.space-x-2 span').textContent = texts.header.guest;

    // 更新主标题区域
    updateTextWithFade(document.querySelector('h1 span:first-child'), texts.hero.title);
    updateTextWithFade(document.querySelector('h1 span:last-child'), texts.hero.subtitle);
    updateTextWithFade(document.querySelector('.text-gray-400.text-lg'), texts.hero.description);

    // 更新统计数据
    document.querySelectorAll('.stat-card .text-gray-400').forEach((el, index) => {
        if (index === 0) updateTextWithFade(el, texts.stats.gameCount);
        if (index === 1) updateTextWithFade(el, texts.stats.activeUsers);
        if (index === 2) updateTextWithFade(el, texts.stats.freeGames);
    });

    // 更新分类标题和标签
    updateTextWithFade(document.querySelector('h2.text-xl'), texts.categories.title);
    document.querySelectorAll('.category-tag').forEach((btn, index) => {
        const categories = [
            texts.categories.puzzle,
            texts.categories.action,
            texts.categories.strategy,
            texts.categories.card
        ];
        if (categories[index]) {
            updateTextWithFade(btn, categories[index]);
        }
    });

    // 更新游戏卡片按钮
    document.querySelectorAll('.game-card button').forEach(btn => {
        updateTextWithFade(btn, texts.gameCard.playNow);
    });

    document.querySelectorAll('.game-card a').forEach(link => {
        updateTextWithFade(link, texts.gameCard.moreInfo);
    });

    // 更新新增区域的标题
    updateTextWithFade(document.querySelector('.featured-games-title'), texts.sections.featuredGames);
    updateTextWithFade(document.querySelector('.friends-playing-title'), texts.sections.friendsPlaying);

    // 更新新增区域的按钮文本
    document.querySelectorAll('.game-card button').forEach(btn => {
        updateTextWithFade(btn, texts.sections.playNow);
    });

    document.querySelectorAll('.game-card a').forEach(link => {
        updateTextWithFade(link, texts.sections.moreInfo);
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

// 移除之前的移动端相关代码，只保留核心功能
document.addEventListener('DOMContentLoaded', function() {
    // 语言切换功能
    const languageSelect = document.querySelector('.language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            const selectedLanguage = e.target.value;
            localStorage.setItem('preferred-language', selectedLanguage);
            updateInterfaceLanguage(selectedLanguage);
        });
    }

    // 初始化语言设置
    const savedLanguage = localStorage.getItem('preferred-language') || 'zh-CN';
    if (languageSelect) {
        languageSelect.value = savedLanguage;
        updateInterfaceLanguage(savedLanguage);
    }

    // 优化滚动性能
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                // 执行滚动相关的操作
                ticking = false;
            });
            ticking = true;
        }
    });
});
