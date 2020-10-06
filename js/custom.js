/*--- UNIVERSO CUANTICO ---*/
(function($) {
    "use strict";
    $(document).ready(function() {
        $('#nav-expander').on('click', function(e) {
            e.preventDefault();
            $('body').toggleClass('nav-expanded');
        });
        $('#nav-close').on('click', function(e) {
            e.preventDefault();
            $('body').removeClass('nav-expanded');
        });
    });

    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $('.carousel').carousel({
        interval: 4000
    })

    $(window).load(function() {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

    jQuery(window).scroll(function(){
        if (jQuery(this).scrollTop() > 1) {
            jQuery('.dmtop').css({bottom:"25px"});
        } else {
            jQuery('.dmtop').css({bottom:"-100px"});
        }
    });
    jQuery('.dmtop').click(function(){
        jQuery('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });

})(jQuery);


function openCategory(evt, catName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(catName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(function() {
	/*Define some constants */
	const ARTICLE_TITLE =  document.title;
	const ARTICLE_URL = encodeURIComponent(window.location.href);
	const MAIN_IMAGE_URL = encodeURIComponent($('meta[property="og:image"]').attr('content'));

	$('.share-fb').click(function(){
		open_window('http://www.facebook.com/sharer/sharer.php?u='+ARTICLE_URL, 'facebook_share');
	});

	$('.share-twitter').click(function(){
		open_window('http://twitter.com/share?url='+ARTICLE_URL, 'twitter_share');
	});

	$('.share-linkedin').click(function(){
		open_window('https://www.linkedin.com/shareArticle?mini=true&url='+ARTICLE_URL+'&title='+ARTICLE_TITLE+'&summary=&source=', 'linkedin_share');
	});

	$('.share-pinterest').click(function(){
		open_window('https://pinterest.com/pin/create/button/?url='+ARTICLE_URL+'&media='+MAIN_IMAGE_URL+'&description='+ARTICLE_TITLE, 'pinterest_share');
	});

	$('.share-tumblr').click(function(){
		open_window('http://www.tumblr.com/share/link?url='+ARTICLE_URL+'&name='+ARTICLE_TITLE+'&description='+ARTICLE_TITLE, 'tumblr_share');
	});

	function open_window(url, name){
		window.open(url, name, 'height=320, width=640, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, directories=no, status=no');
	}
});

function checkAcceptCookies() {
    if (localStorage.acceptCookies == 'true') {
    } else {
        $('#div-cookies').show();
    }
}
function acceptCookies() {
    localStorage.acceptCookies = 'true';
    $('#div-cookies').hide();
}
$(document).ready(function() {
    checkAcceptCookies();
});
