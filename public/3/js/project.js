$(document).ready(function(){
	setFavicon();
	// get project id & set localStorage to seen 

	$('.back').click(function(){
		$('.to-hide').addClass('hide');
		let section = $('.header').attr('id');
		window.location = '/3/#' + section;
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

// set favicon based on time of day
function setFavicon(){
	var time = new Date();
	time = time.getHours();
	var favicon;
	// night is set between 6pm and 5am
	if(time >= 18 || time < 5){
		favicon = 'favicon-moon.png';
	} else {
		favicon = 'favicon-sunrise.png';
	}

	var favLink = '<link rel="shortcut icon" href="/public/img/'+favicon+'">';
	$('head').append(favLink);
}