  $(document).ready(function() {
$('a.active-chords').click(function() {
    $("section.section-1").toggleClass("lyrcs-display");
    $("section.section-1").toggleClass("lyrcs-display-none");
    $("section.section-2").toggleClass("chords-display-none");
    $("section.section-2").toggleClass("chords-display");
});
        });