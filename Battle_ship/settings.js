let model = {
    boardSize: 6,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [],
    fire: function(guess){
        for (let i=0; i<this.numShips; i++){
            let ship = this.ships[i];
            let index = ship.body.indexOf(guess);
            if(index>=0){
                ship.hits[index] = 'hit';
                renderer.displaymassage(renderer.displayhit(guess));
                if(this.isSunk(ship.hits)){
                    this.shipsSunk++;
                    renderer.displaymassage('корабль потоплен!!!');
                }
               return true;
            }
        }
        renderer.displaymassage(renderer.displaymiss(guess));
        return false;
    },
    isSunk: function(s){
        for(let i=0; i<s.length; i++){
            if (s[i] !== 'hit'){
                return false;
            } 
        }
        return true; 
    },
    generateShipLocations(){ // доработать метод генерации кораблей !!!!!
        let location;
        let i = this.numShips;          // устанавливаем счётчик равным количеству кораблей
        location = this.generateShip(); // генерируем первый корабль
        this.ships.push(location);      // добавляем его в список кораблей
            i--;
            do {
                location = this.generateShip(); // генерируем следующий корабль
                if(!this.checkLocation(location)){ // проверяем на совпадение с существующими
                    this.ships.push(location);      // при несовпадении добавляем в список кораблей
                    i--;                            // уменьшаем счётчик
                }
            } 
            while (i>0)                     // выполняем пока счетчик работает
    },

    generateShip(){
        let location = new ship();
        location.body = [];
        location.hits = [];
        let row, col;
        let direction = Math.floor(Math.random()*2);
        if (direction === 1){
            // начальная точка для горизонтального корабля
            col = Math.floor(Math.random()*(this.boardSize-this.shipLength));
            row = Math.floor(Math.random()*this.boardSize);
        }
        else{
            // начальная точка для вертикального корабля
            row = Math.floor(Math.random()*(this.boardSize-this.shipLength));
            col = Math.floor(Math.random()*this.boardSize);
        }
        for( let i=0; i<this.shipLength; i++){
            if(direction === 1){
                // наполняем массив для горизонтального корабля
                location.body.push(row+''+(col+i));
            }
            else{
                // наполняем массив для вертикального корабля
                location.body.push((row+i)+''+col);
            }
            location.hits.push('');
        }
        return location;
         
    },
    checkLocation(location){
        // проверка на совпадение позиций существующих кораблей с сгенерированным
        for (let i=0; i<this.ships.length; i++){
            // проходим по существующим кораблям
            let ship = this.ships[i].body;
            for(let j=0; j<this.shipLength; j++){
                // проходим по телу сгенерированного корабля
                if(ship.some(el => el===location.body[j])){
                    // при совпадении хотя бы одной точки сгенерированного корабля с точкой текущего корабля
                    return true;
                }
            }
        }
        return false;
    }
    
}
class ship {
    constructor(body, hits){
        this.body = body;
        this.hits = hits;
    }
    
}


