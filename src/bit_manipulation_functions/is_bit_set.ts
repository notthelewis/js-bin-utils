import {
    is_valid_nibble,
    is_valid_u8,
    is_valid_u16,
    is_valid_u32,
} from "../validators";

export class DataType {
    private type_name: string;
    private lower_bound = 0;
    private higher_bound = 7;

    // Tell jest not to include this in coverage...
    /* c8 ignore next */
    valid_handler = (val: number): boolean => false; // eslint-disable-line @typescript-eslint/no-unused-vars

    constructor(type_name: string) {
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
                throw new Error(
                    `util::DataType::Type::${type_name} Unrecognized`
                );
        }

        this.type_name = type_name;
    }

    validate(value: number, position: number): boolean {
        for (const param of arguments) {
            if (isNaN(param) || typeof param != "number") {
                throw new Error(
                    `util::DataType::${this.type_name}_bit_set::validate::InvalidParameter`
                );
            }
        }

        if (!this.valid_handler(value)) return false;
        if (position < this.lower_bound || position > this.higher_bound)
            return false;
        return true;
    }

    is_bit_set(value: number, position: number): boolean {
        if (!this.validate(value, position)) {
            throw new Error(
                `util::DataType::${this.type_name}_bit_set::ParamOutOfBounds`
            );
        }

        return ((value >> position) & 1) != 0;
    }
}

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
export function nibble_bit_set(value: number, position: number): boolean {
    for (const param of arguments) {
        if (isNaN(param) || typeof param != "number") {
            throw new Error(
                "util::DataType::nibble_bit_set::InvalidParameters"
            );
        }
    }

    return new DataType("nibble").is_bit_set(value, position);
}

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
export function u8_bit_set(value: number, position: number): boolean {
    for (const param of arguments) {
        if (isNaN(param) || typeof param != "number") {
            throw new Error("util::DataType::u8_bit_set::InvalidParameters");
        }
    }

    return new DataType("u8").is_bit_set(value, position);
}

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
export function u16_bit_set(value: number, position: number): boolean {
    for (const param of arguments) {
        if (isNaN(param) || typeof param != "number") {
            throw new Error("util::DataType::u16_bit_set::InvalidParameters");
        }
    }

    return new DataType("u16").is_bit_set(value, position);
}

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
export function u32_bit_set(value: number, position: number): boolean {
    for (const param of arguments) {
        if (isNaN(param) || typeof param != "number") {
            throw new Error("util::DataType::u32_bit_set::InvalidParameters");
        }
    }

    return new DataType("u32").is_bit_set(value, position);
}
