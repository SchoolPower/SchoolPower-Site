jQuery(document).ready(function ($) {

	'use strict';

	$(window).load(function () {
		
		if (typeof window.localStorage !== "undefined" && !localStorage.getItem('setLang')) {
			
			var acceptLanguage = 'Accept-Language: en;q=0.8,es;q=0.6,fr;q=0.4';
			var languages = acceptLanguage.split(':')[1].match(/[a-zA-Z\-]{2,10}/g) || [];
			console.log(languages[0])
			if (!window.location.href.endsWith("index-zh.html") && languages[0] == "zh-CN") {
				window.location.href = "index-zh.html"
			}
			if (!window.location.href.endsWith("index.html") && languages[0] == "en") {
				window.location.href = "index.html"
			}
		}
	})

	/*---------------------------------------------------
	[Fixed Header]
	*/
	var $header = $('.header');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$header.addClass('fixed');
		} else if ($(this).scrollTop() <= 0) {
			$header.removeClass('fixed');
		}
	});

	/*---------------------------------------------------
	[Helpers]
	*/

	$(window).load(function () {
		if ($(this).width() >= 992) {
			$('.float-content').each(function () {
				var floatContentHeight = $(this).outerHeight() / 2;
				$(this).css({ 'margin-top': -+floatContentHeight + 'px' });
			});
		}
	});

	var $outerHeightElement;

	$(window).load(function () {
		if ($(this).width() >= 992) {
			$('.outer-height').each(function () {
				$outerHeightElement = $(this).innerHeight();
			});
		}
		if ($(this).width() >= 992) {
			$('.inner-height').each(function () {
				$(this).css({ 'height': +$outerHeightElement + 'px' });
			});
		}
	});

	/*---------------------------------------------------
	[Home Slider]
	*/

	var owl = $('#slider');
	owl.owlCarousel({
		items: 4,
		navigation: false,
		pagination: true,
		slideSpeed: 500,
	});

	/*---------------------------------------------------
	[Testimonials Slider]
	*/

	var owl = $('#slider2');
	owl.owlCarousel({
		singleItem: true,
		navigation: false,
		pagination: true,
		slideSpeed: 500,
	});

	/*---------------------------------------------------
	[Video Thumbnail & Embedding (only Youtube / Vimeo)]
	*/

	if ($('#video-embed').length) {
		Video('#video-embed');
	}

	/*---------------------------------------------------
	[Numbers]
	*/
	$('.fact-statistic').appear(function () {
		$('.timer').countTo({
			speed: 4000,
			refreshInterval: 60,
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			}
		});
	});

	/*---------------------------------------------------
	[Scroll links]
	*/
	$.localScroll.hash();
	$('.menu, .to-top').localScroll({
		target: 'body',
		queue: true,
		duration: 1000,
		hash: false,
		offset: -60,
		easing: 'easeInOutExpo'
	});

	/*---------------------------------------------------
	[To Top]
	*/
	var $scrolltoTop = $('.to-top');

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1500) {
			$scrolltoTop.addClass('active');
		} else if ($(this).scrollTop() <= 1500) {
			$scrolltoTop.removeClass('active');
		}
	});

	/*---------------------------------------------------
	[Mobile Menu]
	*/
	$('.toggle-nav').on('click', function () {
		$('.menu').toggleClass('open');
	});

	/*---------------------------------------------------
	[Event Target]
	*/
	$('body').click(function (event) {
		if ($(event.target).closest('.menu, .toggle-nav').length) return;
		$('.menu').removeClass('open');
		event.stopPropagation();
	});

	/*---------------------------------------------------
	[Preloader]
	*/
	$('.spinner').fadeOut(3500);
	$('.preloader').delay(350).fadeOut('slow');

	/*---------------------------------------------------
	[Background Youtube]
	*/
	$('#ytbg').YTPlayer({
		fitToBackground: true,
		videoId: $('#ytbg').data("video-id"),
		playerVars: {
			modestbranding: 1,
			autoplay: 1,
			controls: 0,
			showinfo: 0,
			branding: 0,
			rel: 0,
			autohide: 0,
			start: 0
		}
	});

	/*---------------------------------------------------
	[Subscribe Form]
	*/
	var options = {
		target: '.message .alert',
		beforeSubmit: showRequest,
		success: showResponse
	};

	$('#subscribeForm').ajaxForm(options);
	function showRequest(formData, jqForm, options) {
		var queryString = $.param(formData);
		return true;
	}
	function showResponse(responseText, statusText) { }

	/*---------------------------------------------------
	[Contact Form]
	*/
	var options = {
		target: '.message-co .alert-co',
		beforeSubmit: showRequest,
		success: showResponse
	};

	$('#contactForm').ajaxForm(options);
	function showRequest(formData, jqForm, options) {
		var queryString = $.param(formData);
		return true;
	}
	function showResponse(responseText, statusText) { }

});