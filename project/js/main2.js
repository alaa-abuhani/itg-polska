var slickSlider = () => {
    $(document).ready(function () {

        $('.wrapper-item-slide ').slick({
            infinite: true,
            slidesToShow: 4.5,
            slidesToScroll: 3,
            arrows: false,
            dots: false,
            rtl: true,
            responsive: [

                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3.5,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                    }
                },

                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 300,
                    settings: {
                        settings: "unslick"
                    }
                }

            ]

        });
    });
}