const favicon = require('serve-favicon');
const config = require('../../config');
const path = require('path');

module.exports = favicon(path.join(config.root, 'images/favicon.ico'));