import { convert } from '../../src/index';

describe("convert.nx2_u8x1", ()=> {
    it("Should convert two valid nibbles to one valid u8", ()=> {
        const lower_bits = 0xA;
        const higher_bits = 0xB;
        expect(convert.nx2_u8x1(lower_bits, higher_bits)).toBe(0xAB);
    });

    it ("Should convert two 0xF's to one 0xFF", ()=> {
        expect(convert.nx2_u8x1(0xF, 0xf)).toBe(0xFF);
    });

    it("Should throw an error if passed a number outside the remits of a valid nibble", ()=> {
        expect(()=> convert.nx2_u8x1(0xAA, 0x00)).toThrow();
        expect(()=> convert.nx2_u8x1(0x00, -52)).toThrow();
    });

    it("Should reject a NaN value", ()=> {
        expect(()=> convert.nx2_u8x1(NaN, 0x00)).toThrow();
        expect(()=> convert.nx2_u8x1(0x00, NaN)).toThrow();
    });
});

describe("convert.u8x1_nx2", ()=> {
    it("Should convert one u8 into two valid nibbles", ()=> {
        expect(convert.u8x1_nx2(0xAB)).toStrictEqual([0xA, 0xB]);
        expect(convert.u8x1_nx2(0x01)).toStrictEqual([0x0, 0x1]);
    });

    it("Should convert one 0xFF into two 0xF's", ()=> {
        expect(convert.u8x1_nx2(0xFF)).toStrictEqual([0xF, 0xF]);
    });

    it("Should throw an error if passed a number outside the remits of a u8", ()=> {
        expect(()=> convert.u8x1_nx2(0xFF+1)).toThrow();
    });

    it("Should reject NaN values", ()=> {
        expect(()=> convert.u8x1_nx2(NaN)).toThrow();
    });
});

describe("convert.u8x2_u16x1", ()=> {
    it("Should convert two valid bytes to one valid U16", ()=> {
        const lower_bits = 0xAA;
        const higher_bits = 0xBB;
        expect(convert.u8x2_u16x1(lower_bits, higher_bits)).toBe(0xAABB);
    });

    it("Should convert two 0xFF's to one 0xFFFF", ()=> {
        expect(convert.u8x2_u16x1(0xFF, 0xFF)).toBe(0xFFFF);
    });

    it("Should throw an error if passed a number outside the remits of a valid U8", ()=> {
        expect(()=> convert.u8x2_u16x1(0xAAA, 0x00)).toThrow();
        expect(()=> convert.u8x2_u16x1(0x00, -1)).toThrow();
    });

    it("Should reject a NaN value", ()=> {
        expect(()=> convert.u8x2_u16x1(0x00, NaN)).toThrow();
        expect(()=> convert.u8x2_u16x1(NaN, 0x00)).toThrow();
    });
});

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

describe("convert.u32x1_u16x2", ()=> {
    it("Should convert one valid U32 to two valid bytes", ()=> {
        expect(convert.u32x1_u16x2(0xDEADBEEF)).toStrictEqual([0xDEAD, 0xBEEF]);
        expect(convert.u32x1_u16x2(0xBEEFDEAD)).toStrictEqual([0xBEEF, 0xDEAD]);
    });

    it("Should convert one 0xFFFFFFFF into two 0xFF's", ()=> {
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

describe("convert.u8x3_u32x1", ()=> {
    it("Should convert three, valid U8s into one valid U32", ()=> {
        let low_byte = 0x01;
        let mid_byte = 0x00;
        let hig_byte = 0x00;
        expect(convert.u8x3_u32x1(low_byte, mid_byte, hig_byte)).toBe(0x010000);

        low_byte = 0x00;
        mid_byte = 0x01;
        hig_byte = 0x00;
        expect(convert.u8x3_u32x1(low_byte, mid_byte, hig_byte)).toBe(0x000100);

        low_byte = 0x00;
        mid_byte = 0x00;
        hig_byte = 0x01;
        expect(convert.u8x3_u32x1(low_byte, mid_byte, hig_byte)).toBe(0x000001);
    });

    it("Should reject with numbers outside the valid remits of a u32", ()=> {
        let low = 0xFFFF;
        let mid = 0xFFFF;
        let hig = 0xFFFF;
        expect(()=> convert.u8x3_u32x1(low, mid, hig)).toThrow();
        expect(()=> convert.u8x3_u32x1(0xFF, 0x00, -1)).toThrow();
    });

    it("Should reject a NaN value", ()=> {
        expect(()=> convert.u8x3_u32x1(NaN, 0x00, 0x00)).toThrow();
        expect(()=> convert.u8x3_u32x1(0x00, NaN, 0x00)).toThrow();
        expect(()=> convert.u8x3_u32x1(0x00, 0x00, NaN)).toThrow();
    });
});

