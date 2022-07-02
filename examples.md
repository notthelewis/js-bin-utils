#### Examples
This example calls every function in the library.

```js
const { validate, convert, bits } = require('binary-utility-functions');

const nibble = 0xF;
const u8 = 0xAA;
const u16 = 0xBEEF;
const u32 = 0xDEADBEEF;

console.log(validate.nibble(nibble));                    // true
console.log(validate.u8(u8));                            // true
console.log(validate.u16(u16));                          // true
console.log(validate.u32(u32));                          // true

console.log(validate.nibble(u8));                        // false
console.log(validate.u8(u16));                           // false
console.log(validate.u16(u32));                          // false


console.log(convert.nx2_u8x1(0xA, 0xB));                 // 0xAB
console.log(convert.u8x1_nx2(0xAB));                     // [0xA, 0xB]

console.log(convert.u8x2_u16x1(0xAA, 0xBB));             // 0xAABB
console.log(convert.u8x3_u32x1(0xAA, 0xBB, 0xCC));       // 0xAABBCC
console.log(convert.u8x4_u32x1(0xAA, 0xBB, 0xCC, 0xDD)); // 0xAABBCCDD

console.log(convert.u16x1_u8x2(0xAABB));                 // [0xAA, 0xBB]
console.log(convert.u16x2_u32x1(0xDEAD, 0xBEEF));        // 0xDEADBEEF

console.log(convert.u32x1_u16x2(0xDEADBEEF));            // [0xDEAD, 0xBEEF]
console.log(convert.u32x1_u8x4(0xDEADBEEF));             // [0xDE, 0xAD, 0xBE, 0xEF]


console.log(bits.is_bit_set.nibble(0b1000, 3));          // true
console.log(bits.is_bit_set.nibble(0b1000, 0));          // false

console.log(bits.is_bit_set.u8(0x01, 0));                // true
console.log(bits.is_bit_set.u8(0x02, 0));                // false

console.log(bits.is_bit_set.u16(0x0001, 0));             // true;
console.log(bits.is_bit_set.u16(0x0002, 0));             // false;

console.log(bits.is_bit_set.u32(0x00000001, 0));         // true;
console.log(bits.is_bit_set.u32(0x00000001, 1));         // false;
```
