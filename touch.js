#!/usr/bin/env node

require('./helper')
var fs = require('fs').promise

function* touch() {
    var filename = process.argv[2] ? process.argv[2] : __filename
    var dt = new Date();
    yield fs.utimes(filename,  dt.getTime(), dt.getTime())
}

module.exports = touch
