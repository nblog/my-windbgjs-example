"use strict";


class Console {
    static log(...args) {
        host.diagnostics.debugLog(`${args}\n`);
    }
}
const console = Console;

/* module.exports = Console; */