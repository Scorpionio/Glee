$(function(){

    $(".user__menu").on('click', function() {
        $('.header__nav').toggleClass("header__nav--active");
    })
    $(".product-catalog__button").on('click', function() {
        $('.product-catalog__sort').toggleClass("sort--active");
        $('.product-catalog__button').toggleClass("button-sort--active");
    })
    $(".list__button").on('click', function() {
        $('.list__filter').toggleClass("list__filter--view");
        $('.list__button').toggleClass("list__button--active");
    })
    $(window).resize(function(){
        if($(window).width() < 628){
            $(".list__box").removeClass('list__box-string');
        } else {
            if($(".btn-list").hasClass("filter-content__btn--active")) {
                $(".list__box").addClass('list__box-string');
            }
        }
    });
    $(".design__button").on('click', function() {
        $('.design__sort').toggleClass("sort--active");
        $('.design__button').toggleClass("button-sort--active");
    })
    $(".product-tabs__top-item").on('click', function(e) {
        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');
        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');
    })

    $('.product-related__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: `<button type="button" class="slick-arrow prev"><svg width="22px" height="9px">
<path fill-rule="evenodd"  fill="rgb(163, 187, 200)"
 d="M21.704,3.526 L21.712,3.529 L4.756,3.529 L4.856,0.670 C4.910,0.616 4.940,0.542 4.940,0.465 C4.940,0.388 4.910,0.315 4.856,0.261 L4.684,0.087 C4.629,0.033 4.557,0.003 4.480,0.003 C4.403,0.003 4.331,0.033 4.276,0.087 L0.084,4.298 C0.030,4.353 -0.000,4.426 -0.000,4.503 C-0.000,4.580 0.030,4.653 0.084,4.707 L4.276,8.920 C4.331,8.973 4.403,9.003 4.480,9.003 C4.557,9.003 4.629,8.973 4.684,8.920 L4.856,8.746 C4.910,8.692 4.940,8.619 4.940,8.542 C4.940,8.465 4.910,8.396 4.856,8.342 L4.743,5.478 L21.708,5.478 C21.867,5.478 22.000,5.340 22.000,5.181 L22.000,3.812 C22.000,3.653 21.863,3.526 21.704,3.526 Z"/>
</svg></button>`,
        nextArrow: `<button type="button" class="slick-arrow next"><svg width="22px" height="9px">
<path fill-rule="evenodd"  fill="rgb(163, 187, 200)"
 d="M0.296,5.473 L0.288,5.471 L17.244,5.471 L17.144,8.329 C17.089,8.384 17.060,8.458 17.060,8.534 C17.060,8.612 17.089,8.684 17.144,8.739 L17.316,8.912 C17.371,8.967 17.443,8.996 17.520,8.996 C17.597,8.996 17.669,8.967 17.724,8.913 L21.916,4.701 C21.970,4.647 22.000,4.573 21.1000,4.497 C22.000,4.420 21.970,4.347 21.916,4.293 L17.724,0.080 C17.669,0.026 17.597,-0.003 17.520,-0.003 C17.443,-0.003 17.371,0.026 17.316,0.080 L17.144,0.254 C17.089,0.307 17.060,0.380 17.060,0.458 C17.060,0.535 17.089,0.604 17.144,0.657 L17.257,3.522 L0.292,3.522 C0.133,3.522 -0.000,3.659 -0.000,3.818 L-0.000,5.188 C-0.000,5.347 0.137,5.473 0.296,5.473 Z"/>
</svg></button>`,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                } 
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                } 
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                } 
            }
        ] 
    });

    $('.product-slider__big').slick({
        asNavFor: '.product-slider__small',
        arrows: false,
        fade: true,
        draggable: false,
        responsive: [
            {
                breakpoint: 870,
                settings: {
                    draggable: true,
                } 
            }
        ]
    });
    $('.product-slider__small').slick({
        asNavFor: '.product-slider__big',
        vertical: true,
        draggable: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        focusOnSelect: true,
    });
    
    $('.product-about__number').styler();

    $(".filter-content__btn").on('click', function() {
        $(".filter-content__btn").removeClass("filter-content__btn--active");
        $(this).addClass("filter-content__btn--active");
    });
    $(".btn-list").on('click', function () {
        $(".list__box").addClass('list__box-string');
    });
    $(".btn-grid").on('click', function () {
        $(".list__box").removeClass('list__box-string');
    });
    $(".filter-price__range-slider").ionRangeSlider({
        onStart: function (data) {
            $("#filter-price__money-from").text(data.from);
            $("#filter-price__money-to").text(data.to);
        },
        onChange: function (data) {
            $("#filter-price__money-from").text(data.from);
            $("#filter-price__money-to").text(data.to);
        }
    });
    $(".star").rateYo({
        starWidth: "10px",
        rating: 4,
        fullStar: true,
        spacing: "7px"
    });
    $(".product-catalog__star").rateYo({
        starWidth: "20px",
        rating: 4,
        fullStar: true,
        spacing: "7px"
    });
    $(".product-about__star").rateYo({
        starWidth: "20px",
        rating: 4,
        fullStar: true,
        spacing: "7px"
    });
    $('.top-slider__box').slick({
        arrows: false,
        dots: true
    })
    var containerEl1 = document.querySelector('[data-ref="mix1"]');
    var containerEl2 = document.querySelector('[data-ref="mix2"]');
    var config = {
        controls: {
            scope: 'local'
        }
    };

    var mixer1 = mixitup(containerEl1, config);
    var mixer1 = mixitup(containerEl2, config);
})