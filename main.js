///<reference path="C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\winext\JsProvider.d.ts" />

"use strict";

function initializeScript()
{
    //
    // Return an array of registration objects to modify the object model of the debugger
    // See the following for more details:
    //
    //     https://aka.ms/JsDbgExt
    //
    return [new host.apiVersionSupport(1, 7)];
}

