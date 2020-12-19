import jsSha256 from 'https://cdn.skypack.dev/js-sha256@0.9.0';

display.innerHTML = document.getElementById("animation").innerHTML;

$(document).one("click", function (event) {
    display.innerHTML = document.getElementById("lobby").innerHTML;

    $("#start").on('keyup', function (e) {
        let flagInput = $(this).val();
        if (flagInput.length === 26) {
            if (jsSha256(flagInput) === "66b5bac2ffa20fe03ae2439d677f79f0ba157bc03fc33b870520386b4a4961f4") {
                $(location).attr('href', 'board.html');
            }
        }
    });
});