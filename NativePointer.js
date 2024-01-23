"use strict";


class NativePointer {
    constructor(addr = 0) { this.addr = host.Int64(addr); }

    add(value=0) {
        return new NativePointer(this.addr.add(value));
    }
    sub(value=0) {
        return new NativePointer(this.addr.subtract(value));
    }
    mul(value=0) {
        return new NativePointer(this.addr.multiply(value));
    }
    div(value=0) {
        return new NativePointer(this.addr.divide(value));
    }
    and(value=0) {
        return new NativePointer(this.addr.bitwiseAnd(value));
    }
    or(value=0) {
        return new NativePointer(this.addr.bitwiseOr(value));
    }
    xor(value=0) {
        return new NativePointer(this.addr.bitwiseXor(value));
    }
    shl(value=0) {
        return new NativePointer(this.addr.bitwiseShiftLeft(value));
    }
    shr(value=0) {
        return new NativePointer(this.addr.bitwiseShiftRight(value));
    }
    toString() {
        return this.addr.toString();
    }
    equals(value) {
        if (value instanceof NativePointer)
            return 0 == this.addr.compareTo(value.addr);
        else
            return 0 == this.addr.compareTo(value);
    }

    readByteArray(length=0) {
        return new Uint8Array(host.memory.readMemoryValues(this.addr, length)).buffer;
    }
    readU8() {
        return host.memory.readMemoryValues(this.addr, 1, 1)[0].asNumber();
    }
    readU16() {
        return host.memory.readMemoryValues(this.addr, 1, 2)[0].asNumber();
    }
    readU32() {
        return host.memory.readMemoryValues(this.addr, 1, 4)[0].asNumber();
    }
    readU64() {
        return host.memory.readMemoryValues(this.addr, 1, 8)[0];
    }
    readS8() {
        return host.memory.readMemoryValues(this.addr, 1, 1, true)[0].asNumber();
    }
    readS16() {
        return host.memory.readMemoryValues(this.addr, 1, 2, true)[0].asNumber();
    }
    readS32() {
        return host.memory.readMemoryValues(this.addr, 1, 4, true)[0].asNumber();
    }
    readS64() {
        return host.memory.readMemoryValues(this.addr, 1, 8, true)[0];
    }
    readFloat() {
        const dataView = new DataView(this.readByteArray(4));
        return dataView.getFloat32(0, true);
    }
    readDouble() {
        const dataView = new DataView(this.readByteArray(8));
        return dataView.getFloat64(0, true);
    }
    readUtf8String() {
        throw new Error("Not implemented");
        const trybuffer = this.readByteArray(256);
        const nullByteIndex = trybuffer.indexOf(0);
        return new TextDecoder("utf-8").decode(trybuffer.subarray(0, nullByteIndex));
    }
    readAnsiString() {
        return host.memory.readString(this.addr);
    }
    readUtf16String() {
        return host.memory.readWideString(this.addr);
    }
    readPointer() {
        const length = host.namespace.Debugger.State.PseudoRegisters.General.ptrsize;
        return new NativePointer(
            host.memory.readMemoryValues(this.addr, 1, length)[0]);
    }

    writeByteArray(bytes) {
        const arr = new Uint8Array(bytes);
        host.memory.writeMemoryValues(this.addr, arr.byteLength, new Array(...arr));
    }
    writePointer(value) {
        const length = host.namespace.Debugger.State.PseudoRegisters.General.ptrsize;
        host.memory.writeMemoryValues(this.addr, 1, value.addr, length);
    }
    writeU8(value=0) {
        host.memory.writeMemoryValues(this.addr, 1, value, 1);
    }
    writeU16(value=0) {
        host.memory.writeMemoryValues(this.addr, 1, value, 2);
    }
    writeU32(value=0) {
        host.memory.writeMemoryValues(this.addr, 1, value, 4);
    }
    writeU64(value=0) {
        host.memory.writeMemoryValues(this.addr, 1, value, 8);
    }
    writeS8(value=0) {
        host.memory.writeMemoryValues(this.addr, 1, value, 1, true);
    }
    writeS16(value=0) {
        host.memory.writeMemoryValues(this.addr, 1, value, 2, true);
    }
    writeS32(value=0) {
        host.memory.writeMemoryValues(this.addr, 1, value, 4, true);
    }
    writeS64(value=0) {
        host.memory.writeMemoryValues(this.addr, 1, value, 8, true);
    }
    writeFloat(value=0) {
        const dataView = new DataView(new ArrayBuffer(4));
        dataView.setFloat32(0, value, true);
        this.writeByteArray(dataView.buffer);
    }
    writeDouble(value=0) {
        const dataView = new DataView(new ArrayBuffer(8));
        dataView.setFloat64(0, value, true);
        this.writeByteArray(dataView.buffer);
    }
}


const NULL = new NativePointer(0);
function ptr(value) { return new NativePointer(value); }
/*
module.exports = {
    ptrlength: function () {
        return host.namespace.Debugger.State.PseudoRegisters.General.ptrsize;
    },

    NULL: new NativePointer(0),
    ptr: function (value) { return new NativePointer(value); },
}
*/