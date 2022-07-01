import { convert } from '../../../src/index';

describe("convert.u16x1_u8x2", ()=> {
    it("Should convert one valid U16 to two valid bytes", ()=> {
        const lower_bits = 0xBE;
        const higher_bits = 0xEF;
        expect(convert.u16x1_u8x2(0xBEEF)).toStrictEqual([lower_bits, higher_bits]);
    });

    it("Should convert one 0xFFFF into two 0xFF's", ()=> {
        expect(convert.u16x1_u8x2(0xFFFF)).toStrictEqual([0xFF, 0xFF]);
    });

    it("Should throw an error if passed a number outside the remits of a valid U16", ()=> {
        expect(()=> convert.u16x1_u8x2(0xFFFF+ 1)).toThrow();
        expect(()=> convert.u16x1_u8x2(-1)).toThrow();
    });

    it("Should reject a NaN value", ()=> {
        expect(()=> convert.u16x1_u8x2(NaN)).toThrow();
    });
});

describe("convert.u16x2_u32x1", ()=> {
    it("Should convert two valid U16 into one valid U32", ()=> {
        const lower_bits  = 0xDEAD;
        const higher_bits = 0xBEEF;
        expect(convert.u16x2_u32x1(lower_bits, higher_bits)).toBe(0xDEADBEEF);
    });

    it("Should convert two FFFF's into one FFFFFFFF", ()=> {
        expect(convert.u16x2_u32x1(0xFFFF, 0xFFFF)).toBe(0xFFFFFFFF);
    });

    it("Should throw an error if passed a number outside the remit of a U32", ()=> {
        expect(()=> convert.u16x2_u32x1(0xFFFF, 0xFFFF + 1)).toThrow();
        expect(()=> convert.u16x2_u32x1(0xFFFF + 1, 0xFFFF)).toThrow();
    });

    it("Should reject a NaN value", ()=> {
        expect(()=> convert.u16x2_u32x1(0x00, NaN)).toThrow();
        expect(()=> convert.u16x2_u32x1(NaN, 0x00)).toThrow();
    });
} );
