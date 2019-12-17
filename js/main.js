$(".Header-switch").on("click", function () {
	if ($(".Header").is(".menu-show")) {
		$(".Header").removeClass("menu-show")
		$(".Header").removeClass("menu-sticky")

	}
	else {
		$(".Header").addClass("menu-show")
		$(".Header").addClass("menu-sticky")
	}
})