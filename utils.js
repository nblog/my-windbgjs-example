"use strict";


class Console {
    static log(...args) {
        host.diagnostics.debugLog(`${args}\n`);
    }
}

module.exports = Console;