document.addEventListener("mouseenter", function () {
	const dropDown = document.querySelector(".dropdown", ".dropdown-toggle");
	const dropToggle = document.querySelector(".dropdown-toggle");

	function addShow() {
		if (dropDown.onmouseenter) {
			nav.classList.add("show");
		} else {
			nav.classList.remove("show");
		}
	}
});
addShow();
