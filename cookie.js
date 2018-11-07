(function($){

	if(	$.cookie('cookiebar') === undefined) {
		$('body').append('<div class="cookie " id="cookie"><p>Ce site utilise des cookies pour rendre votre navigation meilleure. En continuant votre navigation, vous acceptez l\'utilisation de ceux-ci. </p><div class="cookie_btn" id="cookie_accept">Ok</div><div class="cookie_btn cookie_cancel" id="cookie_cancel">X</div></div>');

		$('#cookie_accept').click(function(e) {
			e.preventDefault();
			$('#cookie').fadeOut();
			$.cookie('cookiebar', "viewed", {expires: 30 * 12});
		});

		$('#cookie_cancel').click(function(e) {
			e.preventDefault();
			$('#cookie').fadeOut();
			$.cookie('cookiebar', "viewed", {expires: 30 * 12});
			$.cookie('cookiecancel', "1", {expires: 30 * 12});
		});

	}

	if(	$.cookie('cookiecancel') === undefined) {
		
	}

		
})(jQuery);