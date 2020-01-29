  $(document).ready(function() {
$('a.active-chords').click(function() {
    $("section.section-1").toggleClass("lyrcs-display");
    $("section.section-1").toggleClass("lyrcs-display-none");
    $("section.section-2").toggleClass("chords-display-none");
    $("section.section-2").toggleClass("chords-display");
});
        });



 $("#US_toggle").click(function(){      
      if($("#US_toggle .ui-flipswitch").hasClass('ui-flipswitch-active')){  
		$("div.ui-content").addClass('black-mode');
		$("div.conquistadores").children().removeClass('black-mode');
        $("div.conquistadores").children().addClass('red-mode');
		$("a.list, a.listcqs").addClass('list-black-mode');
		$("p, span.chord").addClass('letter-black-mode');
		$("a.btn-back-fixed").addClass('btn-black-mode ui-alt-icon');  
      }else{
        $("div.ui-content").removeClass('black-mode');
		$("div.conquistadores").children().removeClass('red-mode');
		$("a.list, a.listcqs").removeClass('list-black-mode');
		$("p, span.chord").removeClass('letter-black-mode');
		$("a.btn-back-fixed").removeClass('btn-black-mode ui-alt-icon'); 
      }
    });


