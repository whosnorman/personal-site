
module.exports = function(app){


	/* redirects */
	app.redirect('/resume',
		"https://www.dropbox.com/s/8mt66kqr4t27tk4/Resume.pdf?dl=0"
	);

	app.redirect('/workshop',
		"https://www.dropbox.com/s/gxuh941cmsu6ev4/product-design-workshop.pdf?dl=0"
	);

	app.redirect('/bits',
		"http://bits-and-bobs.herokuapp.com/phone"
	);

	app.redirect('/bobs',
		"http://bits-and-bobs.herokuapp.com"
	);


	/* version 5 routes */

	app.get('/', function(req, res) {
		res.render('index');
	});


	/* version 4 routes */

	app.get('/4/', function(req, res) {
		res.render('4/index');
	});

	app.get('/4/heyo', function(req, res) {
		res.render('4/heyo');
	});

	app.get('/4/pondering', function(req, res){
		res.render('4/project/pondering');
	});

	app.get('/4/studio-office', function(req, res){
		res.render('4/project/studio-office');
	});

	app.get('/4/hunt', function(req, res){
		res.render('4/project/hunt');
	});

	app.get('/4/illustrations', function(req, res){
		res.render('4/project/illustrations');
	});

	app.get('/4/temporal-canvas', function(req, res){
		res.render('4/project/temporal-canvas');
	});

	app.get('/4/29-09', function(req, res){
		res.render('4/project/29-09');
	});

	app.get('/4/teal', function(req, res){
		res.render('4/project/teal');
	});

	app.get('/4/modes', function(req, res){
		res.render('4/project/modes-of-exploring');
	});

	app.get('/4/friends', function(req, res){
		res.render('4/project/friends-last-tuesday');
	});

	app.get('/4/plaid', function(req, res){
		res.render('4/project/plaid');
	});

	app.get('/4/we-sketch', function(req, res){
		res.render('4/project/we-sketch');
	});


	/* version 3 routes */

	app.get('/3', function(req, res) {
		res.render('3/index');
	});

	app.get('/3/dashboard', function(req, res) {
		res.render('3/project/dashboard');
	});

	app.get('/3/runaway', function(req, res) {
		res.render('3/project/runaway');
	});

	app.get('/3/hone', function(req, res) {
		res.render('3/project/hone');
	});

	app.get('/3/hunt', function(req, res) {
		res.render('3/project/hunt');
	});

	app.get('/3/site', function(req, res) {
		res.render('3/project/site');
	});

	app.get('/3/illustrations', function(req, res) {
		res.render('3/project/illustrations');
	});

	app.get('/3/battletrip', function(req, res) {
		res.render('3/project/battletrip');
	});

	app.get('/3/dream-catcher', function(req, res) {
		res.render('3/project/dream-catcher');
	});

	app.get('/3/jot', function(req, res) {
		res.render('3/project/jot');
	});

	app.get('/3/vestview', function(req, res) {
		res.render('3/project/vestview');
	});





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
	  	res.render('2/404');
	});

}
