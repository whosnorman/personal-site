$(document).ready(function(){
	setFavicon();
	setRelatedProjects();

	$('a').click(function(e){
		e.preventDefault();
		$('.to-hide').addClass('hide');
		setTimeout(function(){
			let page = $(e.currentTarget).attr('href');
			window.location = page;
		}, 300);
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
	}, 50);
	
});


// find and set similar and different projects 
// in footer project links
function setRelatedProjects(){

	let currentPage = window.location.pathname;

	let associations = [
		{
			'name': 'Plaid',
			'desc': 'Designing for developers',
			'page': '/plaid',
			'focus': 'designing'
		},
		{
			'name': 'Studio Office',
			'desc': 'One-month studio Residency',
			'page': '/studio-office',
			'focus': 'sharing'
		},
		{
			'name': 'Shared context',
			'desc': 'Tools on digital proximity',
			'page': '/shared-context',
			'focus': 'sharing'
		}
	];

	let projects = {
		'sharing': {
			color: 'orange',
			count: 2
		},
		'designing': {
			color: 'red',
			count: 1
		}
	};

	/* GET SIMILAR PROJECT */
	let currentFocusArea;
	let similarProject;
	for(let i = 0; i < associations.length; i++) {
		if(associations[i].page == currentPage) {
			currentFocusArea = associations[i].focus;

			if(associations[i+1] != null && associations[i+1].focus == currentFocusArea) {
				similarProject = associations[i+1];
			} else {
				let goBackAmount = projects[currentFocusArea].count - 1;
				similarProject = associations[i - goBackAmount];
			}
			break;
		}
	}

	/* GET DIFFERENT PROJECT */
	let diffProject;
	do {
		let random = Math.floor(Math.random() * ((associations.length - 1)-0) + 0);
		diffProject = associations[random];
	} while (diffProject.focus == currentFocusArea)

	
	function setProjectDetails(projectObj, idTag) {
		let projectFocus = projectObj.focus;
		let projectClass = 'footer__project--is-';
		let color = projects[projectFocus].color;
		let colorClass = projectClass + color;
		$('#footer-' + idTag + '-color').addClass(colorClass);
		let html = '<b>' + projectObj.name + '</b><br>' + projectObj.desc;
		$('#footer-' + idTag + '-details').html(html);
		$('#footer-' + idTag + '-color').parent().attr('href', projectObj.page);
	}

	setProjectDetails(similarProject, 'similar');
	setProjectDetails(diffProject, 'diff');	
}

function showHeader(){
	let showLeft = $('.hide-left').toArray();
	showLeft.forEach(function(el){
		$(el).addClass('show');
	});

	$('.experience').addClass('move-up');
}

function drawQuoteMarks(){
	let spans = $('.content__quote span').toArray();

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