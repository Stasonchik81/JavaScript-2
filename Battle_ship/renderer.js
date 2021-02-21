let renderer = {
    renderMap(){ // отрисовка игрового поля
        let divBoard = document.getElementById('board');
        divBoard.innerText = '';
        // создание поля для сообщений
        let massage = document.createElement('div');
        massage.setAttribute('id', 'message');
        divBoard.appendChild(massage);
        // создание таблицы на игровом поле
        let board = document.createElement('table');
        divBoard.appendChild(board);
        for(let i = 0; i<=model.boardSize; i++){
            let tr = document.createElement('tr');
            board.appendChild(tr);
            for(let j = 0; j<=model.boardSize; j++){
                let td = document.createElement('td');
                td.setAttribute('id', `${i}${j}`); // установка для каждой ячейки атрибутов ID (координат)
                tr.appendChild(td);
            }
        }
        // отрисовка формы для ввода координат выстрела
        let form = document.createElement('form');
        divBoard.appendChild(form);
        let input1 = document.createElement('input');
        let input2 = document.createElement('input');
        let Attr1 = ['type', 'id', 'placeholder'];
        let Attr2 = ['type', 'id', 'value'];
        let Values1 = ['text', 'guessInput', 'A0'];
        let Values2 = ['button', 'fireButton', 'Fire!'];
        for(let i = 0; i<3; i++){
            input1.setAttribute(Attr1[i], Values1[i]);
            input2.setAttribute(Attr2[i], Values2[i]);
        }
        form.appendChild(input1);
        form.appendChild(input2);
    },
    displaymassage(message){ // отображение сообщения
        let messageArea = document.getElementById('message');
        messageArea.innerHTML = message;
    },
    displayhit(location){ // отметка на поле попадания 
        document.getElementById(location).classList.add('hit');
        let message = 'Ты попал!';
        return message;
    },
    displaymiss(location){ // отметка на поле промаха
        document.getElementById(location).classList.add('miss');
        let message = 'Ты промахнулся!';
        return message;
    },
    displayAll(ships){ // для ленивых (отобразить корабли на поле)
        for(let i =0; i<model.ships.length; i++){
            for(let j=0; j<model.shipLength; j++){
                let loc = ships[i].body[j];
                renderer.displayhit(loc);
            }
        }
    },

    clearAll(ships){ // для ленивых (спрятать корабли на поле)
        for(let i =0; i<model.ships.length; i++){
            for(let j=0; j<model.shipLength; j++){
                let loc = ships[i].body[j];
                document.getElementById(loc).classList.remove('hit');
            }
        }
    }

}