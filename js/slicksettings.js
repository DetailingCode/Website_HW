$(".acc-carousel").slick({
	mobileFirst: true,
	autoplay: true,
	autoplaySpeed: 3000,
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
$(".photo-carousel").slick({
	
	autoplay: true,
	adaptiveHeight: false,
	autoplaySpeed: 5000,
	arrows: false,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 576,
			settings: { slidesToShow: 1 },
			adaptiveHeight: true,
		},
		{
			breakpoint: 768,
			settings: { slidesToShow: 1 },
			adaptiveHeight: true,
		},

		{
			breakpoint: 992,
			settings: { slidesToShow: 1 },
			adaptiveHeight: true,
		},
	],
});
$(".photo-carousel-down").slick({
	mobileFirst: true,
	autoplay: true,
	autoplaySpeed: 4000,
	fade: true,
	cssEase: 'linear',
	arrows: false,
	infinite: true,
	speed: 1000,
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


$('.center').slick({
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 3,
	responsive: [
	  {
		breakpoint: 768,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 3
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 1
		}
	  }
	]
  });