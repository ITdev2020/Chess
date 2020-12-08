var blackColor = 0.2;
var whiteColor = 0.8;

let pieces = (piecesColor) => {
	piRook = '<img src="assets/chess-rook_outline.svg" alt="chess-rook.svg">';
	document.querySelector(".A8").innerHTML = piRook;
	document.querySelector(".A8>img").style.filter = "invert(" + piecesColor + ")";
	document.querySelector(".H8").innerHTML = piRook;
	document.querySelector(".H8>img").style.filter = "invert(" + piecesColor + ")";

	piKnight = '<img src="assets/chess-knight_outline.svg" alt="chess-knight.svg">';
	document.querySelector(".B8").innerHTML = piKnight;
	document.querySelector(".G8").innerHTML = piKnight;

	piBishop = '<img src="assets/chess-bishop_outline.svg" alt="chess-bishop.svg">';
	document.querySelector(".C8").innerHTML = piBishop;
	document.querySelector(".F8").innerHTML = piBishop;

	piQueen = '<img src="assets/chess-queen_outline.svg" alt="chess-queen.svg">';
	document.querySelector(".D8").innerHTML = piQueen;

	piKing = '<img src="assets/chess-king_outline.svg" alt="chess-king.svg">';
	document.querySelector(".E8").innerHTML = piKing;

	for (i = 0; i < 8; i++) {
		let column = String.fromCharCode(65 + i);
		let piPawn = '<img src="assets/chess-pawn_outline.svg" alt="chess-pawn.svg">';
		let pawnIndex = "." + column + "7";
		document.querySelector(pawnIndex).innerHTML = piPawn;
	}
};

// pieces(blackColor);
pieces(whiteColor);
// arr = document.querySelector;
