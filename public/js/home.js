let frameDuration = 260;

$(document).ready(function(){
	setFavicon();

	setTimeout(function(){
		$('.frame--1').find('.not-visible').addClass('visible');
		$('.dont-show').addClass('show');

		setInterval(function(){
			let frames = $('.frames').children().toArray();


			for(let i = 0; i < 5; i++){
				let current = frames[i].className.split("--").pop();

				if(current == 0){
					$(frames[i]).attr('class', 'frame frame--4');
					$(frames[i]).children().removeClass('visible');
				} else {
					$(frames[i]).attr('class', 'frame frame--' + (current-1));
				}

				// show the current one 
				if(current == 2){
					$(frames[i]).children().addClass('visible');
				}
			}

		}, 4000);


	}, 500); 


	$('.project').on('click', function(e){
		$('.to-hide').addClass('hide');
		let id = $(e.currentTarget).attr('id');
		window.location = '/' + id;
	});

});
	

function removeAfterTransition(){
	$(".frame--1").on(
    "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
    function() {
        $(this).removeClass("frame--0");
    });

    $(".frame--2").on(
    "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
    function() {
        $(this).removeClass("frame--3");
    });

    $(".frame--3").on(
    "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
    function() {
        $(this).removeClass("frame--4");
    });

    $(".frame--4").on(
    "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
    function() {
        $(this).removeClass("frame--0");
    });

    $(".frame--0").on(
    "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
    function() {
        $(this).removeClass("frame--1");
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












