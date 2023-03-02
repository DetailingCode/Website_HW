$(".team-carousel").slick({
	mobileFirst: true,
	autoplay: true,
	autoplaySpeed: 5000,
	arrows: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 576,
			settings: { slidesToShow: 1 },
		},
		{
			breakpoint: 768,
			settings: { slidesToShow: 1 },
		},

		{
			breakpoint: 992,
			settings: { slidesToShow: 1 },
		},
	],
});
