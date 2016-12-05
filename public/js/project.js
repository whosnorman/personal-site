$(document).ready(function(){
	// get project id & set localStorage to seen 

	$('.back').click(function(){
		$('.to-hide').addClass('hide');
		let section = $('.header').attr('id');
		window.location = '/#' + section;
	});

	setTimeout(function(){
		$('.header').addClass('slide-down');

		setTimeout(function(){
			showHeader();
			setTimeout(function(){
				$('.dont-show').addClass('show');
				drawQuoteMarks();
			}, 250);
		}, 300);
	}, 400);
	
});

function showHeader(){
	let showLeft = $('.hide-left').toArray();
	showLeft.forEach(function(el){
		$(el).addClass('show');
	});

	$('.experience').addClass('move-up');
}

function drawQuoteMarks(){
	let spans = $('.quote span').toArray();

	let delay = 500;
	spans.forEach(function(el){
		setTimeout(function(){
			$(el).addClass('show');
		}, delay);

		delay += 300;
	});
}