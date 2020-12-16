function crSect(tagName, className) {
	let a = document.createElement(tagName);
	a.classList.add(className);
	document.body.insertAdjacentElement("afterbegin", a);
}
function crDiv(clName, parentEl) {
	let a = document.createElement("div");
	a.classList.add(clName);
	let querElem = parentEl;
	insElem(a, querElem);
}
function crSpan(clName) {
	let a = document.createElement("span");
	querElem = "div." + clName;
	insElem(a, querElem);
}
//
function insElem(a, querElem) {
	let b = document.querySelector(querElem);
	b.insertAdjacentElement("afterbegin", a);
}
//
//
function cellAtr(cellIndex, colr) {
	let nthCell = document.querySelector("span:nth-child(1)");
	nthCell.classList.add(cellIndex);
	nthCell.style.backgroundColor = colr;
}
//
//
// index
function indRow() {
	let clName = "board-index-row";
	crDiv(clName, ".board");
	i = 1;
	while (i <= 8) {
		crSpan(clName);
		let nthSpan = document.querySelector("div." + clName + ">span:nth-child(1)");
		let rowChar = String.fromCharCode(73 - i);
		nthSpan.innerHTML = rowChar;
		i++;
	}
}
function indCol() {
	let clName = "board-index-column";
	crDiv(clName, ".board");
	i = 1;
	while (i <= 8) {
		crSpan(clName);
		let nthSpan = document.querySelector("div." + clName + ">span:nth-child(1)");
		nthSpan.innerHTML = i;
		i++;
	}
}
