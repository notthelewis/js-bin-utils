# Binary Utility Functions
This library provides a handy set of utility functions for manipulating binary
values- such as those ascertained from a Buffer, or a TCP stream. These functions
can be split into two categories:
 1) Type validity checking
 2) Type conversion

# Getting Started
To get started,  simply run: `npm i binary-utility-functions` at the root of the
project.

From here, import the code into the file.

```
const { validate, convert_types } = require('binary-utility-functions').default;

function check_valid() {
    console.log(validate.is_valid_u8(0xFF));
}

function convert() {
    let u8 = 0xAF;
    let nibbles = convert_types.u8x1_nx2(u8);
    console.log(u8, nibbles);
}
```

#### Types catered for
This library validates and converts between these types:
```
nibble (unsigned, 4 bit integer)
u8  (unsigned,  8 bit integer)
u16 (unsigned, 16 bit integer)
u24 (insigned, 24 bit integer)
u32 (unsigned, 32 bit integer)
```

#### Conversion methodology
Each conversion function will take in 1 or more parameters, then return one or
more different types. Every conversion function follows the same conventions:

```
If chopping a data type into multiple, smaller data types; the return parameters
will always be an array, sorted MSB first.

If concatenating multiple smaller data types into one larger data type, the
parameters are passed in LSB order.
```

```ts
// src/converters.ts
export function two_u16_to_one_u32(low: number, high: number): number {
    if (! is_valid_u16(low) || ! is_valid_u16(high)) {
        throw new Error("util::two_u16_to_one_u32::is_valid_u16::false");
    }

    // The >>> 0 simply converts a signed number to an unsigned number.
    return (high << 16 >>> 0 | low) >>> 0;
}

/// two_u16_to_one_u32(0xBEEF, 0xDEAD)
/// ↪ 0xDEADBEEF
```


#### Naming conventions
The exported module is an object that looks like this:
```
{
  validate: {
    nibble: [Function: is_valid_nibble],
    u8: [Function: is_valid_u8],
    u16: [Function: is_valid_u16],
    u32: [Function: is_valid_u32]
  },
  convert_type: {
    nx2_u8x1: [Function: two_nibble_to_one_u8],
    u8x1_nx2: [Function: one_u8_to_two_nibbles],
    u8x2_u16x1: [Function: two_u8_to_one_u16],
    u8x3_u32x1: [Function: three_u8_to_u32],
    u16x1_u8x2: [Function: one_u16_to_two_u8],
    u16x2_u32x1: [Function: two_u16_to_one_u32],
    u32x1_u16x2: [Function: one_u32_to_two_u16]
  }
}
```

The `validate` functions are straight forward- if you pass in a number, each one
will tell you whether or not that number can be a valid type. i.e. 0xFF is a
valid u8, but it is not a valid nibble.

The `convert_types` functions all follow the same naming convention:
```
<from_type>[quantity]_<to_type>[quantity]
```

For example: `u32x1_u16x2` can be read as "from 1 u32 to 2 u16s."
