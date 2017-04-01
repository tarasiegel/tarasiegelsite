

$(document).ready(function() {

	// $('.background-image img').css('height', $(window).height());

	// window.addEventListener('resize', function() {
	// 	$('.background-image img').css('height', $(window).height());
	// }, true);

	$('.js-portfolio-item').click(function() {
		var $this = $(this);

		var currentLi = $this.closest('.portfolio__item');

		if (currentLi.hasClass('item-closed')) {
			currentLi.removeClass('item-closed');
		} else {
			currentLi.addClass('item-closed');
		}

	});

});



