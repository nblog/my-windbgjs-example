///<reference path="C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\winext\JsProvider.d.ts" />

"use strict";


class console {
    static log(...args) {
        host.diagnostics.debugLog(`${args}\n`);
    }
}