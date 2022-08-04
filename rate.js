$(function () {
	$.each($(".number"), function () {
		$(this).on("click", bgChange);
	});

	function bgChange(event) {
		$.each($(".number"), function () {
			$(this).removeClass("colorOrange");
		});
		$(event.target).addClass("colorOrange");

		let selectedRate = event.target.innerText;
		$("#rate-selected").text(selectedRate);
	}

	$("button").click(() => {
		$(".container").toggleClass("hide");
		$(".result").toggleClass("hide");
	});
});
