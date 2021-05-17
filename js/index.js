$(function() {

	$(document).on('click','#link',function(){

		var target = $(this).data('target');
		var plus   = 65;
		var top    = $('#'+target).offset().top-plus;

		toggleMenu($('#toggle_menu'));
		$(window).scrollTop(top);

		return false;

	});

	$(document).on('click','#toggle_menu',function(){

		toggleMenu($(this));

	});

	$('#slick').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000,
	});

});

var toggleMenu = function($this){

	var open_flg = $this.hasClass('open');

	if (open_flg) {
		$this.removeClass('open').addClass('close');
		$('.menu-list').addClass('open');
	}else {
		$this.removeClass('close').addClass('open');
		$('.menu-list').removeClass('open');
	}

}
