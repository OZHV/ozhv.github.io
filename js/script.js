---
---
var host = '{{site.enforce_ssl}}';
if ((host == window.location.host) && (window.location.protocol != "https:"))
    window.location.protocol = "https";
$(document).ready(function() {
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
        } else if (!document.referrer.includes('{{ site.url }}') && typeof terug === 'undefined') {
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
    if ($(".ui.dropdown").length) {
        $('.ui.dropdown').dropdown();
    }
});
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-97131551-1', 'auto');
ga('send', 'pageview');

SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '{{ site.url }}/search.json',
    searchResultTemplate: '<article><h3>{titel}</h3><h6>Geschreven door <a href="{auteur_link}">{auteur}</a> op {datum}</h6><div class="desc"><p>{content}</p></div><a class="leesmeer" href="{url}">Lees meer<i class="angle right icon"></i></a></article><div class="ui divider"></div>',
    noResultsText: '<h2>Geen resultaten gevonden</h2>',
    limit: 10,
    fuzzy: false
})