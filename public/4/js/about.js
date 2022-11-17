let frameDuration = 260;

$(document).ready(function(){

	$('.frame--1').find('.not-visible').addClass('visible');
	$('.frame--is-hidden').removeClass('frame--is-hidden');

	setTimeout(function(){

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

		}, 3000);
	}, 1000);


	// for fade back home
	$('a').on('click', function(e){
		if($(this).attr('target') != '_blank'){
			e.preventDefault();
			$('.to-hide').addClass('hide');
			setTimeout(function(){
				let page = $(e.currentTarget).attr('href');
				window.location = page;
			}, 300);
		}
	});

	// show header and last in sequence
	setTimeout(function(){
		$('.header').addClass('show');

		setTimeout(function(){
			$('.dont-show').addClass('show');

			setTimeout(function(){
				$('.show-last').addClass('show');
			drawQuoteMarks();
			}, 250);
		}, 250);
	}, 5);


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
