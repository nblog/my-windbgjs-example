"use strict";

var ABIS = {
    'win64': {
        'fastcall': {
            'argRegs': ['rcx', 'rdx', 'r8', 'r9'],
            'retReg': 'rax',
            'stackReg': 'rsp',
            'stackAlignment': 16
        },
    },
    'win32': {
        'thiscall': {
            'argRegs': ['ecx'],
            'retReg': 'eax',
            'stackReg': 'esp',
            'stackAlignment': 4
        },
        'fastcall': {
            'argRegs': ['ecx', 'edx'],
            'retReg': 'eax',
            'stackReg': 'esp',
            'stackAlignment': 4
        },
        'mscdecl': {
            'argRegs': [],
            'retReg': 'eax',
            'stackReg': 'esp',
            'stackAlignment': 4
        },
        'stdcall': {
            'argRegs': [],
            'retReg': 'eax',
            'stackReg': 'esp',
            'stackAlignment': 4
        }
    }
}; ABIS['default'] = ABIS.win64.fastcall;
