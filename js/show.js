  $(document).ready(function() {
$('.show a').click(function() {
    $("section").toggleClass("lyrcs-display");
    $("section").toggleClass("lyrcs-display-none");
    $("div").toggleClass("chords-display-none");
    $("div").toggleClass("chords-display");
});
        });