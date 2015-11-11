//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a.page-scroll').click(function() {
    $('.navbar-toggle:visible').click();
});

// Closes the Dropdown Menu on Menu Item Click
$('.dropdown-menu a').click(function() {
    $('.navbar-toggle:visible').click();
});

