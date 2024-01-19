"use strict";

var USER_REGISTERS = {
    al, ah, ax, eax, rax,
    bl, bh, bx, ebx, rbx,
    cl, ch, cx, ecx, rcx,
    dl, dh, dx, edx, rdx,
    r8b, r8w, r8d, r8,
    r9b, r9w, r9d, r9,
    r10b, r10w, r10d, r10,
    r11b, r11w, r11d, r11,
    r12b, r12w, r12d, r12,
    r13b, r13w, r13d, r13,
    r14b, r14w, r14d, r14,
    r15b, r15w, r15d, r15,
    sil, si, esi, rsi,
    dil, di, edi, rdi,
    spl, sp, esp, rsp,
    bpl, bp, ebp, rbp,
    eip, rip, eflags, rflags,
}

var ABIS = {
    win64: {
        fastcall: {
            argRegs: [USER_REGISTERS.rcx, USER_REGISTERS.rdx, USER_REGISTERS.r8, USER_REGISTERS.r9],
            retReg: USER_REGISTERS.rax,
            stackReg: USER_REGISTERS.rsp
        },
    },
    win32: {
        thiscall: {
            argRegs: [USER_REGISTERS.rcx],
            retReg: USER_REGISTERS.eax,
            stackReg: USER_REGISTERS.esp
        },
        fastcall: {
            argRegs: [USER_REGISTERS.ecx, USER_REGISTERS.edx],
            retReg: USER_REGISTERS.eax,
            stackReg: USER_REGISTERS.esp
        },
        stdcall: {
            argRegs: [],
            retReg: USER_REGISTERS.eax,
            stackReg: USER_REGISTERS.esp
        },
        mscdecl: {
            argRegs: [],
            retReg: USER_REGISTERS.eax,
            stackReg: USER_REGISTERS.esp
        },
        borland: {
            argRegs: [USER_REGISTERS.eax, USER_REGISTERS.edx, USER_REGISTERS.ecx],
            retReg: USER_REGISTERS.eax,
            stackReg: USER_REGISTERS.esp
        },
    }
}; ABIS['default'] = ABIS.win64.fastcall;
