$(document).ready(function(){
	// Mouseenter Overlay Effect
	$('.onep').mouseenter(function(){
		// Get data attribute values
     $('.banner-description').css('display','block');
		// Get the overlay div
		// Add html to overlay
		// Fade in overlay
	});
	// Mouseleave Overlay Effect
	$('.onep').mouseleave(function(){
		// Get the overlay div
	  $('.banner-description').css('display','none');
		// Fade out overlay
	});
});
