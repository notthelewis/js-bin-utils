import { is_valid_u8, is_valid_u16 } from '../validators';

/**
  * This function takes two numbers, checks whether they're valid u8s, then
  * combines them together into one valid unsigned 16-bit integer value.
  * @example Converting two valid u8s into one u16
  * ```js
  * const left = 0xAA;
  * const right = 0xBB;
  *
  * const left_right = convert.u8x2_u16x1(left, right);
  * console.log(left_right.toString(16));   // 0xAABB
  * ```
  * @param byte_left - The left-most byte.
  * @param byte_right - The right-most byte.
  * @returns - The combination of the two bytes into one u16.
**/
export function two_u8_to_one_u16(byte_left: number, byte_right: number): number  {
    if (! is_valid_u8(byte_left) || ! is_valid_u8(byte_right)) {
        throw new Error(`util::two_u8_to_one_u16::is_valid_u8::false`);
    }

    return byte_left << 8 | byte_right;
}



/**
  * This function takes three, valid u8s. Then it combines them together into
  * one valid unsigned 32-bit integer value.
  * @example Converting three valid u8s into one u32
  * ```js
  * const left = 0xAA;
  * const mid = 0xBB;
  * const right = 0xCC;
  *
  * const u32 = convert.u8x3_u32x1(left, mid, right);
  * console.log(u32.toString(16));   // 0xAABBCC
  * ```
  * @param byte_left - The left-most byte
  * @param byte_mid - The byte in the middle
  * @param byte_right - The right-most byte
  * @returns - The combination of the three bytes into one u32
**/
export function three_u8_to_one_u32(byte_left: number, byte_mid: number, byte_right: number): number {
    if (! is_valid_u8(byte_left) || ! is_valid_u8(byte_mid) || ! is_valid_u8(byte_right) ) {
        throw new Error("util::three_u8_to_u32::is_valid_u8::false");
    }

    return (byte_left << 16 | byte_mid << 8 | byte_right);
}



/**
  * This function takes in a single u16 and splits it into two array elements.
  * The returned array contains two bytes, index 0 is the left-most half of
  * the input value, index 1 is the right-most half.
  * @example Converting one valid u16 into two bytes
  * ```js
  * const u16 = 0xAABB;
  * const [ left, right ] = convert.u16x1_u8x2(0xAABB);
  * console.log(u8_left.toString(16), u8_right.toString(16));
  * // 0xAA, 0xBB
  * ```
  * @param u16 - The byte that should be split
  * @returns Index 0 = left half, index 1 = right half
**/
export function one_u16_to_two_u8(u16: number): [number, number] {
    if (! is_valid_u16(u16)) {
        throw new Error("util::one_u16_to_two_u8::is_valid_u16::false");
    }

    return [u16 >> 8, u16 & 0xFF];
}
