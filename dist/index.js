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
function is_valid_nibble(value) {
  if (Number.isInteger(value) && value <= 15 && value >= 0) {
    return true;
  }
  return false;
}
function is_valid_u8(value) {
  if (Number.isInteger(value) && value <= 255 && value >= 0) {
    return true;
  }
  return false;
}
function is_valid_u16(value) {
  if (Number.isInteger(value) && value <= 65535 && value >= 0) {
    return true;
  }
  return false;
}
function is_valid_u32(value) {
  if (Number.isInteger(value) && value <= 4294967295 && value >= 0) {
    return true;
  }
  return false;
}

// src/convert_functions/nibble.ts
function two_nibble_to_one_u8(nibble_left, nibble_right) {
  if (!is_valid_nibble(nibble_left) || !is_valid_nibble(nibble_right)) {
    throw new Error("util::two_nibble_to_one_byte::is_valid_nibble::false");
  }
  return nibble_left << 4 | nibble_right;
}
function one_u8_to_two_nibbles(u8) {
  if (!is_valid_u8(u8)) {
    throw new Error("util::one_u8_to_two_nibbles::is_valid_u8::false");
  }
  return [u8 >> 4, u8 & 15];
}

// src/convert_functions/u8.ts
function two_u8_to_one_u16(byte_left, byte_right) {
  if (!is_valid_u8(byte_left) || !is_valid_u8(byte_right)) {
    throw new Error(`util::two_u8_to_one_u16::is_valid_u8::false`);
  }
  return byte_left << 8 | byte_right;
}
function three_u8_to_one_u32(byte_left, byte_mid, byte_right) {
  if (!is_valid_u8(byte_left) || !is_valid_u8(byte_mid) || !is_valid_u8(byte_right)) {
    throw new Error("util::three_u8_to_u32::is_valid_u8::false");
  }
  return byte_left << 16 | byte_mid << 8 | byte_right;
}
function four_u8_to_one_u32(byte_left, byte_mid_left, byte_mid_right, byte_right) {
  if (!is_valid_u8(byte_left) || !is_valid_u8(byte_mid_left) || !is_valid_u8(byte_mid_right) || !is_valid_u8(byte_right)) {
    throw new Error("util::four_u8_to_one_u32::is_valid_u8::false");
  }
  return byte_left << 24 | byte_mid_left << 16 | byte_mid_right << 8 | byte_right;
}

// src/convert_functions/u16.ts
function one_u16_to_two_u8(u16) {
  if (!is_valid_u16(u16)) {
    throw new Error("util::one_u16_to_two_u8::is_valid_u16::false");
  }
  return [u16 >> 8, u16 & 255];
}
function two_u16_to_one_u32(left_u16, right_u16) {
  if (!is_valid_u16(left_u16) || !is_valid_u16(right_u16)) {
    throw new Error("util::two_u16_to_one_u32::is_valid_u16::false");
  }
  return (left_u16 << 16 | right_u16) >>> 0;
}

// src/convert_functions/u32.ts
function one_u32_to_two_u16(u32) {
  if (!is_valid_u32(u32)) {
    throw new Error("util::one_u32_to_two_u16::is_valid_u32::false");
  }
  return [u32 >>> 16, u32 & 65535];
}
function one_u32_to_four_u8(u32) {
  if (!is_valid_u32(u32)) {
    throw new Error("util::one_u32_to_three_u8::is_valid_u32::false");
  }
  return [
    u32 >>> 24,
    u32 >>> 16 & 255,
    u32 >>> 8 & 255,
    u32 & 255
  ];
}

// src/convert_functions/index.ts
var convert_functions_default = {
  nx2_u8x1: two_nibble_to_one_u8,
  u8x1_nx2: one_u8_to_two_nibbles,
  u8x2_u16x1: two_u8_to_one_u16,
  u8x3_u32x1: three_u8_to_one_u32,
  u8x4_u32x1: four_u8_to_one_u32,
  u16x1_u8x2: one_u16_to_two_u8,
  u16x2_u32x1: two_u16_to_one_u32,
  u32x1_u16x2: one_u32_to_two_u16,
  u32x1_u8x4: one_u32_to_four_u8
};

// src/index.ts
var validate = {
  nibble: is_valid_nibble,
  u8: is_valid_u8,
  u16: is_valid_u16,
  u32: is_valid_u32
};
var convert = { ...convert_functions_default };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  convert,
  validate
});
