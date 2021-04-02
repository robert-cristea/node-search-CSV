const first = require('./first');
const second = require('./second');
var argv = require("optimist").argv;

first(argv.searchLandId);
second(argv.searchCompanyId);