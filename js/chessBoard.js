// board cell's
let parentClass = "cells";

let j = 8;
while (1 <= j) {
	let i = 1;
	while (i <= 8) {
		crSpan(parentClass);

		if (j % 2 == 0) {
			i % 2 == 0 ? (colr = "gray") : (colr = "white");
		} else {
			i % 2 == 0 ? (colr = "white") : (colr = "gray");
		}
		cellIndex = String.fromCharCode(64 + i) + j;

		cellAtr(cellIndex, colr, parentClass);

		i++;
	}
	j = j - 1;
}

// outside cell's
let i = 1;
while (i <= 16) {
	cellIndex = "Out" + i;

	parentClass = "topOutside";
	crSpan(parentClass);
	cellAtr(cellIndex, colr, parentClass);

	parentClass = "bottomOutside";
	crSpan(parentClass);
	cellAtr(cellIndex, colr, parentClass);
	i++;
}
