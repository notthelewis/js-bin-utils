"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.three_u8_to_u32 = exports.one_u32_to_two_u16 = exports.two_u16_to_one_u32 = exports.one_u16_to_two_u8 = exports.two_u8_to_one_u16 = exports.one_u8_to_two_nibbles = exports.two_nibble_to_one_u8 = void 0;
const validators_1 = require("./validators");
function two_nibble_to_one_u8(nibble_low, nibble_high) {
    if (!(0, validators_1.is_valid_nibble)(nibble_low) || !(0, validators_1.is_valid_nibble)(nibble_high)) {
        throw new Error("util::two_nibble_to_one_byte::is_valid_nibble::false");
    }
    return nibble_low << 4 | nibble_high;
}
exports.two_nibble_to_one_u8 = two_nibble_to_one_u8;
function one_u8_to_two_nibbles(u8) {
    if (!(0, validators_1.is_valid_u8)(u8)) {
        throw new Error("util::one_u8_to_two_nibbles::is_valid_u8::false");
    }
    return [u8 & 0xF, u8 >> 4];
}
exports.one_u8_to_two_nibbles = one_u8_to_two_nibbles;
function two_u8_to_one_u16(byte_low, byte_high) {
    if (!(0, validators_1.is_valid_u8)(byte_low) || !(0, validators_1.is_valid_u8)(byte_high)) {
        throw new Error(`util::two_u8_to_one_u16::is_valid_u8::false`);
    }
    return byte_high << 8 | byte_low;
}
exports.two_u8_to_one_u16 = two_u8_to_one_u16;
function one_u16_to_two_u8(u16) {
    if (!(0, validators_1.is_valid_u16)(u16)) {
        throw new Error("util::one_u16_to_two_u8::is_valid_u16::false");
    }
    return [u16 & 0xFF, u16 >> 8];
}
exports.one_u16_to_two_u8 = one_u16_to_two_u8;
function two_u16_to_one_u32(low, high) {
    if (!(0, validators_1.is_valid_u16)(low) || !(0, validators_1.is_valid_u16)(high)) {
        throw new Error("util::two_u16_to_one_u32::is_valid_u16::false");
    }
    // The >>> 0 simply converts a signed number to an unsigned number.
    return (high << 16 >>> 0 | low) >>> 0;
}
exports.two_u16_to_one_u32 = two_u16_to_one_u32;
function one_u32_to_two_u16(u32) {
    if (!(0, validators_1.is_valid_u32)(u32)) {
        throw new Error("util::one_u32_to_two_u16::is_valid_u32::false");
    }
    return [u32 & 0xFFFF, u32 >>> 16];
}
exports.one_u32_to_two_u16 = one_u32_to_two_u16;
function three_u8_to_u32(byte_low, byte_mid, byte_high) {
    if (!(0, validators_1.is_valid_u8)(byte_low) || !(0, validators_1.is_valid_u8)(byte_mid) || !(0, validators_1.is_valid_u8)(byte_high)) {
        throw new Error("util::three_u8_to_u32::is_valid_u8::false");
    }
    return (byte_high << 16) | (byte_mid << 8 | byte_low);
}
exports.three_u8_to_u32 = three_u8_to_u32;
