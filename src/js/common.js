$(document).ready(function() {

    //click events
    $('.nav-small__btn').click(function(){
        $('.nav-small__dropdown').fadeToggle();
    });

    $('.btn_close').click(function(){
        $('.popup').toggle();
    });

    //owl-footer
    $('.owl-footer').owlCarousel({
        items : 7,
        slideSpeed : 300,
        paginationSpeed : 400,
        pagination : false,
        navigation : true,
        navigationText: [
            "&larr;",
            "&rarr;"
        ]
    });

    //owl-review
    $('.owl-review').owlCarousel({
        singleItem:true,
        navigation: true,
        navigationText : ["",""]
    });

    //roundabout
    $('.choose-bike__list').roundabout ({
        autoplay: true,
        autoplayDuration: 5000,
        minOpacity: 1,
        minScale: 0.55,
        btnNext: ".roundabout__btn_next",
        btnPrev: ".roundabout__btn_prev",
        autoplayPauseOnHover: true
    });

    //countdown
    var newYear = new Date();
        //newYear = new Date(newYear.getFullYear() + 1, 1 - 1, 1 );
    //$('.countdown').countdown({until: newYear, format: 'DHMS'});
    $('.countdown').countdown({since: new Date(2016, 1-1, 1)});


});