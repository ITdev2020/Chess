/* events fired on the drop targets */
document.addEventListener(
	"dragstart",
	function (event) {
		if (event.target.nodeName == "IMG") {
			// and if target class name is "cells" or "topOutside" or "bottomOutside")
			if (
				event.target.parentElement.parentElement.className == "cells" ||
				event.target.parentElement.parentElement.className == "topOutside" ||
				event.target.parentElement.parentElement.className == "bottomOutside"
			) {
				// store a ref. on the dragged elem
				dragged = event.target;
				// console.log("dragged=" + event.target.id);
			}
		} else {
			event.preventDefault();
		}
	},
	false
);

//
document.addEventListener(
	"dragover",
	function (event) {
		// prevent default action (open as link for some elements)
		event.preventDefault();
	},
	false
);
//

/* events fired on the drop targets */
document.addEventListener(
	"drop",
	function (event) {
		// prevent default action (open as link for some elements)
		event.preventDefault();
		// move dragged elem to the selected drop target (if target name is SPAN & target no have child)
		if (event.target.nodeName == "SPAN" && event.target.childElementCount == 0 && typeof dragged !== "undefined") {
			// and if target class name is "cells" or "topOutside" or "bottomOutside")
			if (
				event.target.parentElement.className == "cells" ||
				event.target.parentElement.className == "topOutside" ||
				event.target.parentElement.className == "bottomOutside"
			) {
				dragged.parentNode.removeChild(dragged);
				event.target.appendChild(dragged);
				dragged = undefined;
			}
		}
	},
	false
);
/*
For Touch screen
*/

document.addEventListener("DOMContentLoaded", function () {
	// this function runs when the DOM is ready, i.e. when the document has been parsed

	moveable = document.querySelector(".boardAndPieces");
	moveable.addEventListener(
		"touchmove",
		function (event) {
			event.preventDefault();
			if (event.target.nodeName == "IMG") {
				// and if target class name is "cells" or "topOutside" or "bottomOutside")
				if (
					event.target.parentElement.parentElement.className == "cells" ||
					event.target.parentElement.parentElement.className == "topOutside" ||
					event.target.parentElement.parentElement.className == "bottomOutside"
				) {
					dragged = event.target;
				}
			}
		},
		{ passive: false }
	);
});
//
document.addEventListener(
	"touchend",
	function (ev) {
		target = document.elementFromPoint(ev.changedTouches[0].clientX, ev.changedTouches[0].clientY);
		if (target.nodeName == "SPAN" && target.childElementCount == 0 && typeof dragged !== "undefined") {
			// and if target class name is "cells" or "topOutside" or "bottomOutside")
			if (
				target.parentElement.className == "cells" ||
				target.parentElement.className == "topOutside" ||
				target.parentElement.className == "bottomOutside"
			) {
				dragged.parentNode.removeChild(dragged);
				target.appendChild(dragged);
				dragged = undefined;
			}
		}
	},
	false
);
/* end of file */
