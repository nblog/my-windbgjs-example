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


function printArgs(nArg=5, abi='default') {
    let enter = 
        new NativePointer(
            host.currentThread.Stack.Frames[0].Attributes.StackOffset).readPointer()
            .equals( host.currentThread.Stack.Frames[0].Attributes.ReturnOffset );

    const regContext = host.currentThread.Registers.User;

    let count = 0;
    const csp = new NativePointer(regContext.rsp);
    for (const r of [ 'rcx', 'rdx', 'r8', 'r9' ]) {
        console.log(`[${count}]: ${r} \t\t${regContext[r]}`);
        ++count;
    }

    for (; count < nArg; count++) {
        let off_t = (enter ? (count + 1) : count) * 8;
        console.log(`[${count}]: sp+${off_t.toString(16)}\t\t${csp.add(off_t).readPointer()}`);
    }
}


var hitCount = 0;
function onBreakpoint() {
    ++hitCount;

    return;
}