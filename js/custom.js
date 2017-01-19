$(document).ready(function() {
	
	'use strict';
	
	/* ==== Preloader ==== */
	$('.spinner').fadeOut('slow');
	$('.preloader').delay(350).fadeOut();
	
	/* ==== Screenshots Carousel ==== */
	$('#screen-carousel').owlCarousel({
    	items : 4,
    	autoPlay : 4000,
		pagination:true
	});
	
	/* ==== Testimonials Carousel ==== */
	$('#testimonials-carousel').owlCarousel({
    	singleItem: true,
    	transitionStyle : 'fadeUp',
    	autoPlay : 4000,
		pagination:true
	});
	
	/* ==== Scroll link ==== */
	$.localScroll.hash();
	$('.navigation').localScroll({
		target: 'body',
		queue: true,
		duration: 1000,
		hash: false,
		offset: -60,
		easing: 'easeInOutExpo'
	});
		$('.pull-left').localScroll({
		target: 'body',
		queue: true,
		duration: 1000,
		hash: false,
		offset: -60,
		easing: 'easeInOutExpo'
	});
	
	/* ==== Numbers ==== */
	$('.statistic').appear(function() {
        $('.timer').countTo({
            speed: 4000,
            refreshInterval: 60,
            formatter: function (value, options) {
                return value.toFixed(options.decimals);
            }
        });
    });
	
	/* ==== Boxer ==== */
	$('.boxer').boxer();
	
	/* ==== Buttons ==== */
	var taint, d, x, y;
	$('.btn-site').click(function(e){
		if ($(this).find('.taint').length == 0) {
			$(this).prepend('<span class="taint"></span>')
		}
		taint = $(this).find('.taint');
		taint.removeClass('drop');
		if(!taint.height() && !taint.width()) {
			d = Math.max($(this).outerWidth(), $(this).outerHeight());
		taint.css({height: d, width: d});
		}
		x = e.pageX - $(this).offset().left - taint.width()/2;
		y = e.pageY - $(this).offset().top - taint.height()/2;
		taint.css({top: y+'px', left: x+'px'}).addClass('drop');
	});
	
	/* ==== Button toggle ==== */
	$('.toggle-nav').click(function(){
		$('.menu').toggleClass('open');
	});
	
/*
Browser Language Redirect script- By JavaScript Kit
For this and over 400+ free scripts, visit http://www.javascriptkit.com
This notice must stay intact
*/

//Enter ISO 639-2 letter Language codes to detect (see: http://www.w3.org/WAI/ER/IG/ert/iso639.htm):
var langcodes=new Array("es", "default")

//Enter corresponding redirect URLs (last one is for default URL):
var langredirects=new Array("/es/index.html", "index.html")

var languageinfo=navigator.language? navigator.language : navigator.userLanguage
var gotodefault=1

function redirectpage(dest){
if (window.location.replace)
window.location.replace(dest)
else
window.location=dest
}

for (i=0;i<langcodes.length-1;i++){
if (languageinfo.substr(0,2)==langcodes[i]){
redirectpage(langredirects[i])
gotodefault=0
break
}
}

if (gotodefault)
redirectpage(langredirects[langcodes.length-1])

	/* ==== Event Target ==== */
	$('body').click(function(event){
		if ($(event.target).closest('.menu, .toggle-nav-wrapper').length) return;
		$('.menu').removeClass('open');
		event.stopPropagation();	
	});

});