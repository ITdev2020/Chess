function crSect() {
    a = document.createElement('section');
    document.body.insertAdjacentElement('afterbegin', a);
}
function crDiv(clName) {
    a = document.createElement('div');
    a.classList.add(clName);
    querElem = 'section';
    insElem(a, querElem);
}
function crSpan(clName) {
    a = document.createElement('span');
    querElem = 'div.' + clName;
    insElem(a, querElem);
}
// 
function insElem(a, querElem) {
    b = document.querySelector(querElem);
    b.insertAdjacentElement('afterbegin', a);
}
// 
// 
function cellAtr(cellIndex, colr) {
    // 		console.log('inside cc, color=' + colr);
    var nthCell = document.querySelector('span:nth-child(1)');
    nthCell.classList.add(cellIndex);
    nthCell.style.backgroundColor = colr;
}
// 
// 
// index
function indRow() {
    clName = 'board-index-row';
    crDiv(clName);
    i = 1;
    while (i <= 8) {
        crSpan(clName);
        var nthSpan = document.querySelector('div.' + clName + '>span:nth-child(1)');
        rowChar = String.fromCharCode(73 - i);
        nthSpan.innerHTML = rowChar;
        i++;
    }
}
function indCol() {
    clName = 'board-index-column';
    crDiv(clName);
    i = 1;
    while (i <= 8) {
        crSpan(clName);
        var nthSpan = document.querySelector('div.' + clName + '>span:nth-child(1)');
        nthSpan.innerHTML = i;
        i++;
    }
}
