$(".").slick({
	mobileFirst: true,
	autoplay: true,
	autoplaySpeed: 6000,
	arrows: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 576,
			settings: { slidesToShow: 2 },
		},
		{
			breakpoint: 768,
			settings: { slidesToShow: 2 },
		},

		{
			breakpoint: 992,
			settings: { slidesToShow: 3 },
		},
	],
});
