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
    var gameBoard = {
        layout: ['','','','','','','','',''],
        player: 'x',
        render: function () {
            console.log(gameBoard.layout)
            console.log(cellOne)
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
            cellOne.addEventListener('click', () => {gameBoard.markSquare1()})
            cellTwo.addEventListener('click', () => {gameBoard.markSquare2()})
            cellThree.addEventListener('click', () => {gameBoard.markSquare3()})
            cellFour.addEventListener('click', () => {gameBoard.markSquare4()})
            cellFive.addEventListener('click', () => {gameBoard.markSquare5()})
            cellSix.addEventListener('click', () => {gameBoard.markSquare6()})
            cellSeven.addEventListener('click', () => {gameBoard.markSquare7()})
            cellEight.addEventListener('click', () => {gameBoard.markSquare8()})
            cellNine.addEventListener('click', () => {gameBoard.markSquare9()})
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
        clear: function () {
            gameBoard.layout = ['','','','','','','','','']
            gameBoard.render();
        },
        init: function () {
            this.render();
            this.bind();
        },
    }
    gameBoard.init();
})()
