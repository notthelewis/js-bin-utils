"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validators_1 = require("./validators");
const converters_1 = require("./converters");
module.exports = {
    validate: {
        nibble: validators_1.is_valid_nibble,
        u8: validators_1.is_valid_u8,
        u16: validators_1.is_valid_u16,
        u32: validators_1.is_valid_u32
    },
    convert_type: {
        nx2_u8x1: converters_1.two_nibble_to_one_u8,
        u8x1_nx2: converters_1.one_u8_to_two_nibbles,
        u8x2_u16x1: converters_1.two_u8_to_one_u16,
        u8x3_u32x1: converters_1.three_u8_to_u32,
        u16x1_u8x2: converters_1.one_u16_to_two_u8,
        u16x2_u32x1: converters_1.two_u16_to_one_u32,
        u32x1_u16x2: converters_1.one_u32_to_two_u16,
    }
};
