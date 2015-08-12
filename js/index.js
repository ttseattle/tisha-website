$(document).ready(function() {
	$('#hook, #design p, #write p, #create p, #inspire p').hide().each(function(i) {
	  $(this).delay(i*500).fadeIn(800);
	});
	$('#inspire p').hover(function() {
		$('#inspire img').toggle();
	})
})
