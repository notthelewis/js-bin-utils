import {
    is_valid_nibble,
    is_valid_u8,
    is_valid_u16,
    is_valid_u32
} from "../validators";


class DataType {
    private type_name: string;
    private lower_bound = 0;
    private higher_bound = 7;

    private valid_handler = (val: number): boolean => false;

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
                throw new Error(`util::DataType::Type::${type_name} Unrecognized`);
        }

        this.type_name = type_name;
    }

    validate(value: number, position: number): boolean {
        if (isNaN(position) || typeof position != "number") {
            throw new Error(`util::DataType::${this.type_name}_bit_set::validate::InvalidParameter`);
        }

        if (! this.valid_handler(value)) return false;
        if (position < this.lower_bound || position > this.higher_bound) return false;
        return true;
    }

    is_bit_set(value: number, position: number): boolean {
        if (!this.validate(value, position)) {
            throw new Error(`util::DataType::${this.type_name}_bit_set::ParamOutOfBounds`);
        }

        return (value >> position & 1) != 0;
    }
}

export function nibble_bit_set(value: number, position: number): boolean {
    if (typeof value == undefined || typeof position == undefined) {
        throw new Error("util::DataType::nibble_bit_set::InvalidParameters");
    }

    return new DataType('nibble').is_bit_set(value, position);
}

export function u8_bit_set(value: number, position: number): boolean {
    if (typeof value == undefined || typeof position == undefined) {
        throw new Error("util::DataType::u8_bit_set::InvalidParameters");
    }

    return new DataType('u8').is_bit_set(value, position);
}

export function u16_bit_set(value: number, position: number): boolean {
    if (typeof value == undefined || typeof position == undefined) {
        throw new Error("util::DataType::u16_bit_set::InvalidParameters");
    }

    return new DataType('u16').is_bit_set(value, position);
}

export function u32_bit_set(value: number, position: number): boolean {
    if (typeof value == undefined || typeof position == undefined) {
        throw new Error("util::DataType::u32_bit_set::InvalidParameters");
    }

    return new DataType('u32').is_bit_set(value, position);
}
