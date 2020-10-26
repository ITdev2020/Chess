crSect();
// board index, second row
indRow();
// board index, second column
indCol();

// board cell's
var clName = 'cells';
crDiv(clName);
var colr = 'white';
var j = 1;
while (j <= 8) {
    var i = 1;
    while (i <= 8) {
        crSpan(clName);

        if (j % 2 == 0) {
            i % 2 == 0 ? (colr = 'white') : (colr = 'gray');
        } else {
            i % 2 == 0 ? (colr = 'gray') : (colr = 'white');
        }
        cellIndex = String.fromCharCode(73 - i)+j;
        cellAtr(cellIndex, colr);

        i++;
    }
    j++;
}

// board index, first column
indCol();
// board index, first row
indRow();
