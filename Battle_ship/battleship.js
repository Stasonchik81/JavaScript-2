let settings = {
    rowsCount: 6,
    collsCount: 6
}
let renderer = {
    cells: {},
    renderMap(){
        let divBoard = document.getElementById('board');
        divBoard.innerText = '';
        let massage = document.createElement('div');
        massage.setAttribute('id', 'massege');
        divBoard.appendChild(massage);
        let board = document.createElement('table');
        divBoard.appendChild(board);
        for(let i = 0; i<=settings.collsCount; i++){
            let tr = document.createElement('tr');
            board.appendChild(tr);
            for(let j = 0; j<=settings.rowsCount; j++){
                let td = document.createElement('td');
                td.setAttribute('id', `${i}${j}`);
                tr.appendChild(td);
            }
        }
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
    }
}

renderer.renderMap();
document.getElementById('00').classList.add('hit');
document.getElementById('02').classList.add('miss');
