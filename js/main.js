$(document).ready(function(){

	/* menu */

	$('.menu-open').on('click', function(){
		$(this).toggleClass('active');
		$('.header-menu_list').toggleClass('active');
		$('body').toggleClass('menu-opened');
	});

	/* filters */

	$(document).on('click', '.filter-select,.filter-overlay', function(){ // выпадающий список
		var parent = $(this).closest('.filter-item');
		parent.toggleClass('active');
		parent.find('.filter-select,.filter-overlay').toggleClass('active');
	});

	$(document).on('click', '.input-checkbox', function(){

	});

	$('.filter-item').each(function(){
		$(this).append('<div class="filter-overlay"></div>');
		$(this).find(".filter-select,.filter-content").wrapAll('<div class="filter-item_wrap"></div>');
	});

});