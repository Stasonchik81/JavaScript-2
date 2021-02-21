renderer.renderMap();
window.onload = init;




let controller = {
    guesses: 0,
    gameRunning: false,
    processGuess(guess){ // обработчик выстрела
    let location = this.parseGuess(guess);
    if(location){
        this.guesses++;
        let hit = model.fire(location);
        if(hit && model.shipsSunk === model.numShips){
            renderer.displaymassage(`Все корабли потоплены за ${this.guesses} выстрелов! Ура!!!`);
            this.stopGame();
        }
    }
},
    parseGuess(guess){ // обработчик введённых координат
        let error = 'ошибка ввода!';
        let alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        if(guess === null || guess.length != 2){
            alert(error);
            return null;
        }
        else{
            var row = alfabet.indexOf(guess.toUpperCase().charAt(0));
            var col = guess.charAt(1);
            if (isNaN(row) || isNaN(col)){
                alert(error);
                return null;
            }
            else{
                if(row > model.boardSize || row < 0 || col > model.boardSize || col < 0){
                    alert(error);
                    return null;
                }
            }
            return row+col;
        }
    },
    startGame(){
        return this.gameRunning = true;
    },
    stopGame(){
        return this.gameRunning = false;
    },
    
}

function handleFireButton(){
    if (controller.gameRunning){
        // получение координат из формы
        let guessInput = document.getElementById('guessInput');
        let guess = guessInput.value;
        // передача их в контроллер
        controller.processGuess(guess);
        guessInput.value = '';
    }
}

function handleKeyPress(e){
    let buttonFire = document.getElementById('fireButton');
    if (e.keyCode === 13){
        buttonFire.click();
        return false;
    }
}

function init(){
    controller.startGame();
    if (controller.gameRunning){
        let buttonFire = document.getElementById('fireButton');
        buttonFire.onclick = handleFireButton;
        let guessInput = document.getElementById('guessInput');
        guessInput.onkeypress = handleKeyPress;
        model.generateShipLocations();
        // renderer.displayAll(model.ships);                // отобразить корабли
        // setTimeout(renderer.clearAll, 5000, model.ships); // через 5 сек спрятать обратно
    }
    
}




// реализовать генерацию кораблей на поле в случайном порядке
// сделать невозможным ввод координат выстрела после окончания игры 
