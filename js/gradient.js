$(function() {
	
	var container = $('.gradients');

	function fade() {

		var divs = container.children();

		$(".current").transition({opacity: 1}, 5000, 'linear', function() {
			$('.current').removeClass('current');
			firstDiv = divs.first();
			firstDiv.addClass('current').css({opacity: 0});
			firstDiv.appendTo(container);
			fade();
		});
	}

	fade();

});