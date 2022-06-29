"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  convert: () => convert,
  validate: () => validate
});
module.exports = __toCommonJS(src_exports);

// src/validators.ts
function is_valid_nibble(byte_value) {
  if (Number.isInteger(byte_value) && byte_value <= 15 && byte_value >= 0) {
    return true;
  }
  return false;
}
function is_valid_u8(byte_value) {
  if (Number.isInteger(byte_value) && byte_value <= 255 && byte_value >= 0) {
    return true;
  }
  return false;
}
function is_valid_u16(byte_value) {
  if (Number.isInteger(byte_value) && byte_value <= 65535 && byte_value >= 0) {
    return true;
  }
  return false;
}
function is_valid_u32(byte_value) {
  if (Number.isInteger(byte_value) && byte_value <= 4294967295 && byte_value >= 0) {
    return true;
  }
  return false;
}

// src/converters.ts
function two_nibble_to_one_u8(nibble_low, nibble_high) {
  if (!is_valid_nibble(nibble_low) || !is_valid_nibble(nibble_high)) {
    throw new Error("util::two_nibble_to_one_byte::is_valid_nibble::false");
  }
  return nibble_low << 4 | nibble_high;
}
function one_u8_to_two_nibbles(u8) {
  if (!is_valid_u8(u8)) {
    throw new Error("util::one_u8_to_two_nibbles::is_valid_u8::false");
  }
  return [u8 & 15, u8 >> 4];
}
function two_u8_to_one_u16(byte_low, byte_high) {
  if (!is_valid_u8(byte_low) || !is_valid_u8(byte_high)) {
    throw new Error(`util::two_u8_to_one_u16::is_valid_u8::false`);
  }
  return byte_high << 8 | byte_low;
}
function one_u16_to_two_u8(u16) {
  if (!is_valid_u16(u16)) {
    throw new Error("util::one_u16_to_two_u8::is_valid_u16::false");
  }
  return [u16 & 255, u16 >> 8];
}
function two_u16_to_one_u32(low, high) {
  if (!is_valid_u16(low) || !is_valid_u16(high)) {
    throw new Error("util::two_u16_to_one_u32::is_valid_u16::false");
  }
  return (high << 16 >>> 0 | low) >>> 0;
}
function one_u32_to_two_u16(u32) {
  if (!is_valid_u32(u32)) {
    throw new Error("util::one_u32_to_two_u16::is_valid_u32::false");
  }
  return [u32 & 65535, u32 >>> 16];
}
function three_u8_to_u32(byte_low, byte_mid, byte_high) {
  if (!is_valid_u8(byte_low) || !is_valid_u8(byte_mid) || !is_valid_u8(byte_high)) {
    throw new Error("util::three_u8_to_u32::is_valid_u8::false");
  }
  return byte_high << 16 | (byte_mid << 8 | byte_low);
}

// src/index.ts
var validate = {
  nibble: is_valid_nibble,
  u8: is_valid_u8,
  u16: is_valid_u16,
  u32: is_valid_u32
};
var convert = {
  nx2_u8x1: two_nibble_to_one_u8,
  u8x1_nx2: one_u8_to_two_nibbles,
  u8x2_u16x1: two_u8_to_one_u16,
  u8x3_u32x1: three_u8_to_u32,
  u16x1_u8x2: one_u16_to_two_u8,
  u16x2_u32x1: two_u16_to_one_u32,
  u32x1_u16x2: one_u32_to_two_u16
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  convert,
  validate
});
