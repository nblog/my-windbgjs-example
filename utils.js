"use strict";


class Console {
    log(...args) {
        host.diagnostics.debugLog(`${args}\n`);
    }
}

class MemDump {
    static dump(address=NULL, size=0, path='e:\\dump.bin') {
        const ctrl = host.namespace.Debugger.Utility.Control;
        ctrl.ExecuteCommand(`.writemem ${path} ${address} L${size.toString(16)}`);
    }
}

var console = new Console();
/* module.exports = new Console(); */