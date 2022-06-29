import { is_valid_nibble, is_valid_u8, is_valid_u16, is_valid_u32 } from "./validators";

export function two_nibble_to_one_u8(nibble_low: number, nibble_high: number): number {
    if (! is_valid_nibble(nibble_low) || ! is_valid_nibble(nibble_high)) {
        throw new Error("util::two_nibble_to_one_byte::is_valid_nibble::false");
    }

    return nibble_low << 4 | nibble_high;
}

export function one_u8_to_two_nibbles(u8: number): [number, number] {
    if (! is_valid_u8(u8)) {
        throw new Error("util::one_u8_to_two_nibbles::is_valid_u8::false");
    }

    return [u8 & 0xF, u8 >> 4];
}

export function two_u8_to_one_u16(byte_low: number, byte_high: number): number  {
    if (! is_valid_u8(byte_low) || ! is_valid_u8(byte_high)) {
        throw new Error(`util::two_u8_to_one_u16::is_valid_u8::false`);
    }

    return byte_high << 8 | byte_low;
}

export function one_u16_to_two_u8(u16: number): [number, number] {
    if (! is_valid_u16(u16)) {
        throw new Error("util::one_u16_to_two_u8::is_valid_u16::false");
    }

    return [u16 & 0xFF, u16 >> 8];
}

export function two_u16_to_one_u32(low: number, high: number): number {
    if (! is_valid_u16(low) || ! is_valid_u16(high)) {
        throw new Error("util::two_u16_to_one_u32::is_valid_u16::false");
    }

    // The >>> 0 simply converts a signed number to an unsigned number.
    return (high << 16 >>> 0 | low) >>> 0;
}

export function one_u32_to_two_u16(u32: number): [number, number] {
    if (! is_valid_u32(u32)) {
        throw new Error("util::one_u32_to_two_u16::is_valid_u32::false");
    }

    return [u32 & 0xFFFF, u32 >>> 16];
}

export function three_u8_to_u32(byte_low: number, byte_mid: number, byte_high: number): number {
    if (! is_valid_u8(byte_low) || ! is_valid_u8(byte_mid) || ! is_valid_u8(byte_high)) {
        throw new Error("util::three_u8_to_u32::is_valid_u8::false");
    }

    return (byte_high << 16) | (byte_mid << 8 | byte_low);
}
