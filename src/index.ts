import {
    is_valid_nibble,
    is_valid_u8,
    is_valid_u16,
    is_valid_u32
} from './validators';

import * as convert_fns from './convert_functions/index';
import * as bit_fns from './bit_manipulation_functions/index';

export const validate = {
    nibble: is_valid_nibble,
    u8: is_valid_u8,
    u16: is_valid_u16,
    u32: is_valid_u32
};

export const convert = { ...convert_fns.default };

export const bits = { ...bit_fns.default }
