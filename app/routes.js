module.exports = function(app) {
	var Nerd = require('./models/Nerd');
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/api/nerds', function(req, res) {
		Nerd.find(function(err, nerds) {
			if (err) {
				res.send(err);
			}

			res.json(nerds);
		});
	});

	app.post('/api/nerds', function(req, res) {
		Nerd.create({
			name : req.body.name,
			done : false
		}, function(err, nerd) {
			if (err) {
				res.send(err);
			}

			Nerd.find(function(err, nerds) {
				if (err) {
					res.send(err);
				}

				res.json(nerds);
			});
		});
	});

	app.delete('/api/nerds/:nerd_id', function(req, res) {
		Nerd.remove({
			_id : req.params.nerd_id
		}, function (err, nerd) {
			if (err) {
				res.send(err);
			}

			Nerd.find(function(err, nerds) {
				if (err) {
					res.send(err);
				}

				res.json(nerds);
			})
		})
	})

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};
