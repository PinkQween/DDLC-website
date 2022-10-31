  var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome){
      $('#iframeAudio').remove()
  }
  else {
      $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
  }

var bgscroll = 0.0;
var promoscroll = 0.0;
lightbox.option({
	'fadeDuration': 250,
	'imageFadeDuration': 250,
	'resizeDuration': 0,
	'showImageNumberLabel': false
});
jQuery(function($) {
	function parallax() {
		promoscroll = ($(document).scrollTop() - $('.promo').offset().top + ($(window).height() * .8)) / -6;
		if (promoscroll > 50) {promoscroll = 50;}
		if (promoscroll < -100) {promoscroll = -100;}
		$('.promo').css('top', promoscroll);
	}
	function bgParallax() {
		bgscroll = $(document).scrollTop() / -2.5;
		$('body').css('background-position', "0px " + bgscroll.toString() + "px");
	}
	$(document).ready(function(){
    	parallax();
  	});
	$(window).on('scroll', parallax);
	if( !(/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)) ) {
		$(window).on('scroll', bgParallax);
	}

	$('.sticker').mouseenter(function() {
		if ($(this).is(':animated')) {return;}
		$(this).animate({ bottom: "+=60" }, {duration: 120, easing: "easeOutQuart"})
		.animate({ bottom: "-=60" }, {duration: 150, easing: "easeInSine"});
	});
});
