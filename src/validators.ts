export function is_valid_nibble(byte_value: number): boolean {
    if (Number.isInteger(byte_value) && byte_value <= 0xF && byte_value >= 0) {
        return true;
    }

    return false;
}

export function is_valid_u8(byte_value: number): boolean {
    if (Number.isInteger(byte_value) && byte_value <= 0xFF && byte_value >= 0) {
        return true;
    }

    return false;
}

export function is_valid_u16(byte_value: number): boolean {
    if (Number.isInteger(byte_value) && byte_value <= 0xFFFF && byte_value >= 0) {
        return true;
    }

    return false;
}

export function is_valid_u32(byte_value: number): boolean {
    if (Number.isInteger(byte_value) && byte_value <= 0xFFFFFFFF && byte_value >= 0) {
        return true;
    }

    return false;
}
