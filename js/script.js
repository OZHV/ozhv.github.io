$(document).ready(function() {
var globalhtml = $(".ui.main.text.container").html();
var firsttime = true;
$("#search-input").on("input",function() {
	if($("#search-input").val() != "" && $("#search-input").val().length > 1 && firsttime) {
		firsttime = false;
		$(".ui.main.text.container").html($("#results-container").html());
	}
	else if($("#search-input").val() != "" && !firsttime) {
		$(".ui.main.text.container").html($("#results-container").html());
	}
	else {
		$(".ui.main.text.container").html(globalhtml);
	}
});

$("#verzenden").click(function() {
	$.get( "https://luithollander.nl/ozhv.php?naam=" + encodeURIComponent($("#naam").val()) + "&email=" + encodeURIComponent($("#email").val()) + "&bericht=" + encodeURIComponent($("#bericht").val()) + "");
	$("form").fadeOut(500);
	$(".verzonden").fadeIn(500);
});
$("form").submit(function(e){
        e.preventDefault();
    });
});