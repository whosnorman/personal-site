$(document).ready(function(){
	// get project id & set localStorage to seen 

	$('.back').click(function(){
		let section = $('.header').attr('id');
		window.location = '/#' + section;
	});

	drawQuoteMarks();
});

function drawQuoteMarks(){
	let spans = $('.quote span').toArray();

	let delay = 500;
	spans.forEach(function(el){
		setTimeout(function(){
			$(el).addClass('show');
		}, delay);

		delay += 500;
	});
}