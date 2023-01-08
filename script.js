(function() {   
    const cellOne = document.getElementById('1');
    const cellTwo = document.getElementById('2');
    const cellThree = document.getElementById('3');
    const cellFour = document.getElementById('4');
    const cellFive = document.getElementById('5');
    const cellSix = document.getElementById('6');
    const cellSeven = document.getElementById('7');
    const cellEight = document.getElementById('8');
    const cellNine = document.getElementById('9');
    const clearButton = document.getElementById('clrBtn');
    const winner = document.querySelector('.winner')
    var gameBoard = {
        layout: ['','','','','','','','',''],
        player: 'x',
        render: function () {
            cellOne.textContent = `${gameBoard.layout[0]}`
            cellTwo.textContent = `${gameBoard.layout[1]}`
            cellThree.textContent = `${gameBoard.layout[2]}`
            cellFour.textContent = `${gameBoard.layout[3]}`
            cellFive.textContent = `${gameBoard.layout[4]}`
            cellSix.textContent = `${gameBoard.layout[5]}`
            cellSeven.textContent = `${gameBoard.layout[6]}`
            cellEight.textContent = `${gameBoard.layout[7]}`
            cellNine.textContent = `${gameBoard.layout[8]}`
        },
        bind: function () {
            cellOne.addEventListener('click', () => {gameBoard.markSquare1(); 
                gameBoard.winLogic();})
            cellTwo.addEventListener('click', () => {gameBoard.markSquare2(); 
                gameBoard.winLogic();})
            cellThree.addEventListener('click', () => {gameBoard.markSquare3();
                gameBoard.winLogic();})
            cellFour.addEventListener('click', () => {gameBoard.markSquare4();
                gameBoard.winLogic();})
            cellFive.addEventListener('click', () => {gameBoard.markSquare5();
                gameBoard.winLogic();})
            cellSix.addEventListener('click', () => {gameBoard.markSquare6();
                gameBoard.winLogic();})
            cellSeven.addEventListener('click', () => {gameBoard.markSquare7();
                gameBoard.winLogic();})
            cellEight.addEventListener('click', () => {gameBoard.markSquare8();
                gameBoard.winLogic();})
            cellNine.addEventListener('click', () => {gameBoard.markSquare9();
                gameBoard.winLogic();})
            clearButton.addEventListener('click', () => {gameBoard.clear()})
        },
        markSquare1: function () {
            if (gameBoard.layout[0] === '') {
                if (gameBoard.player === 'x') {
                    gameBoard.layout[0] = 'X'
                    gameBoard.player = 'o'
                    gameBoard.render();

                } else {
                    gameBoard.layout[0] = 'O'
                    gameBoard.player = 'x'
                    gameBoard.render();
                }
            } 
        },
        markSquare2: function () {
            if (gameBoard.layout[1] === '') {
                if (gameBoard.player === 'x') {
                    gameBoard.layout[1] = 'X'
                    gameBoard.player = 'o'
                    gameBoard.render();

                } else {
                    gameBoard.layout[1] = 'O'
                    gameBoard.player = 'x'
                    gameBoard.render();
                }
            } 
        },
        markSquare3: function () {
            if (gameBoard.layout[2] === '') {
                if (gameBoard.player === 'x') {
                    gameBoard.layout[2] = 'X'
                    gameBoard.player = 'o'
                    gameBoard.render();

                } else {
                    gameBoard.layout[2] = 'O'
                    gameBoard.player = 'x'
                    gameBoard.render();
                }
            } 
        },
        markSquare4: function () {
            if (gameBoard.layout[3] === '') {
                if (gameBoard.player === 'x') {
                    gameBoard.layout[3] = 'X'
                    gameBoard.player = 'o'
                    gameBoard.render();

                } else {
                    gameBoard.layout[3] = 'O'
                    gameBoard.player = 'x'
                    gameBoard.render();
                }
            } 
        },
        markSquare5: function () {
            if (gameBoard.layout[4] === '') {
                if (gameBoard.player === 'x') {
                    gameBoard.layout[4] = 'X'
                    gameBoard.player = 'o'
                    gameBoard.render();

                } else {
                    gameBoard.layout[4] = 'O'
                    gameBoard.player = 'x'
                    gameBoard.render();
                }
            } 
        },
        markSquare6: function () {
            if (gameBoard.layout[5] === '') {
                if (gameBoard.player === 'x') {
                    gameBoard.layout[5] = 'X'
                    gameBoard.player = 'o'
                    gameBoard.render();

                } else {
                    gameBoard.layout[5] = 'O'
                    gameBoard.player = 'x'
                    gameBoard.render();
                }
            } 
        },
        markSquare7: function () {
            if (gameBoard.layout[6] === '') {
                if (gameBoard.player === 'x') {
                    gameBoard.layout[6] = 'X'
                    gameBoard.player = 'o'
                    gameBoard.render();

                } else {
                    gameBoard.layout[6] = 'O'
                    gameBoard.player = 'x'
                    gameBoard.render();
                }
            } 
        },
        markSquare8: function () {
            if (gameBoard.layout[7] === '') {
                if (gameBoard.player === 'x') {
                    gameBoard.layout[7] = 'X'
                    gameBoard.player = 'o'
                    gameBoard.render();

                } else {
                    gameBoard.layout[7] = 'O'
                    gameBoard.player = 'x'
                    gameBoard.render();
                }
            } 
        },
        markSquare9: function () {
            if (gameBoard.layout[8] === '') {
                if (gameBoard.player === 'x') {
                    gameBoard.layout[8] = 'X'
                    gameBoard.player = 'o'
                    gameBoard.render();

                } else {
                    gameBoard.layout[8] = 'O'
                    gameBoard.player = 'x'
                    gameBoard.render();
                }
            } 
        },
        winLogic: function () {
            if ( (((cellOne.textContent === 'X')&&(cellTwo.textContent === 'X')&&
                (cellThree.textContent === 'X')) || ((cellFour.textContent === 'X')&&(cellFive.textContent === 'X')&&
                (cellSix.textContent === 'X')) || ((cellSeven.textContent === 'X')&&(cellEight.textContent === 'X')&&
                (cellNine.textContent === 'X')) || ((cellOne.textContent === 'X')&&(cellFour.textContent === 'X')&&
                (cellSeven.textContent === 'X')) || ((cellTwo.textContent === 'X')&&(cellFive.textContent === 'X')&&
                (cellEight.textContent === 'X')) || ((cellThree.textContent === 'X')&&(cellSix.textContent === 'X')&&
                (cellNine.textContent === 'X')) || ((cellOne.textContent === 'X')&&(cellFive.textContent === 'X')&&
                (cellNine.textContent === 'X')) || ((cellThree.textContent === 'X')&&(cellFive.textContent === 'X')&&
                (cellSeven.textContent === 'X')))&&(winner.textContent === '') ) {
                    winner.textContent = 'Player X Wins!'
                } else if ( (((cellOne.textContent === 'O')&&(cellTwo.textContent === 'O')&&
                (cellThree.textContent === 'O')) || ((cellFour.textContent === 'O')&&(cellFive.textContent === 'O')&&
                (cellSix.textContent === 'O')) || ((cellSeven.textContent === 'O')&&(cellEight.textContent === 'O')&&
                (cellNine.textContent === 'O')) || ((cellOne.textContent === 'O')&&(cellFour.textContent === 'O')&&
                (cellSeven.textContent === 'O')) || ((cellTwo.textContent === 'O')&&(cellFive.textContent === 'O')&&
                (cellEight.textContent === 'O')) || ((cellThree.textContent === 'O')&&(cellSix.textContent === 'O')&&
                (cellNine.textContent === 'O')) || ((cellOne.textContent === 'O')&&(cellFive.textContent === 'O')&&
                (cellNine.textContent === 'O')) || ((cellThree.textContent === 'O')&&(cellFive.textContent === 'O')&&
                (cellSeven.textContent === 'O')))&&(winner.textContent === '') ) {
                    winner.textContent = 'Player O Wins!'
                } else {
                    let count = 0;
                    for (i = 0; i < 9; i++){
                        if (gameBoard.layout[i] !== ''){
                            count += 1
                        }
                    }
                    if ((count === 9)&&(winner.textContent === '')) {
                        winner.textContent = 'Tie!'
                    }
                    count = 0;
                }
        },
        clear: function () {
            gameBoard.layout = ['','','','','','','','','']
            gameBoard.render();
            gameBoard.player = 'x'
            winner.textContent = ''
        },
        init: function () {
            this.render();
            this.bind();
        },
    }
    gameBoard.init();
    
})()
