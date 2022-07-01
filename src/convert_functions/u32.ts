import { is_valid_u32 } from '../validators';

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
