const board = document.querySelector("#board");
const newTr = document.createElement('tr');
let listLetters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

board.appendChild(newTr);
for (let l of listLetters) {
    const newTh = document.createElement('th');
    newTh.textContent = l;
    newTr.appendChild(newTh);
}
for (let j = 8; j > 0; j--) {
    const newTr = document.createElement('tr');
    board.appendChild(newTr);
    const newTh = document.createElement('th');
    newTh.textContent = j;
    newTr.appendChild(newTh);
    for (let i = 8; i > 0; i--) {
        const newTd = document.createElement('td');
        if (j % 2 === 0){
            newTd.className = i % 2 === 0 ? 'light' : 'dark';
        }
        else newTd.className = i % 2 === 0 ? 'dark' : 'light';
        newTr.appendChild(newTd);
    }
}