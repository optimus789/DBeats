$( document ).ready(function() {

$('#demo').slick({
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
        pauseOnHover: true,
        responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 5
        }
    },{
        breakpoint: 768,
        settings: {
            slidesToShow: 4
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 3
        }
    }, {
        breakpoint: 240,
        settings: {
            slidesToShow: 2
        }
    },]
});
});