
module.exports = function(app){

	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/hackfsu', function(req, res){
		res.render('hackfsu');
	});

	app.get('/domi', function(req, res){
		res.render('domi');
	});

	app.get('/battletrip', function(req, res){
		res.render('battletrip');
	});

	app.get('/jot', function(req, res){
		res.render('jot');
	});

	app.get('/technole', function(req, res){
		res.render('technole');
	});

	app.get('/runaway', function(req, res){
		res.render('runaway');
	});

	app.get('/site', function(req, res){
		res.render('site');
	});

	app.get('/oldSite', function(req, res){
		res.sendfile('public/1/index.html');
	});

	app.redirect('/resume',
		"https://www.dropbox.com/s/8mt66kqr4t27tk4/Resume.pdf?dl=0"
	);


	// 404
	// always have this route last
	app.get('*', function(req, res){
	  	res.render('404');
	});

}