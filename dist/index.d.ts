/**
 * This function checks whether a bit at a given position in a nibble is set.
 * @example Checking whether bits are set for value: 2
 * ```
 * const value = 0B0010;
 * console.log(bits.is_bit_set(1)); // true
 * console.log(bits.is_bit_set(0)); // false
 * console.log(bits.is_bit_set(4)); // Error, out of bounds
 *
 * ```
 * @param value - A valid nibble, between 0 and 15.
 * @param position - The position of the bit to check, from zero to 3
 * @returns boolean
 **/
declare function nibble_bit_set(value: number, position: number): boolean;
/**
 * This function checks whether a bit at a given position in a u8 is set.
 * @example Checking whether bits are set in value: 0B10010001
 * ```
 * const value = 0B10010001;
 * console.log(bits.is_bit_set(7)); // true
 * console.log(bits.is_bit_set(1)); // false
 * console.log(bits.is_bit_set(8)); // Error, out of bounds
 *
 * ```
 * @param value - A valid u8, between 0 and 255.
 * @param position - The position of the bit to check, from zero to 7
 * @returns boolean
 **/
declare function u8_bit_set(value: number, position: number): boolean;
/**
 * This function checks whether a bit at a given position in a u16 is set.
 * @example Checking whether bits are set for value: 0b1000100010001000
 * ```
 * const value = 0b1000100010001000;
 * console.log(bits.is_bit_set(15)); // true
 * console.log(bits.is_bit_set(2);   // false
 * console.log(bits.is_bit_set(16)); // Error, out of bounds
 *
 * ```
 * @param value - A valid u16 between 0 and 0xFFFF.
 * @param position - The position of the bit to check, from zero to 15
 * @returns boolean
 **/
declare function u16_bit_set(value: number, position: number): boolean;
/**
 * This function checks whether a bit at a given position in a u32 is set.
 * @example Checking whether bits are set for value: 0b1000100010001000
 * ```
 * const value = 0b10001000100010001000100010001000;
 * console.log(bits.is_bit_set(31)); // true
 * console.log(bits.is_bit_set(2)); // false
 * console.log(bits.is_bit_set(32)); // Error, out of bounds
 *
 * ```
 * @param value - A valid u32
 * @param position - The position of the bit to check, from zero to 31
 * @returns boolean
 **/
declare function u32_bit_set(value: number, position: number): boolean;

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
declare function one_u32_to_two_u16(u32: number): [number, number];
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
declare function one_u32_to_four_u8(u32: number): [number, number, number, number];

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
declare function one_u16_to_two_u8(u16: number): [number, number];
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
declare function two_u16_to_one_u32(left_u16: number, right_u16: number): number;

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
declare function two_u8_to_one_u16(byte_left: number, byte_right: number): number;
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
declare function three_u8_to_one_u32(byte_left: number, byte_mid: number, byte_right: number): number;
/**
 * This function converts 4 unsigned, 8-bit integer into one unsigned 32-bit
 * integer.
 * @example Combining four bytes to make a u32
 * ```js
 * const a = 0xDE;
 * const b = 0xAD;
 * const c = 0xBE;
 * const d = 0xEF:
 *
 * const abcd = convert.u8x4_u32x1(a,b,c,d);
 * console.log(abcd.toString(16));
 * // 0xDEADBEEF
 *
 * ```
 *
 **/
declare function four_u8_to_one_u32(byte_left: number, byte_mid_left: number, byte_mid_right: number, byte_right: number): number;

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
declare function two_nibble_to_one_u8(nibble_left: number, nibble_right: number): number;
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
declare function one_u8_to_two_nibbles(u8: number): [number, number];

/**
  *  This function checks whether a number can safely fit into a nibble (4bits).
  *  If the value is an integer, and it is <= 16 && >= 0, then it can fit into a
  *  nibble.
  *  @example Checking whether values are valid u8 values.
  *  ```
  *  const valid = 0xA;
  *  console.log(validate.nibble(valid))); // true
  *  const invalid = 0xFF;
  *  console.log(validate.nibble(invalid)); // false
  *  ```
  *  @param value - The number to check.
  *  @return boolean
**/
declare function is_valid_nibble(value: number): boolean;
/**
  *  This function checks whether a number can safely fit into an unsigned, 8-bit
  *  integer. If the value is an integer, and it is <= 255 && >= 0, then it can
  *  fit safely into a u8.
  *  @example Checking whether values are valid u16 values
  *  ```
  *  const valid = 0xAB;
  *  const invalid = -1;
  *  console.log(validate.u8(valid));      // true
  *  console.log(validate.u8(invalid));    // false
  *  ```
  *  @param value - The number to check.
  *  @return boolean
**/
declare function is_valid_u8(value: number): boolean;
/**
  *  This function checks whether a number can safely fit into an unsigned,
  *  16-bit integer. If the value is an integer, and it is <= 0xFFFF && >= 0,
  *  then it can fit safely into a u16.
  *  @example Check whether values are valid u16 values
  *  ```
  *  const valid = 0xBEEF;
  *  const invalid = 0xDEADBEEF;
  *  console.log(validate.u16(valid));     // true
  *  console.log(validate.u16(invalid));   // false
  *  ```
  *  @param  value - The number to check
  *  @return boolean
**/
declare function is_valid_u16(value: number): boolean;
/**
  *  This function checks whether a number can safely fit into an unsigned,
  *  32-bit integer. If the value is an integer, and it is <= 0xFFFFFFFF && >= 0,
  *  then it can fit safely into a u32.
  *  @example Checking whether values are valid u32 values
  *  ```
  *  const valid = 0xDEADBEEF;
  *  const invalid = 0xDEADBEEF0000BEEF;
  *  console.log(validate.u32(valid));      // true
  *  console.log(validate.u32(invalid));    // false
  *  ```
  *  @param value - The number to check.
  *  @return boolean
**/
declare function is_valid_u32(value: number): boolean;

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
    u8x3_u32x1: typeof three_u8_to_one_u32;
    u8x4_u32x1: typeof four_u8_to_one_u32;
    u16x1_u8x2: typeof one_u16_to_two_u8;
    u16x2_u32x1: typeof two_u16_to_one_u32;
    u32x1_u16x2: typeof one_u32_to_two_u16;
    u32x1_u8x4: typeof one_u32_to_four_u8;
};
declare const bits: {
    is_bit_set: {
        nibble: typeof nibble_bit_set;
        u8: typeof u8_bit_set;
        u16: typeof u16_bit_set;
        u32: typeof u32_bit_set;
    };
};

export { bits, convert, validate };
