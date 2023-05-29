/**** 
 * slack slider  
 * features slider 
 */
$('.feature-slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3.15,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1400,
        settings: {
            slidesToShow: 2.2,
            slidesToScroll: 1
        }
    },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.learn-slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 3.05,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 2.2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1.1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.program-slider').slick({
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: '20%',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                centerPadding: '10%',
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                centerPadding: '5%',
                slidesToScroll: 1
            }
        }
    ]
});
$('.event-gallary-slider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1400,
        settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1
        }
    },{
        breakpoint: 768,
        settings: {
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }
    ]
});
$('.mentors-slider').slick({
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: '20%',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                centerPadding: '10%',
                slidesToScroll: 1
            }
        },
        
        {
            breakpoint: 992,
            settings: {
                centerPadding: '40px',
                slidesToScroll: 1
            }
        }
    ]
});
$('.life-slider').slick({
    dots: false,
    arrows: true,
    prevArrow:"<button type='button' class='btn btn-outline-secondary left-arrow'><i class='bi bi-arrow-left-short'></i></button>",
    nextArrow:"<button type='button' class='btn btn-outline-secondary right-arrow'><i class='bi bi-arrow-right-short'></i></button>",

    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint:992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }
    ]
});
$(document).ready(function() {
    /*
     * make slick slider container padding left as other content
     */
    let Screenwidth = $(window).width();
    let padding = Screenwidth - 1230;
    if (Screenwidth > 1230) {
        $(".slider-container").css("padding-left", padding / 2);
    }
})