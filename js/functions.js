function crSect(tagName, className) {
	let a = document.createElement(tagName);
	a.classList.add(className);
	document.body.insertAdjacentElement("afterbegin", a);
}

function crDiv(className, parentEl) {
	let a = document.createElement("div");
	a.classList.add(className);
	let queryElem = parentEl;
	insElem(a, queryElem);
}

function crSpan(parentClass) {
	let a = document.createElement("span");
	let queryElem = "div." + parentClass;
	insElem(a, queryElem);
}
//
//
//
function insElem(a, queryElem) {
	let b = document.querySelector(queryElem);
	b.insertAdjacentElement("beforeend", a);
}

function cellAtr(cellIndex, colr, parentClass) {
	let nthCell = document.querySelector("div." + parentClass + ">span:nth-last-child(1)");
	nthCell.id = cellIndex;
	nthCell.style.backgroundColor = colr;
}
//
//
// index Row; index Column
function indRow(clName) {
	crDiv(clName, ".boardAndPieces");
	i = 1;
	while (i <= 8) {
		crSpan(clName);
		let nthSpan = document.querySelector("div." + clName + ">span:nth-last-child(1)");
		let rowChar = String.fromCharCode(64 + i);
		nthSpan.innerHTML = rowChar;
		i++;
	}
}
function indCol(clName) {
	crDiv(clName, ".boardAndPieces");
	i = 8;
	while (1 <= i) {
		crSpan(clName);
		let nthSpan = document.querySelector("div." + clName + ">span:nth-last-child(1)");
		nthSpan.innerHTML = i;
		i = i - 1;
	}
}
/* end of file */
