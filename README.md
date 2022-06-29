# Binary Utility Functions
This library provides a handy set of utility functions for manipulating binary
values- such as those ascertained from a Buffer, or a TCP stream. These functions
can be split into two categories:
 1) Type validity checking
 2) Type conversion

The purpose of this library is to assist with designing or using Binary protocols.

## Getting Started
To get started,  simply run: `npm i binary-utility-functions` at the root of the
project.

From here, import the code into a file. Both ESM and CJS imports are supported.

```js
const { validate, convert } = require('binary-utility-functions');

let u8 = 0xAF;

// Check if: 0xAF is a valid u8
console.log(validate.is_valid_u8(u8));

// Convert u8 to two nibbles
let nibbles = convert.u8x1_nx2(u8);

console.log(u8, nibbles);
```


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
//     u8x3_u32x1: [Function: three_u8_to_u32],
//     u16x1_u8x2: [Function: one_u16_to_two_u8],
//     u16x2_u32x1: [Function: two_u16_to_one_u32],
//     u32x1_u16x2: [Function: one_u32_to_two_u16]
// }
```

---

#### Types
This library validates and converts between these types:
```
nibble (unsigned, 4 bit integer)
u8  (unsigned,  8 bit integer)
u16 (unsigned, 16 bit integer)
u32 (unsigned, 32 bit integer)
```

Please note that, since JS only has one number type, each 'type' will still be
stored inside a number- but they'll have to first pass verification steps.

#### Conversion methodology
Each conversion function will take in 1 or more parameters (a number), then
returns one or more different types. Every conversion function follows the same
conventions:

> If chopping a data type into multiple, smaller data types; the return parameters
> will always be an array, sorted MSB first.

>> If concatenating multiple smaller data types into one larger data type, the
>> parameters are always passed in LSB order.


```js
const { convert } = require('binary-utility-functions');

let original_value = 0xDEADBEEF;

let [ left, right ] = convert.u32x1_u16x2(original_value);
console.log({left, right});
// Left =  0xBEEF
// Right = 0xDEAD

let combined = convert.u16x2_u32x1(right, left);
console.log({combined});
// 0xDEADBEEF
```
