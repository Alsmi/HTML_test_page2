$(document).ready(function(){
	//Mobile menu
	$("header").on('click', '.menuButton', function () {
        if (!$(this).hasClass('open')) {
            $(this).addClass('open');
            $('nav').slideDown(300);
        } else {
            $(this).removeClass('open');
            $('nav').slideUp(300);
        }
    });
	
	//Slider
	function Slider(selector, count) {
		var obj = $(selector);
		var item = obj.find('li');
		var num = 0;
		var width = item.outerWidth() + parseInt(item.css('margin-right'));
		var margin = 0;
	
		obj.on('click', '> span', function () {
			if ($(this).hasClass('next')) {
				if (num < item.length - count) {
					num++;
					margin = margin - width;
					item.first().animate({ 'margin-left': margin + 'px' }, 300);
				}
			}
			if ($(this).hasClass('prev')) {
				if (num <= item.length - count && num > 0) {
					num--;
					margin = margin + width;
					item.first().animate({ 'margin-left': margin + 'px' }, 300);
				}
			}
		});
	}
	
	if ($(window).width() > 1024) {
		Slider('.slider', 5);
	} else {
		Slider('.slider', 2);
	}
});