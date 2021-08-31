$(window).on('load', function() {
	var tabsRecommend = $('.recommend__tabs p');

	tabsRecommend.click(function () {
		if (!$(this).hasClass('active')) {
			tabsRecommend.removeClass('active');
			$(this).addClass('active');
			$('.recommend__content-item').hide().eq($(this).index()).fadeIn(300);
		}
	});
});