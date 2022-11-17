let frameDuration = 260;

(function(){
	setFavicon();
	setVersionToggle();

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
				$('.pop-out').addClass('remove-pop-out');
				$('.show-last').addClass('show');

				setTimeout(function(){
					$('.pop-out').removeClass('pop-out');
					$('.remove-pop-out').removeClass('remove-pop-out');
				}, 300);
			}, 400);
		}, 1200);
	}, 5);


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


	let openFocus = null;
	$('.focus-area').on('click', function(e) {
		let selected = $(this).parent().attr('id').split('-')[2];


		let raisedClass = 'focus-area--is-raised';
		let hiddenClass = 'center--is-hidden';
		$(this).toggleClass(raisedClass);

		if(openFocus != null) {
			if(openFocus == selected) {
				// close selected
				// enter in welcome

				$('#welcome').removeClass(hiddenClass);
				toggleProjectList(selected);
				openFocus = null;
			} else {
				// close currently open
				// open selected
				// do nothing to welcome

				toggleProjectList(openFocus);
				$('#fa-m-' + openFocus).find('.focus-area').toggleClass(raisedClass);
				$('#fa-d-' + openFocus).find('.focus-area').toggleClass(raisedClass);
				setTimeout(function(){
					toggleProjectList(selected);
				}, 100);
				openFocus = selected;
			}
		} else {
			// open selected project
			// exit welcome

			openFocus = selected;

			$('#welcome').addClass(hiddenClass);
			setTimeout(function(){
				toggleProjectList(selected);
			}, 100);
		}
	});

})();

function toggleProjectList(id){
	$('#desktop-'+id).find('.center__project').toggleClass('center--is-hidden');
	$('#desktop-'+id).toggleClass('center--no-events');
	$('#mobile-'+id).toggleClass('show-projects');
	$('#mobile-'+id).find('.center__project').toggleClass('center--is-hidden');
}

function setVersionToggle(){
	$('select').val('5');
	$('select').change(function(e){
		let value = parseInt(this.value);
		let newLocation = '';
		switch(value){
			case 5:
				break;
			case 4:
				newLocation = '/4';
				break;
			case 3:
				newLocation = '/3';
				break;
			case 2:
				newLocation = '/2';
				break;
			case 1:
				newLocation = '/1';
				break;
			default:
				break;
		}

		if(newLocation != ''){
			$('.to-hide').addClass('hide');
			setTimeout(()=>{
				window.location = newLocation;
			}, 400)
		}
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
