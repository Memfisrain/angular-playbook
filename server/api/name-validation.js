module.exports = function(req, res) {
	let name = req.url.match(/=(.+)$/)[0];

	if (name.length <= 3) {
		res.status(400);
	}

	res.send();
}