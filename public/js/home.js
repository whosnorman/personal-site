let frameDuration = 260;

$(document).ready(function(){
	setFavicon();
	setVersionToggle();

	$('.frame--1').find('.not-visible').addClass('visible');
	$('.frame--is-hidden').removeClass('frame--is-hidden');
	
	// setTimeout(function(){

	// 	$('.dont-show').addClass('show');

	// 	setInterval(function(){
	// 		let frames = $('.frames').children().toArray();


	// 		for(let i = 0; i < 5; i++){
	// 			let current = frames[i].className.split("--").pop();

	// 			if(current == 0){
	// 				$(frames[i]).attr('class', 'frame frame--4');
	// 				$(frames[i]).children().removeClass('visible');
	// 			} else {
	// 				$(frames[i]).attr('class', 'frame frame--' + (current-1));
	// 			}

	// 			// show the current one 
	// 			if(current == 2){
	// 				$(frames[i]).children().addClass('visible');
	// 			}
	// 		}

	// 	}, 3000);
	// }, 1000);

	// show initial elements 
	setTimeout(function(){
		$('.dont-show').addClass('show');

		// remove classes for initial entrace, including focus areas 
		setTimeout(function(){
			$('.dont-show').removeClass('dont-show');
			$('.focus-area').addClass('pop-out');
			$('.show').removeClass('show');

			// remove pop out for focus areas
			setTimeout(function(){
				$('.pop-out').removeClass('pop-out');
				// $('.pre-pop').removeClass('pre-pop');
				$('.show-last').addClass('show');
			}, 400);
		}, 1000);
	}, 50);


	$('li a').on('click', function(e){
		e.preventDefault();
		$('.to-hide').addClass('hide');
		setTimeout(function(){
			let page = $(e.currentTarget).attr('href');
			window.location = page;
		}, 300);
	});


	$('.focus-area').on('click', function(e) {
		let classname = 'focus-area--is-raised';
		if($(this).hasClass(classname)) {
			$(this).removeClass(classname);
		} else {
			$(this).addClass(classname);
		}

		let targetId = $(this).parent().attr('id');
		let id = targetId.split('-')[1];

		$('#welcome').toggleClass('center--is-hidden');
		setTimeout(function(){
			$('#desktop-'+id).find('.center__project').toggleClass('center--is-hidden');
			$('#mobile-'+id).toggleClass('show-projects');
			$('#mobile-'+id).find('.center__project').toggleClass('center--is-hidden');
		}, 100);
	});

});

function setVersionToggle(){
	$('select').val('4');
	$('select').change(function(e){
		let value = parseInt(this.value);
		console.log(value);
		switch(value){
			case 4: break;
			case 3: 
				$('.to-hide').addClass('hide');
				window.location = '/3';
				break;
			case 2:
				$('.to-hide').addClass('hide');
				window.location = '/2';
				break;
			case 1:
				$('.to-hide').addClass('hide');
				window.location = '/1';
				break;
			default:
				break;

		}
	});
}
	

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












