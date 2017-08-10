jQuery(document).ready(function ($) {

    /*---------------------------------------------------
    [Initialization]
    */

    'use strict';

    $(".button-collapse").sideNav();
    $('.collapsible').collapsible();

    /*---------------------------------------------------
    [Loaclization]
    */

    var i18n = domI18n({
        selector: '[translate]',
        separator: ' // ',
        languages: ['en', 'zh-CN', 'zh-TW'],
        defaultLanguage: 'en'
    });

    var enItem = document.getElementById('en-itm');
    var zhCNItem = document.getElementById('zh-CN-itm');
    var zhTWItem = document.getElementById('zh-TW-itm');
    enItem.onclick = function () { i18n.changeLanguage('en'); };
    zhCNItem.onclick = function () { i18n.changeLanguage('zh-CN');};
    zhTWItem.onclick = function () { i18n.changeLanguage('zh-TW');};

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
    // $('body').click(function (event) {
    //     if ($(event.target).closest('.menu, .toggle-nav').length) return;
    //     if ($('.dropdown-button').dropdown.do {
    //
    //     } while (true);) $('.dropdown-button').dropdown('close');
    //     $('.menu').removeClass('open');
    //     event.stopPropagation();
    // });

    /*---------------------------------------------------
    [Preloader]
    */
    $('.spinner').fadeOut(3500);
    $('.preloader').delay(350).fadeOut('slow');

});
