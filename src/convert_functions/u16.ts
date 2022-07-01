import { is_valid_u16, is_valid_u32 } from "../validators";

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



/**
  * This function converts a valid, 32-bit unsigned integer into two 16-bit
  * signed integers.
  * @example Converting one u32 into two u16 values
  * ```
  * const u32 = 0xDEADBEEF;
  * const [ left, right ] = convert.u32x1_u16x2(u32);
  * console.log(left.toString(16), right.toString(16));
  * // [ 0xDEAD, 0xBEEF ]
  * ```
  * @param u32 - The 32-bit unsigned integer to convert
  * @returns An array of two u16s. The left half at index 0, the right at 1
**/
export function one_u32_to_two_u16(u32: number): [number, number] {
    if (! is_valid_u32(u32)) {
        throw new Error("util::one_u32_to_two_u16::is_valid_u32::false");
    }

    return [u32 >>> 16, u32 & 0xFFFF];
}
