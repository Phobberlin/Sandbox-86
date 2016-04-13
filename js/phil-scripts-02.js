$(document).ready(function (){
	
"use strict";

/* Animation Timing Loop */

	setTimeout(function () {
	$('.cloud-bg-01').addClass('move-cloud');
	$('.cloud-bg-01b').addClass('move-cloud-mobile');
	}, 0);

	setTimeout(function () {
	$('.cloud-bg-01').removeClass('move-cloud');
	$('.cloud-bg-01b').removeClass('move-cloud-mobile');
	}, 30500);

	setTimeout(function () {
	$('.cloud-bg-02').addClass('move-cloud');
	$('.cloud-bg-02b').addClass('move-cloud-mobile');
	}, 20000);

	setTimeout(function () {
	$('.cloud-bg-02').removeClass('move-cloud');
	$('.cloud-bg-02b').removeClass('move-cloud-mobile');
	}, 50000);

	setTimeout(function () {
	$('.cloud-bg-03').addClass('move-cloud-slower');
	$('.cloud-bg-03b').addClass('move-cloud-mobile');
	}, 15500);

	setTimeout(function () {
	$('.cloud-bg-03').removeClass('move-cloud-slower');
	$('.cloud-bg-03b').removeClass('move-cloud-mobile');
	}, 45500);

	setTimeout(function () {
	$('.cloud-bg-04').addClass('move-cloud-slower');
	$('.cloud-bg-04b').addClass('move-cloud-mobile');
	}, 8000);

	setTimeout(function () {
	$('.cloud-bg-04').removeClass('move-cloud-slower');
	$('.cloud-bg-04b').removeClass('move-cloud-mobile');
	}, 38000);

	setTimeout(function () {
	$('.cloud-bg-05').addClass('move-cloud');
	$('.cloud-bg-05b').addClass('move-cloud-mobile');
	}, 0);

	setTimeout(function () {
	$('.cloud-bg-05').removeClass('cloud-center-stage');
	$('.cloud-bg-05').removeClass('move-cloud');
	$('.cloud-bg-05b').removeClass('cloud-center-stage');
	$('.cloud-bg-05b').removeClass('move-cloud-mobile');
	}, 30100);

setInterval(function () {

	setTimeout(function () {
	$('.cloud-bg-01').addClass('move-cloud');
	$('.cloud-bg-01b').addClass('move-cloud-mobile');
	}, 0);

	setTimeout(function () {
	$('.cloud-bg-01').removeClass('move-cloud');
	$('.cloud-bg-01b').removeClass('move-cloud-mobile');
	}, 30500);

}, 31500);

setInterval(function () {

	setTimeout(function () {
	$('.cloud-bg-02').addClass('move-cloud');
	$('.cloud-bg-02b').addClass('move-cloud-mobile');
	}, 20000);

	setTimeout(function () {
	$('.cloud-bg-02').removeClass('move-cloud');
	$('.cloud-bg-02b').removeClass('move-cloud-mobile');
	}, 50000);

}, 51000);

setInterval(function () {

	setTimeout(function () {
	$('.cloud-bg-03').addClass('move-cloud-slower');
	$('.cloud-bg-03b').addClass('move-cloud-mobile');
	}, 15500);

	setTimeout(function () {
	$('.cloud-bg-03').removeClass('move-cloud-slower');
	$('.cloud-bg-03b').removeClass('move-cloud-mobile');
	}, 45500);

}, 46500);

setInterval(function () {
	
	setTimeout(function () {
	$('.cloud-bg-04').addClass('move-cloud-slower');
	$('.cloud-bg-04b').addClass('move-cloud-mobile');
	}, 8000);

	setTimeout(function () {
	$('.cloud-bg-04').removeClass('move-cloud-slower');
	$('.cloud-bg-04b').removeClass('move-cloud-mobile');
	}, 38000);

}, 39000);

setInterval(function () {
	
	setTimeout(function () {
	$('.cloud-bg-05').addClass('move-cloud-slower');
	$('.cloud-bg-05b').addClass('move-cloud-mobile');
	}, 0);

	setTimeout(function () {
	$('.cloud-bg-05').removeClass('move-cloud-slower');
	$('.cloud-bg-05b').removeClass('move-cloud-mobile');
	}, 30100);

}, 31100);

/* Navigation Mobile */
/* Menu Slide Out */

$(".menu-link").click(function () {
	if ($(this).hasClass("mob-nav-on")) {
    $(this).removeClass("mob-nav-on");
    $('.main-menu').removeClass("active");
	$('#body-cover').removeClass("cover-shroud");
    $('#menu1').removeClass("menu-move");
	$('.nav-entry-main').removeClass("animate-nav");
	}
	else {
	$(this).addClass("mob-nav-on");
	$('.nav-entry-main').addClass("animate-nav");
    $('.main-menu').addClass("active");
	$('#body-cover').addClass("cover-shroud");
    $('#menu1').addClass("menu-move");
	}
});

/* Navigation Mobile */
/* White Cover Toggle */

$("#body-cover").click(function () {
    $('.menu-link').removeClass("mob-nav-on");
    $('.main-menu').removeClass("active");
	$('#body-cover').removeClass("cover-shroud");
	$('nav').removeClass("active");
    $('#menu1').removeClass("menu-move");
	$('.nav-entry-main').removeClass("animate-nav");
});

$(".nav-entry-main").click(function () {
    $('.menu-link').removeClass("mob-nav-on");
    $('.main-menu').removeClass("active");
	$('#body-cover').removeClass("cover-shroud");
	$('nav').removeClass("active");
    $('#menu1').removeClass("menu-move");
});

/* Animation Desktop */
/* Calculate Height using Height:Width Ratio */

	var screenwidth = $(window).width() - 200;
	var skybgheight = screenwidth * 0.45;
	$('#sky-background-main-01').css('height',(skybgheight));

	$(window).resize(function () {	
	var screenwidth = $(window).width() - 200;
	var skybgheight = screenwidth * 0.45;
	$('#sky-background-main-01').css('height',(skybgheight));
	});

/* Animation Mobile */
/* Calculate Height using Height:Width Ratio */

	var screenwidth01b = $(window).width();
	var skybgheight01b = screenwidth01b * 0.45;
	$('#sky-background-main-01b').css('height',(skybgheight01b));

	$(window).resize(function () {	
	var screenwidth01b = $(window).width();
	var skybgheight01b = screenwidth01b * 0.45;
	$('#sky-background-main-01b').css('height',(skybgheight01b));
	});

/* Animation Mobile */
/* Calculate Height using Height:Width Ratio */

	var screenwidth02 = $(window).width();
	var skybgheight02 = screenwidth02 * 1.05;
	$('#sky-background-main-02').css('height',(skybgheight02));

	$(window).resize(function () {	
	var screenwidth02 = $(window).width();
	var skybgheight02 = screenwidth02 * 1.05;
	$('#sky-background-main-02').css('height',(skybgheight02));
	});

/* Portfolio Hover */

	$('.portfolio-entry').hover(function () {
	$(this).find(".portfolio-entry-fixed").toggleClass("port-hover");
	});

/* Portfolio Filters */

	$('#filter-all').click(function () {
	$('*').removeClass('filter-on');
	$('#filter-all').addClass('filter-on');
	$('#filter-all-02').addClass('filter-on');
	$('.portfolio-filter-entry').removeClass('port-hide');
    $('html, body').animate({
	scrollTop: $('#section-portfolio').offset().top + 2
    }, 'slow');
	});

	$('#filter-web').click(function () {
	$('*').removeClass('filter-on');
	$('#filter-web').addClass('filter-on');
	$('#filter-web-02').addClass('filter-on');
	$('.portfolio-filter-entry').addClass('port-hide');
	$('.port-web').removeClass('port-hide');
    $('html, body').animate({
	scrollTop: $('#section-portfolio').offset().top + 2
    }, 'slow');
	});

	$('#filter-design').click(function () {
	$('*').removeClass('filter-on');
	$('#filter-design').addClass('filter-on');
	$('#filter-design-02').addClass('filter-on');
	$('.portfolio-filter-entry').addClass('port-hide');
	$('.port-design').removeClass('port-hide');
    $('html, body').animate({
	scrollTop: $('#section-portfolio').offset().top + 2
    }, 'slow');
	});

	$('#filter-ad').click(function () {
	$('*').removeClass('filter-on');
	$('#filter-ad').addClass('filter-on');
	$('#filter-ad-02').addClass('filter-on');
	$('.portfolio-filter-entry').addClass('port-hide');
	$('.port-ad').removeClass('port-hide');
    $('html, body').animate({
	scrollTop: $('#section-portfolio').offset().top + 2
    }, 'slow');
	});

	$('#filter-all-02').click(function () {
	$('*').removeClass('filter-on');
	$('#filter-all').addClass('filter-on');
	$('#filter-all-02').addClass('filter-on');
	$('.portfolio-filter-entry').removeClass('port-hide');
	});

	$('#filter-web-02').click(function () {
	$('*').removeClass('filter-on');
	$('#filter-web').addClass('filter-on');
	$('#filter-web-02').addClass('filter-on');
	$('.portfolio-filter-entry').addClass('port-hide');
	$('.port-web').removeClass('port-hide');
	});

	$('#filter-design-02').click(function () {
	$('*').removeClass('filter-on');
	$('#filter-design').addClass('filter-on');
	$('#filter-design-02').addClass('filter-on');
	$('.portfolio-filter-entry').addClass('port-hide');
	$('.port-design').removeClass('port-hide');
	});

	$('#filter-ad-02').click(function () {
	$('*').removeClass('filter-on');
	$('#filter-ad').addClass('filter-on');
	$('#filter-ad-02').addClass('filter-on');
	$('.portfolio-filter-entry').addClass('port-hide');
	$('.port-ad').removeClass('port-hide');
	});

/* Scroll Top */

$(window).on('scroll', function() {
    var y_scroll = window.pageYOffset;
    var scroll_pos = 450;
    if ( y_scroll > scroll_pos ) {
	$('.scroll-top-btn').addClass('reveal-scrolltop');
	} else { 
	$('.scroll-top-btn').removeClass('reveal-scrolltop');
	}
});

$(".scroll-top-btn").click(function () {
	$('body, html').animate({scrollTop:0}, 'slow');
});

});