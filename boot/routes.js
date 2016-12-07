
module.exports = function(app){

	/* version 3 routes */ 

	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/dashboard', function(req, res) {
		res.render('project/dashboard');
	});

	app.get('/runaway', function(req, res) {
		res.render('project/runaway');
	});

	app.get('/hone', function(req, res) {
		res.render('project/hone');
	});

	app.get('/hunt', function(req, res) {
		res.render('project/hunt');
	});

	app.get('/site', function(req, res) {
		res.render('project/site');
	});

	app.get('/illustrations', function(req, res) {
		res.render('project/illustrations');
	});

	app.get('/battletrip', function(req, res) {
		res.render('project/battletrip');
	});

	app.get('/dream-catcher', function(req, res) {
		res.render('project/dream-catcher');
	});

	app.get('/jot', function(req, res) {
		res.render('project/jot');
	});

	app.get('/vestview', function(req, res) {
		res.render('project/vestview');
	});

	app.redirect('/resume',
		"https://www.dropbox.com/s/8mt66kqr4t27tk4/Resume.pdf?dl=0"
	);



	/* version 2 routes */

	app.get('/2', function(req, res) {
		res.render('2/index');
	});

	app.get('/2/hackfsu', function(req, res){
		res.render('2/hackfsu');
	});

	app.get('/2/domi', function(req, res){
		res.render('2/domi');
	});

	app.get('/2/battletrip', function(req, res){
		res.render('2/battletrip');
	});

	app.get('/2/jot', function(req, res){
		res.render('2/jot');
	});

	app.get('/2/technole', function(req, res){
		res.render('2/technole');
	});

	app.get('/2/runaway', function(req, res){
		res.render('2/runaway');
	});

	app.get('/2/site', function(req, res){
		res.render('2/site');
	});

	app.get('/2/*', function(req, res){
		res.render('2/404');
	});



	/* version 1 route */

	app.get('/1', function(req, res){
		res.sendfile('public/1/index.html');
	});

	

	// 404
	// always have this route last
	app.get('*', function(req, res){
	  	res.render('404');
	});

}