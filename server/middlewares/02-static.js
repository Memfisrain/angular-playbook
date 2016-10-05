const serve = require('serve-static');
const config = require('../../config');

module.exports = serve(config.root);