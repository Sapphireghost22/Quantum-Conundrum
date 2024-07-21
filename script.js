// Define the game elements
const gameBoard = document.getElementById('game-board');
const startGameButton = document.getElementById('start-game');
const playerInfo = document.getElementById('player-info');
const gameMessages = document.getElementById('game-messages');

// Game data
let gameData = {
    players: [],
    currentPlayerIndex: 0,
    gameStarted: false,
};

// Game setup
const setupGame = () => {
    gameData.players = [
        { name: 'Physicist', knowledge: 'Physics', position: 0 },
        { name: 'Chemist', knowledge: 'Chemistry', position: 0 },
        { name: 'Biologist', knowledge: 'Biology', position: 0 },
        { name: 'Mathematician', knowledge: 'Mathematics', position: 0 },
        { name: 'Engineer', knowledge: 'Engineering', position: 0 },
        { name: 'Historian', knowledge: 'History', position: 0 }
    ];
    gameData.currentPlayerIndex = 0;
    gameData.gameStarted = true;
    renderBoard();
    updatePlayerInfo();
    updateGameMessages('Game has started. Good luck!');
};

// Render the game board
const renderBoard = () => {
    gameBoard.innerHTML = '';
    const eras = ['Ancient Egypt', 'Renaissance Italy', 'Victorian England', 'Modern Day', 'The Future'];
    eras.forEach((era, index) => {
        const eraDiv = document.createElement('div');
        eraDiv.className = 'era';
        eraDiv.innerText = era;
        eraDiv.dataset.index = index;
        gameBoard.appendChild(eraDiv);
    });
};

// Update player information display
const updatePlayerInfo = () => {
    const currentPlayer = gameData.players[gameData.currentPlayerIndex];
    playerInfo.innerHTML = `
        <h2>Current Player: ${currentPlayer.name}</h2>
        <p>Knowledge: ${currentPlayer.knowledge}</p>
        <p>Position: ${currentPlayer.position}</p>
    `;
};

// Update game messages
const updateGameMessages = (message) => {
    gameMessages.innerText = message;
};

// Move player to next era
const movePlayer = () => {
    if (!gameData.gameStarted) return;
    const currentPlayer = gameData.players[gameData.currentPlayerIndex];
    currentPlayer.position += 1;
    if (currentPlayer.position >= 5) {
        currentPlayer.position = 0;
    }
    updatePlayerInfo();
    updateGameMessages(`${currentPlayer.name} moved to ${gameBoard.children[currentPlayer.position].innerText}`);
    nextPlayer();
};

// Move to next player
const nextPlayer = () => {
    gameData.currentPlayerIndex += 1;
    if (gameData.currentPlayerIndex >= gameData.players.length) {
        gameData.currentPlayerIndex = 0;
    }
    updatePlayerInfo();
};

// Event listeners
startGameButton.addEventListener('click', setupGame);
gameBoard.addEventListener('click', movePlayer);
