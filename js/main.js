(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Car Categories
    $(".categories-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Service Booking Form Submission
    $('form').on('submit', function(e) {
        var submitBtn = $(this).find('button:contains("Request Service")');
        if (submitBtn.length > 0) {
            e.preventDefault();
            
            var vehicleType = $(this).find('select[aria-label="Select Vehicle Type"] option:selected').text();
            var pickup = $(this).find('input[placeholder*="pickup"]').val() || 'Not specified';
            var destination = $(this).find('input[placeholder*="destination"]').val() || 'Not specified';
            var startDate = $(this).find('input[type="date"]').eq(0).val() || 'Not specified';
            var startTime = $(this).find('select').eq(1).find('option:selected').text();
            var endDate = $(this).find('input[type="date"]').eq(1).val() || 'Not specified';
            var endTime = $(this).find('select').eq(2).find('option:selected').text();
            
            var message = "New Service Booking Request:\n" +
                          "- Vehicle Type: " + vehicleType + "\n" +
                          "- Pick Up Location: " + pickup + "\n" +
                          "- Destination/Site: " + destination + "\n" +
                          "- Start Date & Time: " + startDate + " at " + startTime + "\n" +
                          "- End Date & Time: " + endDate + " at " + endTime;
            
            var encodedMessage = encodeURIComponent(message);
            var whatsappUrl = "https://wa.me/971542033507?text=" + encodedMessage;
            window.open(whatsappUrl, '_blank');
        }
    });

})(jQuery);
