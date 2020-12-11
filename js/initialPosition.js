var blackPieces = {
	rook: {
		firstPiecePosition: ".A8",
		secondPiecePosition: ".H8",
		source: '<img src="assets/chess-rook_outline.svg" alt="chess-rook.svg">',
	},
	knight: {
		firstPiecePosition: ".B8",
		secondPiecePosition: ".G8",
		source: '<img src="assets/chess-knight_outline.svg" alt="chess-knight.svg">',
	},
	bishop: {
		firstPiecePosition: ".C8",
		secondPiecePosition: ".F8",
		source: '<img src="assets/chess-bishop_outline.svg" alt="chess-bishop.svg">',
	},
	queen: {
		position: ".D8",
		source: '<img src="assets/chess-queen_outline.svg" alt="chess-queen.svg">',
	},
	king: {
		position: ".E8",
		source: '<img src="assets/chess-king_outline.svg" alt="chess-king.svg">',
	},
	pawn: {
		position: [".A7", ".B7", ".C7", ".D7", ".E7", ".F7", ".G7", ".H7"],
		source: '<img src="assets/chess-pawn_outline.svg" alt="chess-pawn.svg">',
	},
	piColor: 0.1,
};

var whitePieces = {
	rook: {
		firstPiecePosition: ".A1",
		secondPiecePosition: ".H1",
		source: '<img src="assets/chess-rook_outline.svg" alt="chess-rook.svg">',
	},
	knight: {
		firstPiecePosition: ".B1",
		secondPiecePosition: ".G1",
		source: '<img src="assets/chess-knight_outline.svg" alt="chess-knight.svg">',
	},
	bishop: {
		firstPiecePosition: ".C1",
		secondPiecePosition: ".F1",
		source: '<img src="assets/chess-bishop_outline.svg" alt="chess-bishop.svg">',
	},
	queen: {
		position: ".D1",
		source: '<img src="assets/chess-queen_outline.svg" alt="chess-queen.svg">',
	},
	king: {
		position: ".E1",
		source: '<img src="assets/chess-king_outline.svg" alt="chess-king.svg">',
	},
	pawn: {
		position: [".A2", ".B2", ".C2", ".D2", ".E2", ".F2", ".G2", ".H2"],
		source: '<img src="assets/chess-pawn_outline.svg" alt="chess-pawn.svg">',
	},
	piColor: 0.9,
};

// let blOrWhite = blackPieces;
function pieces(blOrWhite) {
	const pName = Object.keys(blOrWhite);

	for (let pi = 0; pi <= 2; pi++) {
		let twoPosit = Object.keys(blOrWhite[pName[pi]]);

		for (let j = 0; j <= 1; j++) {
			pPosit = blOrWhite[pName[pi]][twoPosit[j]];
			document.querySelector(pPosit).innerHTML = blOrWhite[pName[pi]]["source"];
			document.querySelector(pPosit + ">img").style.filter = "invert(" + blOrWhite.piColor + ")";
		}
	}

	document.querySelector(blOrWhite.queen.position).innerHTML = blOrWhite.queen.source;
	document.querySelector(blOrWhite.queen.position + ">img").style.filter = "invert(" + blOrWhite.piColor + ")";
	document.querySelector(blOrWhite.king.position).innerHTML = blOrWhite.king.source;
	document.querySelector(blOrWhite.king.position + ">img").style.filter = "invert(" + blOrWhite.piColor + ")";

	for (ip = 0; ip < 8; ip++) {
		document.querySelector(blOrWhite.pawn.position[ip]).innerHTML = blOrWhite.pawn.source;
		document.querySelector(blOrWhite.pawn.position[ip] + ">img").style.filter = "invert(" + blOrWhite.piColor + ")";
	}
}
/*




*/
pieces(blackPieces);
pieces(whitePieces);
