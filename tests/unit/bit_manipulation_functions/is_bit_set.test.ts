import { bits } from '../../../src/index';

describe("bits.is_bit_set.nibble", ()=> {
    it("Should report the first bit set for value 0x1", ()=> {
        expect(bits.is_bit_set.nibble(0x1, 0)).toBe(true);
    });

    it("Should report the last bit set for value 0xF", ()=> {
        expect(bits.is_bit_set.nibble(0xF, 3)).toBe(true);
    });

    it("Should report the middle bits set for value 0xF", ()=> {
        expect(bits.is_bit_set.nibble(0xF, 1)).toBe(true);
        expect(bits.is_bit_set.nibble(0xF, 2)).toBe(true);
    });

    it("Should reject an invalid nibble value", ()=> {
        expect(()=> bits.is_bit_set.nibble(0xBE, 0)).toThrow();
        expect(()=> bits.is_bit_set.nibble(0, -1)).toThrow();
    });

    it("Should fail if invalid parameters are provided", ()=> {
        expect(()=> bits.is_bit_set.nibble(NaN, 1)).toThrow();
        expect(()=> bits.is_bit_set.nibble(1, NaN)).toThrow();
    });
});

describe("bits.is_bit_set.u8", ()=> {
    it("Should report the first bit set for value 0x01", ()=> {
        expect(bits.is_bit_set.u8(0x01, 0)).toBe(true);
    });

    it("Should report the last bit set for value 0x10", ()=> {
        expect(bits.is_bit_set.u8(0x10, 7)).toBe(false);
    });

    it("Should report the middle bit set for value 0x0F", ()=> {
        expect(bits.is_bit_set.u8(0x0F, 3)).toBe(true);
    });

    it("Should reject an invalid u8 value", ()=> {
        expect(()=> bits.is_bit_set.u8(0xBEEF, 0)).toThrow();
        expect(()=> bits.is_bit_set.u8(-1, 0)).toThrow();
    });

    it("Should fail if invalid parameters are provided", ()=> {
        expect(()=> bits.is_bit_set.u8(NaN, 1)).toThrow();
        expect(()=> bits.is_bit_set.u8(1, NaN)).toThrow();
    });
});

