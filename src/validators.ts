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
export function is_valid_nibble(value: number): boolean {
    if (Number.isInteger(value) && value <= 0xF && value >= 0) {
        return true;
    }

    return false;
}

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
export function is_valid_u8(value: number): boolean {
    if (Number.isInteger(value) && value <= 0xFF && value >= 0) {
        return true;
    }

    return false;
}


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
export function is_valid_u16(value: number): boolean {
    if (Number.isInteger(value) && value <= 0xFFFF && value >= 0) {
        return true;
    }

    return false;
}



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
export function is_valid_u32(value: number): boolean {
    if (Number.isInteger(value) && value <= 0xFFFFFFFF && value >= 0) {
        return true;
    }

    return false;
}
