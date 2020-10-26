piRook = '<img src="assets/chess-rook.svg" alt="chess-rook.svg">';
document.querySelector('.A8').innerHTML = piRook;
document.querySelector('.H8').innerHTML = piRook;

piKnight = '<img src="assets/chess-knight.svg" alt="chess-knight.svg">';
document.querySelector('.B8').innerHTML = piKnight;
document.querySelector('.G8').innerHTML = piKnight;

piBishop = '<img src="assets/chess-bishop.svg" alt="chess-bishop.svg">';
document.querySelector('.C8').innerHTML = piBishop;
document.querySelector('.F8').innerHTML = piBishop;


piQueen = '<img src="assets/chess-queen.svg" alt="chess-queen.svg">';
document.querySelector('.D8').innerHTML = piQueen;

piKing = '<img src="assets/chess-king.svg" alt="chess-king.svg">';
document.querySelector('.E8').innerHTML = piKing;

var rr;
for(i=0; i<8; i++){
rr+=String.fromCharCode(65 + i);
}


arr=document.querySelector