import { is_valid_u16, is_valid_u32 } from "../validators";

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



/**
  * This function converts two, valid 16-bit unsigned integers into one unsigned
  * 32-bit integer.
  * @example Converting two u16 values into one u32
  * ```
  * const left  = 0xDEAD;
  * const right = 0xBEEF;
  *
  * const left_right = convert.u16x2_u32x1(left, right);
  * console.log(left_right.toString(16));
  * // 0xDEADBEEF;
  * ```
  * @param left_u16 - The left-most part of the resultant u32
  * @param right_u16 - The right-most part of the resultant u32
  * @returns A valid u32 value, which is the product of the left & right params.
**/
export function two_u16_to_one_u32(left_u16: number, right_u16: number): number {
    if (! is_valid_u16(left_u16) || ! is_valid_u16(right_u16)) {
        throw new Error("util::two_u16_to_one_u32::is_valid_u16::false");
    }

    // The >>> 0 simply converts a signed number to an unsigned number.
    return (left_u16 << 16 | right_u16) >>> 0;
}



