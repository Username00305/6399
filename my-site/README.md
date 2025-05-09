# 2048 Duel

A multiplayer version of the classic 2048 game where two players compete against each other in real-time.

## Features

- Two-player gameplay
- Player 1 uses WASD keys
- Player 2 uses Arrow keys
- Customizable game duration
- Bilingual support (English/Chinese)
- Responsive design
- Score tracking
- Game over detection

## How to Play

1. Choose your preferred language (English/Chinese)
2. Select game duration (3 minutes, 5 minutes, 10 minutes, or custom)
3. Click "Start Game" to begin
4. Use WASD keys (Player 1) or Arrow keys (Player 2) to move tiles
5. When two tiles with the same number touch, they merge into one!
6. Try to reach the 2048 tile!
7. The player with the highest score when time runs out wins!

## Technical Details

### Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- JavaScript (ES6+)
- No external dependencies

### Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── js/
│   ├── main.js         # Main game logic
│   ├── board.js        # Board class and game mechanics
│   ├── timer.js        # Timer functionality
│   ├── input.js        # Keyboard input handling
│   └── i18n.js         # Internationalization
└── README.md           # This file
```

### Setup

1. Clone the repository
2. Open `index.html` in a modern web browser
3. No build process or dependencies required

## Browser Support

The game works in all modern browsers that support ES6+ JavaScript features.

## License

This project is open source and available under the MIT License. 