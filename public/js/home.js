$(document).ready(function(){

	setTimeout(function(){
		$('#floatie').addClass('show-gallery');
		let arr = $('#floatie').find('li').toArray();
		$(arr[arr.length - 1]).find('img').addClass('active');
		
		$('.hero .image').addClass('show');
		$('.hero .hello').addClass('show');
		$('.hero .image .line').addClass('move');
		$('.hero .info .line').addClass('move');
		$('.hero .to-show div').addClass('show');

	}, 500); 


	let gallery = {
		floatie: {
			direction: 'forward',
			count: 1
		}
	}

	$('.project').on('tap', function(e){
		let id = $(e.currentTarget).attr('id');
		alert(id);

		window.location = '/project';
	});

	$('.photos').click(function(e){
		const photos = $(e.currentTarget);
		let id = $(photos).attr('id');

		const list = $(photos).find('li').toArray();
		const length = list.length;


		// going forward
			// get last position 
			// if it's the last one
				// don't change position, change direction
			// else
				// hide position + 1
			// set position to what was hidden
			
		// going backward
			// get last position
			// if it's the first one
				// don't change position, change direction
			// else
				// hide position - 1
			// set position to what was hidden


			/*[0, 1, 2, 3]
			length = 4
			count = 1
			3 needs to be hidden

			forward => 3, 2, 1
			backward => 1, 2, 3

			count = 2
			2 needs to be hidden 
			toHide = length - count

			if(toHide == 0) switch to backward

			if(toHide == length - 1) swtich to forward */


		let count = gallery[id].count;
		let position = length - count;

		if(gallery[id].direction == 'forward') {
			// last one
			if(position == 0) {
				gallery[id].direction = 'backward';

				makeActive(list[1]);
				makeInactive(list[0]);

				position++;
				gallery[id].count--;
			} else {
				makeInactive(list[position]);
				makeActive(list[position - 1]);

				gallery[id].count++;
			}

			
		} else if (gallery[id].direction == 'backward') {
			// back to the beginning
			if(position == length - 1) {
				console.log(position);
				gallery[id].direction = 'forward';
				gallery[id].count++;

				makeInactive(list[position]);
				makeActive(list[position - 1]);
			} else {
				gallery[id].count--;
				position++;

				makeInactive(list[position - 1]);
				makeActive(list[position]);
			}

		}

		$(list[position]).toggleClass('hide');
	});

	$('li.card').on('click', function(e){
		// if the card clicked is not current
		if($.inArray('current', e.currentTarget.classList) == -1) {
			// reset previous card's gallery
			$('.show-gallery').removeClass('show-gallery');

			let cards = $('ul.cards').find('li.card').toArray();
			let currentIndex = parseInt($(e.currentTarget).attr('id'));

			if(currentIndex == 0) {											// edge case for leftmost 
				setClass(cards[0], 'card leftmost current');
				showGallery(cards[0]);

				setClass(cards[1], 'card right-start');

				for(let i = 2; i < cards.length; i++) {
					setClass(cards[i], 'card off-right');
				}
			} else if (currentIndex == cards.length - 1) {					// edge case for rightmost
				setClass(cards[currentIndex], 'card rightmost current');
				showGallery(cards[currentIndex]);

				setClass(cards[currentIndex - 1], 'card left-end');

				for(let i = currentIndex - 2; i >= 0; i--) {
					setClass(cards[i], 'card off-left');
				}
			} else {														// middle cards
				setClass(cards[currentIndex], 'card middle current');
				showGallery(cards[currentIndex]);

				// go down left side
				let leftIndex = currentIndex - 1;
				setClass(cards[leftIndex], 'card left-mid');
				for(let i = leftIndex - 1; i >= 0; i--) {
					setClass(cards[i], 'card off-left');
				}

				// go down right side
				let rightIndex = currentIndex + 1;
				setClass(cards[rightIndex], 'card right-mid');
				for(let i = rightIndex + 1; i < cards.length; i++) {
					setClass(cards[i], 'card off-right');
				}
			}
		}
	});
});

function setClass(el, classes) {
	$(el).attr('class', classes);
}

function showGallery(el) {
	setTimeout(function(){
		$(el).find('.photos').addClass('show-gallery');

		// only if there isn't already an active photo
		if($(el).find('.active').length == 0){
			let photos = $(el).find('.photos li').toArray();
			$(photos[photos.length - 1]).find('img').addClass('active');
		}
	}, 300);
}

function makeActive(el) {
	$(el).find('img').addClass('active');

	// if it's a gif
	if($.inArray('gif', el.classList) > -1) {
		let img = $(el).find('img');
		let src = $(img).attr('src');

		$(img).attr('src', src.replace('-static', ''));
	}
}

function makeInactive(el) {
	$(el).find('img').removeClass('active');

	// if it's a gif
	if($.inArray('gif', el.classList) > -1) {
		let img = $(el).find('img');
		let src = $(img).attr('src');

		if(src.indexOf('static' !== -1)) {
			$(img).attr('src', src.replace('.', '-static.'));
		}
	}
}












