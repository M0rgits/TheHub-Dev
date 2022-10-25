const util = require('util');
const { stderr, stdout } = require('process');
const { response } = require("express");
const exec = util.promisify(require('child_process').exec);
exec('node src/server.mjs');




