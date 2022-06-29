"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_valid_u32 = exports.is_valid_u16 = exports.is_valid_u8 = exports.is_valid_nibble = void 0;
function is_valid_nibble(byte_value) {
    if (Number.isInteger(byte_value) && byte_value <= 0xF && byte_value >= 0) {
        return true;
    }
    return false;
}
exports.is_valid_nibble = is_valid_nibble;
function is_valid_u8(byte_value) {
    if (Number.isInteger(byte_value) && byte_value <= 0xFF && byte_value >= 0) {
        return true;
    }
    return false;
}
exports.is_valid_u8 = is_valid_u8;
function is_valid_u16(byte_value) {
    if (Number.isInteger(byte_value) && byte_value <= 0xFFFF && byte_value >= 0) {
        return true;
    }
    return false;
}
exports.is_valid_u16 = is_valid_u16;
function is_valid_u32(byte_value) {
    if (Number.isInteger(byte_value) && byte_value <= 0xFFFFFFFF && byte_value >= 0) {
        return true;
    }
    return false;
}
exports.is_valid_u32 = is_valid_u32;
