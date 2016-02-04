$(document).ready(function() {

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
        btnNext: ".next",
        btnPrev: ".prev",
        autoplayPauseOnHover: true
    });

});