var blackColor = 0.1;
var whiteColor = 0.9;

var blackPieces = {
	rook: {
		source: '<img src="assets/chess-rook_outline.svg" alt="chess-rook.svg">',
		fastPiecePosition: ".A8",
		secondPiecePosition: ".H8",
	},
	knight: {
		source: '<img src="assets/chess-knight_outline.svg" alt="chess-knight.svg">',
		fastPiecePosition: ".B8",
		secondPiecePosition: ".G8",
	},
	bishop: {
		source: '<img src="assets/chess-bishop_outline.svg" alt="chess-bishop.svg">',
		fastPiecePosition: ".C8",
		secondPiecePosition: ".F8",
	},
	queen: {
		source: '<img src="assets/chess-queen_outline.svg" alt="chess-queen.svg">',
		position: ".D8",
	},
	king: {
		source: '<img src="assets/chess-king_outline.svg" alt="chess-king.svg">',
		position: ".E8",
	},
	pawn: {
		source: '<img src="assets/chess-pawn_outline.svg" alt="chess-pawn.svg">',
		position: [".A7", ".B7", ".C7", ".D7", ".E7", ".F7", ".G7", ".H7"],
	},
};

const pieceName = [rook, knight, bishop, queen, king, pawn];

document.querySelector(blackPieces.rook.fastPiecePosition).innerHTML = blackPieces.rook.source;
document.querySelector(blackPieces.rook.secondPiecePosition).innerHTML = blackPieces.rook.source;

document.querySelector(blackPieces.knight.fastPiecePosition).innerHTML = blackPieces.knight.source;
document.querySelector(blackPieces.knight.secondPiecePosition).innerHTML = blackPieces.knight.source;

document.querySelector(blackPieces.bishop.fastPiecePosition).innerHTML = blackPieces.bishop.source;
document.querySelector(blackPieces.bishop.secondPiecePosition).innerHTML = blackPieces.bishop.source;

document.querySelector(blackPieces.queen.position).innerHTML = blackPieces.queen.source;

document.querySelector(blackPieces.king.position).innerHTML = blackPieces.king.source;

for (i = 0; i < 8; i++) {
	// let column = String.fromCharCode(65 + i);
	// let piPawn = '<img src="assets/chess-pawn_outline.svg" alt="chess-pawn.svg">';
	// let pawnIndex = "." + column + "7";
	document.querySelector(blackPieces.pawn.position[i]).innerHTML = blackPieces.pawn.source;
}
/*




*/
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
	document.querySelector(".B7>img").style.filter = "invert(" + piecesColor + ")";
	document.querySelector(".C7>img").style.filter = "invert(" + piecesColor + ")";
};

// pieces(blackColor);
// pieces(whiteColor);
// arr = document.querySelector;
