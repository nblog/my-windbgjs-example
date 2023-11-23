"use strict";


class Console {
    log(...args) {
        host.diagnostics.debugLog(`${args}\n`);
    }
}
const console = new Console();

/* module.exports = Console; */