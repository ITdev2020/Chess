var blackPieces = {
	rook: {
		position: ["#A8", "#H8"],
		pID: ["bRook01", "bRook02"],
		source: "<img src='assets/chess-rook_outline.svg' alt='chess-rook.svg'>",
	},

	knight: {
		position: ["#B8", "#G8"],
		pID: ["bKnight01", "bKnight02"],
		source: "<img src='assets/chess-knight_outline.svg' alt='chess-knight.svg'>",
	},

	bishop: {
		position: ["#C8", "#F8"],
		pID: ["bBishop01", "bBishop02"],
		source: "<img src='assets/chess-bishop_outline.svg' alt='chess-bishop.svg'>",
	},

	queen: {
		position: ["#D8"],
		pID: ["bQueen"],
		source: "<img src='assets/chess-queen_outline.svg' alt='chess-queen.svg'>",
	},

	king: {
		position: ["#E8"],
		pID: ["bKing"],
		source: "<img src='assets/chess-king_outline.svg' alt='chess-king.svg'>",
	},

	pawn: {
		position: ["#A7", "#B7", "#C7", "#D7", "#E7", "#F7", "#G7", "#H7"],
		pID: ["bPawn01", "bPawn02", "bPawn03", "bPawn04", "bPawn05", "bPawn06", "bPawn07", "bPawn08"],
		source: "<img src='assets/chess-pawn_outline.svg' alt='chess-pawn.svg'>",
	},

	piColor: 0.1,
};

var whitePieces = {
	rook: {
		position: ["#A1", "#H1"],
		pID: ["wRook01", "wRook02"],
		source: "<img src='assets/chess-rook_outline.svg' alt='chess-rook.svg'>",
	},

	knight: {
		position: ["#B1", "#G1"],
		pID: ["wKnight01", "wKnight02"],
		source: "<img src='assets/chess-knight_outline.svg' alt='chess-knight.svg'>",
	},

	bishop: {
		position: ["#C1", "#F1"],
		pID: ["wBishop01", "wBishop02"],
		source: "<img src='assets/chess-bishop_outline.svg' alt='chess-bishop.svg'>",
	},

	queen: {
		position: ["#D1"],
		pID: ["wQueen"],
		source: "<img src='assets/chess-queen_outline.svg' alt='chess-queen.svg'>",
	},

	king: {
		position: ["#E1"],
		pID: ["wKing"],
		source: "<img src='assets/chess-king_outline.svg' alt='chess-king.svg'>",
	},

	pawn: {
		position: ["#A2", "#B2", "#C2", "#D2", "#E2", "#F2", "#G2", "#H2"],
		pID: ["wPawn01", "wPawn02", "wPawn03", "wPawn04", "wPawn05", "wPawn06", "wPawn07", "wPawn08"],
		source: "<img src='assets/chess-pawn_outline.svg' alt='chess-pawn.svg'>",
	},

	piColor: 0.9,
};

function pieces(sideColor) {
	var pNames = Object.keys(sideColor);

	for (let pName = 0; pName < pNames.length - 1; pName++) {
		i = 0;
		while (i < sideColor[pNames[pName]].pID.length) {
			document.querySelector(sideColor[pNames[pName]].position[i]).innerHTML = sideColor[pNames[pName]].source;

			let queryElem = document.querySelector(sideColor[pNames[pName]].position[i] + ">img");
			queryElem.id = sideColor[pNames[pName]].pID[i];
			queryElem.setAttribute("draggable", "true");
			queryElem.setAttribute("ondragstart", "drag(event)");
			queryElem.style.filter = "invert(" + sideColor.piColor + ")";
			i++;
		}
	}
}

/*




*/
pieces(blackPieces);
pieces(whitePieces);
