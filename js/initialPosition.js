var blackColor = 0.1;
var whiteColor = 0.9;

var blackPieces = {
	rook: {
		source: '<img src="assets/chess-rook_outline.svg" alt="chess-rook.svg">',
		firstPiecePosition: ".A8",
		secondPiecePosition: ".H8",
	},
	knight: {
		source: '<img src="assets/chess-knight_outline.svg" alt="chess-knight.svg">',
		firstPiecePosition: ".B8",
		secondPiecePosition: ".G8",
	},
	bishop: {
		source: '<img src="assets/chess-bishop_outline.svg" alt="chess-bishop.svg">',
		firstPiecePosition: ".C8",
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

const pn = Object.keys(blackPieces);

for (let pi = 0; pi <= 2; pi++) {
	let ppr = Object.keys(blackPieces[pn[pi]]);

	for (let j = 1; j <= 2; j++) {
		document.querySelector(blackPieces[pn[pi]][ppr[j]]).innerHTML = blackPieces[pn[pi]]["source"];
	}
}

document.querySelector(blackPieces.queen.position).innerHTML = blackPieces.queen.source;
document.querySelector(blackPieces.king.position).innerHTML = blackPieces.king.source;

for (ip = 0; ip < 8; ip++) {
	document.querySelector(blackPieces.pawn.position[ip]).innerHTML = blackPieces.pawn.source;
}
/*




*/
// pieces(blackColor);
// pieces(whiteColor);
