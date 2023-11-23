"use strict";


class Console {
    log(...args) {
        host.diagnostics.debugLog(`${args}\n`);
    }
}

var console = new Console();
/* module.exports = new Console(); */