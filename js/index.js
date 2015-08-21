$(window).load(function() {
	$('#design p, #write p, #create p, #inspire').hide().each(function(i) {
	  $(this).delay((i + 5) *500).fadeIn(800);
	});
	$('#inspire p').mouseenter(function() {
		$('#bulb').attr("src", "img/bulb-light.png")
	})
	$('#inspire p').mouseleave(function() {
		$('#bulb').attr("src", "img/bulb-dark.png")
	})
	/*
	$('#design p').mouseenter(function() {
		$('#desktop').attr('src', 'img/stencil.jpg')
	})
	$('#write p').mouseenter(function() {
		$('#desktop').attr('src', 'img/typewriter.jpg')
	})
	$('#create p').mouseenter(function() {
		$('#desktop').attr('src', 'img/bw.jpg')
	})
	$('#inspire p').mouseenter(function() {
		$('#desktop').attr('src', 'img/sparkler.jpg')
	})
	$('#design p, #write p, #create p, #inspire p').mouseleave(function() {
		$('#desktop').attr('src', 'img/desk4.jpg')
	})*/
})
