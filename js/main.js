$(window).on("load", function () {
	$(".preloader").fadeOut("slow");
});

window.addEventListener("scroll", function () {
	var navbar = document.querySelector(".navbar");
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;

	if (scrolled > 0) {
		navbar.classList.add("nnavbar");
	} else {
		navbar.classList.remove("nnavbar");
	}
});
