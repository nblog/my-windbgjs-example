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
    const csp = new NativePointer(regContext.rsp);

    for (const r of [ 'rcx', 'rdx', 'r8', 'r9' ]) {
        console.log(`argv: ${regContext[r]}`);
    }

    for (let index = 4; index < nArg; index++) {
        let off_t = csp.add(index * 8);
        if (enter) off_t = off_t.add(8);
        console.log(`argv: ${off_t}  ${off_t.readPointer()}`);
    }
}


var hitCount = 0;
function onBreakpoint() {
    ++hitCount;

    return;
}