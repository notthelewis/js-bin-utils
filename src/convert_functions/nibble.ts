import { is_valid_nibble, is_valid_u8 } from "../validators";

/**
  * This function takes two numbers, checks whether they're valid nibbles, then
  * combines them together into one, valid unsigned 8-bit integer value.
  * @example Converting two valid nibbles into one u8
  * ```js
  * const left = 0xA;
  * const right = 0xB;
  *
  * const left_right = convert.nx2_u8x1(left, right);
  * console.log(left_right.toString(16));   // 0xAB
  * ```
  * @param nibble_left - The left-most part of the byte.
  * @param nibble_right - The right-most part of the byte.
  * @returns The combination of the two nibbles into one byte.
**/
export function two_nibble_to_one_u8(nibble_left: number, nibble_right: number): number {
    if (! is_valid_nibble(nibble_left) || ! is_valid_nibble(nibble_right)) {
        throw new Error("util::two_nibble_to_one_byte::is_valid_nibble::false");
    }

    return nibble_left << 4 | nibble_right;
}



/**
  * This function takes in a single byte and splits it into two array elements.
  * The returned array contains two nibbles, index 0 is the left-most half,
  * index 1 is the right-most half of the input value,
  *
  * @example Converting one valid u8 into two nibbles
  * ```js
  * const u8 = 0xAB;
  * const [u8_left, u8_right] = convert.u8x1_nx2(u8);
  * console.log(u8_right.toString(16), u8_left.toString(16));
  * // 0xA, 0xB
  * ```
  *
  * @param u8 - The byte that should be split
  * @returns Index 0 = left half, index 1 = right half
**/
export function one_u8_to_two_nibbles(u8: number): [number, number] {
    if (! is_valid_u8(u8)) {
        throw new Error("util::one_u8_to_two_nibbles::is_valid_u8::false");
    }

    return [u8 >> 4, u8 & 0xF];
}
