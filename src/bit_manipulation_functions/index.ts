import {
    nibble_bit_set,
    u8_bit_set,
    u16_bit_set,
    u32_bit_set,
} from './is_bit_set';

export default {
    is_bit_set: {
        nibble: nibble_bit_set,
        u8: u8_bit_set,
        u16: u16_bit_set,
        u32: u32_bit_set
    }
}
