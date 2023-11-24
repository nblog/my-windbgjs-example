"use strict";

var ABIS = {
    'win64': {
        'fastcall': {
            'argRegs': ['rcx', 'rdx', 'r8', 'r9'],
            'retReg': 'rax',
            'stackReg': 'rsp'
        },
    },
    'win32': {
        'thiscall': {
            'argRegs': ['ecx'],
            'retReg': 'eax',
            'stackReg': 'esp'
        },
        'fastcall': {
            'argRegs': ['ecx', 'edx'],
            'retReg': 'eax',
            'stackReg': 'esp'
        },
        'stdcall': {
            'argRegs': [],
            'retReg': 'eax',
            'stackReg': 'esp'
        },
        'mscdecl': {
            'argRegs': [],
            'retReg': 'eax',
            'stackReg': 'esp'
        },
        'borland': {
            'argRegs': ['eax', 'edx', 'ecx'],
            'retReg': 'eax',
            'stackReg': 'esp'
        },
    }
}; ABIS['default'] = ABIS.win64.fastcall;
