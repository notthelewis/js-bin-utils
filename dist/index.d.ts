declare function is_valid_nibble(byte_value: number): boolean;
declare function is_valid_u8(byte_value: number): boolean;
declare function is_valid_u16(byte_value: number): boolean;
declare function is_valid_u32(byte_value: number): boolean;

declare function two_nibble_to_one_u8(nibble_low: number, nibble_high: number): number;
declare function one_u8_to_two_nibbles(u8: number): [number, number];
declare function two_u8_to_one_u16(byte_low: number, byte_high: number): number;
declare function one_u16_to_two_u8(u16: number): [number, number];
declare function two_u16_to_one_u32(low: number, high: number): number;
declare function one_u32_to_two_u16(u32: number): [number, number];
declare function three_u8_to_u32(byte_low: number, byte_mid: number, byte_high: number): number;

declare const validate: {
    nibble: typeof is_valid_nibble;
    u8: typeof is_valid_u8;
    u16: typeof is_valid_u16;
    u32: typeof is_valid_u32;
};
declare const convert: {
    nx2_u8x1: typeof two_nibble_to_one_u8;
    u8x1_nx2: typeof one_u8_to_two_nibbles;
    u8x2_u16x1: typeof two_u8_to_one_u16;
    u8x3_u32x1: typeof three_u8_to_u32;
    u16x1_u8x2: typeof one_u16_to_two_u8;
    u16x2_u32x1: typeof two_u16_to_one_u32;
    u32x1_u16x2: typeof one_u32_to_two_u16;
};

export { convert, validate };
