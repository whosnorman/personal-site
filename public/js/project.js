$(document).ready(function(){

	// set favicon based on the tie of day
	setFavicon();

	// fade in content
	$('.header-layout').hide().fadeIn(1000);
	$('.project-content').hide().fadeIn(1500);

	// back button listener 
	$('#back').on('click', function(){
		$('body').fadeOut(1000, function(){
			window.location.assign('/');
		});
	});
});

// set favicon based on time of day
function setFavicon(){
	var time = new Date();
	time = time.getHours();
	var favicon;
	if(time >= 18 || time < 5){
		favicon = 'favicon-moon.png';
	} else {
		favicon = 'favicon-sunrise.png';
	}

	var favLink = '<link rel="shortcut icon" href="/public/img/'+favicon+'?1">'
	$('head').append(favLink);
}