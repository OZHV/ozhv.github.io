---
---
$(document).ready(function() {
    InstantClick.init();
    InstantClick.on('change', function() {
        $.get("{{ site.url }}/js/script.js", function( data ) {
            eval(data);
        });
    });
    var globalhtml = $(".ui.main.text.container").html();
    $("#search-input").on("input", function() {
        if ($("#search-input").val() != "" && $("#search-input").val().length > 1) {
            $(".ui.main.text.container").html($("#results-container").html());
        } else {
            $(".ui.main.text.container").html(globalhtml);
        }
    });

    $("#verzenden").click(function() {
        $.get("https://luithollander.nl/ozhv.php?naam=" + encodeURIComponent($("#naam").val()) + "&email=" + encodeURIComponent($("#email").val()) + "&bericht=" + encodeURIComponent($("#bericht").val()) + "");
        $("form").fadeOut(500);
        $(".verzonden").fadeIn(500);
    });
    $("form").submit(function(e) {
        e.preventDefault();
    });
    if ($(".ui.main.text.container.post").length) {
        if (document.referrer.includes('archief')) {
            $(".terug").attr("href", document.referrer);
        } else if (!document.referrer.includes('{{ site.url }}')) {
            $(".terug").html('<i class="arrow left icon"></i>Alle artikelen');
        }
    }
    if ($(".ui.main.text.container.home").length) {
        $(".ui.icon.input").show();
    } else {
        $(".right.menu").remove();
    }
    if ($(".desktop").css("display") == "none") {
        $(".right.menu").remove();
        $(".header.item").on("click", function(e) {
            e.preventDefault();
        });
    }
    $('.ui.dropdown').dropdown();
});