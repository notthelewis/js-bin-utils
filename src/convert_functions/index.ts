import {
    one_u8_to_two_nibbles,
    two_nibble_to_one_u8,
} from './nibble';

import {
    two_u8_to_one_u16,
    three_u8_to_one_u32,
    four_u8_to_one_u32
} from './u8';

import {
    one_u16_to_two_u8,
    two_u16_to_one_u32,
} from './u16';

import {
    one_u32_to_four_u8,
    one_u32_to_two_u16,
} from './u32';

export default {
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
