// src/validators.ts
function is_valid_nibble(value) {
  if (Number.isInteger(value) && value <= 15 && value >= 0) {
    return true;
  }
  return false;
}
function is_valid_u8(value) {
  if (Number.isInteger(value) && value <= 255 && value >= 0) {
    return true;
  }
  return false;
}
function is_valid_u16(value) {
  if (Number.isInteger(value) && value <= 65535 && value >= 0) {
    return true;
  }
  return false;
}
function is_valid_u32(value) {
  if (Number.isInteger(value) && value <= 4294967295 && value >= 0) {
    return true;
  }
  return false;
}

// src/convert_functions/nibble.ts
function two_nibble_to_one_u8(nibble_left, nibble_right) {
  if (!is_valid_nibble(nibble_left) || !is_valid_nibble(nibble_right)) {
    throw new Error("util::two_nibble_to_one_byte::is_valid_nibble::false");
  }
  return nibble_left << 4 | nibble_right;
}
function one_u8_to_two_nibbles(u8) {
  if (!is_valid_u8(u8)) {
    throw new Error("util::one_u8_to_two_nibbles::is_valid_u8::false");
  }
  return [u8 >> 4, u8 & 15];
}

// src/convert_functions/u8.ts
function two_u8_to_one_u16(byte_left, byte_right) {
  if (!is_valid_u8(byte_left) || !is_valid_u8(byte_right)) {
    throw new Error(`util::two_u8_to_one_u16::is_valid_u8::false`);
  }
  return byte_left << 8 | byte_right;
}
function three_u8_to_one_u32(byte_left, byte_mid, byte_right) {
  if (!is_valid_u8(byte_left) || !is_valid_u8(byte_mid) || !is_valid_u8(byte_right)) {
    throw new Error("util::three_u8_to_u32::is_valid_u8::false");
  }
  return byte_left << 16 | byte_mid << 8 | byte_right;
}
function four_u8_to_one_u32(byte_left, byte_mid_left, byte_mid_right, byte_right) {
  if (!is_valid_u8(byte_left) || !is_valid_u8(byte_mid_left) || !is_valid_u8(byte_mid_right) || !is_valid_u8(byte_right)) {
    throw new Error("util::four_u8_to_one_u32::is_valid_u8::false");
  }
  return byte_left << 24 | byte_mid_left << 16 | byte_mid_right << 8 | byte_right;
}

// src/convert_functions/u16.ts
function one_u16_to_two_u8(u16) {
  if (!is_valid_u16(u16)) {
    throw new Error("util::one_u16_to_two_u8::is_valid_u16::false");
  }
  return [u16 >> 8, u16 & 255];
}
function two_u16_to_one_u32(left_u16, right_u16) {
  if (!is_valid_u16(left_u16) || !is_valid_u16(right_u16)) {
    throw new Error("util::two_u16_to_one_u32::is_valid_u16::false");
  }
  return (left_u16 << 16 | right_u16) >>> 0;
}

// src/convert_functions/u32.ts
function one_u32_to_two_u16(u32) {
  if (!is_valid_u32(u32)) {
    throw new Error("util::one_u32_to_two_u16::is_valid_u32::false");
  }
  return [u32 >>> 16, u32 & 65535];
}
function one_u32_to_four_u8(u32) {
  if (!is_valid_u32(u32)) {
    throw new Error("util::one_u32_to_three_u8::is_valid_u32::false");
  }
  return [
    u32 >>> 24,
    u32 >>> 16 & 255,
    u32 >>> 8 & 255,
    u32 & 255
  ];
}

// src/convert_functions/index.ts
var convert_functions_default = {
  nx2_u8x1: two_nibble_to_one_u8,
  u8x1_nx2: one_u8_to_two_nibbles,
  u8x2_u16x1: two_u8_to_one_u16,
  u8x3_u32x1: three_u8_to_one_u32,
  u8x4_u32x1: four_u8_to_one_u32,
  u16x1_u8x2: one_u16_to_two_u8,
  u16x2_u32x1: two_u16_to_one_u32,
  u32x1_u16x2: one_u32_to_two_u16,
  u32x1_u8x4: one_u32_to_four_u8
};

// src/bit_manipulation_functions/is_bit_set.ts
var DataType = class {
  constructor(type_name) {
    this.lower_bound = 0;
    this.higher_bound = 7;
    this.valid_handler = (val) => false;
    switch (type_name) {
      case "nibble":
        this.higher_bound = 3;
        this.valid_handler = is_valid_nibble;
        break;
      case "u8":
        this.higher_bound = 7;
        this.valid_handler = is_valid_u8;
        break;
      case "u16":
        this.higher_bound = 15;
        this.valid_handler = is_valid_u16;
        break;
      case "u32":
        this.higher_bound = 31;
        this.valid_handler = is_valid_u32;
        break;
      default:
        throw new Error(`util::DataType::Type::${type_name} Unrecognized`);
    }
    this.type_name = type_name;
  }
  validate(value, position) {
    for (const param of arguments) {
      if (isNaN(param) || typeof param != "number") {
        throw new Error(`util::DataType::${this.type_name}_bit_set::validate::InvalidParameter`);
      }
    }
    if (!this.valid_handler(value))
      return false;
    if (position < this.lower_bound || position > this.higher_bound)
      return false;
    return true;
  }
  is_bit_set(value, position) {
    if (!this.validate(value, position)) {
      throw new Error(`util::DataType::${this.type_name}_bit_set::ParamOutOfBounds`);
    }
    return (value >> position & 1) != 0;
  }
};
function nibble_bit_set(value, position) {
  for (const param of arguments) {
    if (isNaN(param) || typeof param != "number") {
      throw new Error("util::DataType::nibble_bit_set::InvalidParameters");
    }
  }
  return new DataType("nibble").is_bit_set(value, position);
}
function u8_bit_set(value, position) {
  for (const param of arguments) {
    if (isNaN(param) || typeof param != "number") {
      throw new Error("util::DataType::u8_bit_set::InvalidParameters");
    }
  }
  return new DataType("u8").is_bit_set(value, position);
}
function u16_bit_set(value, position) {
  for (const param of arguments) {
    if (isNaN(param) || typeof param != "number") {
      throw new Error("util::DataType::u16_bit_set::InvalidParameters");
    }
  }
  return new DataType("u16").is_bit_set(value, position);
}
function u32_bit_set(value, position) {
  for (const param of arguments) {
    if (isNaN(param) || typeof param != "number") {
      throw new Error("util::DataType::u32_bit_set::InvalidParameters");
    }
  }
  return new DataType("u32").is_bit_set(value, position);
}

// src/bit_manipulation_functions/index.ts
var bit_manipulation_functions_default = {
  is_bit_set: {
    nibble: nibble_bit_set,
    u8: u8_bit_set,
    u16: u16_bit_set,
    u32: u32_bit_set
  }
};

// src/index.ts
var validate = {
  nibble: is_valid_nibble,
  u8: is_valid_u8,
  u16: is_valid_u16,
  u32: is_valid_u32
};
var convert = { ...convert_functions_default };
var bits = { ...bit_manipulation_functions_default };
export {
  bits,
  convert,
  validate
};
