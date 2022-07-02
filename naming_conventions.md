#### Naming conventions

#### Validate
The `validate` functions are straight forward- if you pass in a value, each one
will tell you whether or not that number can be a valid instance of that type.
i.e. 0xFF is a valid u8, but it is not a valid nibble. NaN checks and bounds
checks are written for each function.

```js
// Importing validate using CJS
const { validate } = require('binary-utility-functions');
console.log(validate);
// {
//     nibble: [Function: is_valid_nibble],
//     u8: [Function: is_valid_u8],
//     u16: [Function: is_valid_u16],
//     u32: [Function: is_valid_u32]
// }
```

#### Convert
The `convert` functions all follow the same naming convention:
`<from_type>[quantity]_<to_type>[quantity]`.

For example: `convert.u32x1_u16x2` can be read as `from 1 u32, to 2 u16s`.

```
// Importing convert using ESM
import { convert } from 'binary-utility-functions';
console.log(convert);
// {
//     nx2_u8x1: [Function: two_nibble_to_one_u8],
//     u8x1_nx2: [Function: one_u8_to_two_nibbles],
//     u8x2_u16x1: [Function: two_u8_to_one_u16],
//     u8x3_u32x1: [Function: three_u8_to_one_u32],
//     u8x4_u32x1: [Function: four_u8_to_one_u32],
//     u16x1_u8x2: [Function: one_u16_to_two_u8],
//     u16x2_u32x1: [Function: two_u16_to_one_u32],
//     u32x1_u16x2: [Function: one_u32_to_two_u16],
//     u32x1_u8x4: [Function: one_u32_to_four_u8]
// }
```

#### Bits
These functions are used for basic binary digit manipulation. At the time of
writing (v2.0.1) the only functions in this category so far are the `is_bit_set`
functions. They all check whether a bit is set in a given value, and they all
run validation checks on the value to check and the position it's checking.

```
const { bits } = require('./dist')
console.log(bits);
//  {
//    is_bit_set: {
//      nibble: [Function: nibble_bit_set],
//      u8: [Function: u8_bit_set],
//      u16: [Function: u16_bit_set],
//      u32: [Function: u32_bit_set]
//    }
//  }
```
