import { is_valid_u32 } from '../validators';

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



/**
  * This function takes one valid u32, then converts it into 4 u8s.
  * @example
  * ```js
  * const u32 = 0xDEADBEEF;
  * const u8s = convert.u32x1_u8x4(u32);
  * u8s.forEach(u8 => {
  *     console.log(u8.toString(16));
  * });
  * // 0xDE, 0xAD, 0xBE, 0xEF
  * ```
  * @param u32 - A valid u32
  * @returns An array of 4 bytes, in the order they were entered.
**/
export function one_u32_to_four_u8(u32: number): [number, number, number, number] {
    if (! is_valid_u32(u32)) {
        throw new Error("util::one_u32_to_three_u8::is_valid_u32::false");
    }

    return [
        u32 >>> 24,
        u32 >>> 16 & 0x00FF,
        u32 >>> 8 & 0x00FF,
        u32 & 0x00FF
    ];

}
