import {
    is_valid_nibble,
    is_valid_u8,
    is_valid_u16,
    is_valid_u32
} from '../../src/validators';

describe("is_valid_nibble", ()=> {
    it("Should reject a negative number", ()=> {
        expect(is_valid_nibble(-1)).toBe(false);
    });

    it("Should reject a floating-point number", ()=> {
        expect(is_valid_nibble(0.99)).toBe(false);
    });

    it("Should mark a valid number as valid", ()=> {
        expect(is_valid_nibble(0xF)).toBe(true);
        expect(is_valid_nibble(0x8)).toBe(true);
        expect(is_valid_nibble(0)).toBe(true);
    });

    it("Should reject a NaN", ()=> {
        expect(is_valid_nibble(NaN)).toBe(false);
    });

});

describe("is_valid_u8", ()=> {
    it("Should reject a negative number", ()=> {
        expect(is_valid_u8(-1)).toBe(false);
    });

    it("Should reject a floating-point number", ()=> {
        expect(is_valid_u8(0.25)).toBe(false);
    });

    it("Should mark a valid number as valid", ()=> {
        expect(is_valid_u8(0xFF)).toBe(true);
        expect(is_valid_u8(0xAA)).toBe(true);
        expect(is_valid_u8(0)).toBe(true);
    });

    it("Should reject a NaN", ()=> {
        expect(is_valid_u8(NaN)).toBe(false);
    });
});


describe("is_valid_u16", ()=> {
    it("Should reject a negative number", ()=> {
        expect(is_valid_u16(-256)).toBe(false);
    });

    it("Should reject a floating-point number", ()=> {
        expect(is_valid_u16(1.256)).toBe(false);
    });

    it("Should mark a valid number as valid", ()=> {
        expect(is_valid_u16(0xFFFF)).toBe(true);
        expect(is_valid_u16(0xDEAD)).toBe(true);
        expect(is_valid_u16(0x0000)).toBe(true);
    });

    it("Should reject a NaN", ()=> {
        expect(is_valid_u16(NaN)).toBe(false);
    });
});


describe("is_valid_u32", ()=> {
    it("Should reject a negative number", ()=> {
        expect(is_valid_u32(-256)).toBe(false);
    });

    it("Should reject a floating-point number", ()=> {
        expect(is_valid_u32(1.256)).toBe(false);
    });

    it("Should mark a valid number as valid", ()=> {
        expect(is_valid_u32(0xFFFFFFFF)).toBe(true);
        expect(is_valid_u32(0xDEADBEEF)).toBe(true);
        expect(is_valid_u32(0x00000000)).toBe(true);
    });

    it("Should reject a NaN", ()=> {
        expect(is_valid_u32(NaN)).toBe(false);
    });
});
