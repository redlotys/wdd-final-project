$(document).ready(function() {
	$("#cloud").click(function() {
		$("#modal-container").show();
	});

	$(".button").click(function() {
		$("#modal-container").hide();
	});
	
	$("#modal-overlay").click(function() {
		$("#modal-container").hide();
	});
	
	// http://responsiveslides.com/
	$("#pictures").responsiveSlides();

	$('#flowers').hover(function() {
	    $(this).stop().fadeTo(100,1);
	  }, function() {
	    $(this).stop().fadeTo(100,0.5);
  	});

	$("#cloud").click(function(){
        $("#mailing-list").text("Thank you for joining!");
    });

    $("#bunny-text").click(function(){
        $("#bunny-text").html("Fun fact: The bunny suit is immortal.");
    });

});