import { convert } from '../../../src/index';

describe("convert.u32x1_u8x4", ()=> {
    it("Should convert one u32 into 4, valid u8s", ()=> {
        expect(convert.u32x1_u8x4(0xDEADBEEF)).toStrictEqual([
            0xDE,
            0xAD,
            0xBE,
            0xEF
        ]);

        expect(convert.u32x1_u8x4(0x10100101)).toStrictEqual([
            0x10,
            0x10,
            0x01,
            0x01
        ]);
    });

    it("Should convert the largest u32 to 4 valid u8s", ()=> {
        expect(convert.u32x1_u8x4(0xFFFFFFFF)).toStrictEqual([
            0xFF,
            0xFF,
            0xFF,
            0xFF
        ]);
    });

    it("Should reject values outside the bounds of a u32", ()=> {
        expect(()=> convert.u32x1_u8x4(0xFFFFFFFF + 1)).toThrow();
        expect(()=> convert.u32x1_u8x4(-1)).toThrow();
        expect(()=> convert.u32x1_u8x4(-0xFFFFFF)).toThrow();
    });

    it("Should reject NaN values", ()=> {
        expect(()=> convert.u32x1_u8x4(NaN)).toThrow();
    });
});

describe("convert.u32x1_u16x2", ()=> {
    it("Should convert one valid U32 to two valid bytes", ()=> {
        expect(convert.u32x1_u16x2(0xDEADBEEF)).toStrictEqual([0xDEAD, 0xBEEF]);
        expect(convert.u32x1_u16x2(0xBEEFDEAD)).toStrictEqual([0xBEEF, 0xDEAD]);
    });

    it("Should convert one 0xFFFFFFFF into two 0xFFFF's", ()=> {
        expect(convert.u32x1_u16x2(0xFFFFFFFF)).toStrictEqual([0xFFFF, 0xFFFF]);
    });

    it("Should throw an error if passed a number outside the remits of a valid U16", ()=> {
        expect(()=> convert.u32x1_u16x2(0xFFFFFFFF+ 1)).toThrow();
        expect(()=> convert.u32x1_u16x2(-1)).toThrow();
    });

    it("Should reject a NaN value", ()=> {
        expect(()=> convert.u32x1_u16x2(NaN)).toThrow();
    });
});

