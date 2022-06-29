import {
    is_valid_nibble,
    is_valid_u8,
    is_valid_u16,
    is_valid_u32
} from './validators';

import {
    two_nibble_to_one_u8,
    one_u8_to_two_nibbles,
    two_u8_to_one_u16,
    one_u16_to_two_u8,
    two_u16_to_one_u32,
    one_u32_to_two_u16,
    three_u8_to_u32,
} from './converters';

export const validate = {
    nibble: is_valid_nibble,
    u8: is_valid_u8,
    u16: is_valid_u16,
    u32: is_valid_u32
};

export const convert = {
    nx2_u8x1: two_nibble_to_one_u8,
    u8x1_nx2: one_u8_to_two_nibbles,
    u8x2_u16x1: two_u8_to_one_u16,
    u8x3_u32x1: three_u8_to_u32,
    u16x1_u8x2: one_u16_to_two_u8,
    u16x2_u32x1: two_u16_to_one_u32,
    u32x1_u16x2: one_u32_to_two_u16,
};
