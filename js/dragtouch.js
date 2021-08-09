/* events fired on the drop targets */
const moveFrom = () => {
	localStorage.setItem(event.target.id, `${event.target.id} ${event.path[1].id}`)
}
const moveTo = () => {
	let timeDate = Date().split(' ')
	let timeStamp = `${timeDate[4]} ${timeDate[2]}-${timeDate[1]}-${timeDate[3]}`
	localStorage.setItem(dragged.id, `${localStorage[dragged.id]}=>${event.target.id} (${timeStamp})`)


	elNode = document.createElement('li')
	textNode = document.createTextNode(localStorage[dragged.id])
	elNode.appendChild(textNode)
	insElem(elNode, '.moves')

	// document.querySelector('.moves').innerHTML = `<li>${localStorage[dragged.id]}</li>`
}

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
				// localStorage.setItem(event.target.id, `${event.target.id} from ${event.path[1].id}`)
				moveFrom()
				// debugger
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

				// let timeDate = Date().split(' ')
				// let timeStamp = `${timeDate[4]} ${timeDate[2]}-${timeDate[1]}-${timeDate[3]}`
				// localStorage.setItem(dragged.id, `${localStorage[dragged.id]} to ${event.target.id} (${timeStamp})`)
				// document.querySelector('.moves').innerHTML = localStorage[dragged.id]

				moveTo()

				dragged = undefined;
				// debugger
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
					moveFrom(event)
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
				moveTo()
				dragged = undefined;
			}
		}
	},
	false
);
/* end of file */
