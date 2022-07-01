import { convert } from '../../../src/index';

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

describe("convert.u8x4_u32x1", ()=> {
    it("Should convert four, valid U8s into one valid U32", ()=> {
        let left = 0x01;
        let mid_left = 0x00;
        let mid_right = 0x00;
        let right = 0x00;
        expect(convert.u8x4_u32x1(left, mid_left, mid_right, right)).toBe(0x01000000);

        left = 0x00;
        mid_left = 0x01;
        mid_right = 0x00;
        right = 0x00;
        expect(convert.u8x4_u32x1(left, mid_left, mid_right, right)).toBe(0x00010000);

        left = 0x00;
        mid_left = 0x00;
        mid_right = 0x01;
        right = 0x00;
        expect(convert.u8x4_u32x1(left, mid_left, mid_right, right)).toBe(0x00000100);

        left = 0x00;
        mid_left = 0x00;
        mid_right = 0x00;
        right = 0x01;
        expect(convert.u8x4_u32x1(left, mid_left, mid_right, right)).toBe(0x00000001);
    });

    it("Should reject with numbers outside the valid remits of a u32", ()=> {
        expect(()=> convert.u8x4_u32x1(-1 ,0x00, 0x00, 0xFF)).toThrow();
        expect(()=> convert.u8x4_u32x1(0x00, -1, 0x00, 0xFF)).toThrow();
        expect(()=> convert.u8x4_u32x1(0x00, 0x00, -1, 0xFF)).toThrow();
        expect(()=> convert.u8x4_u32x1(0xFF, 0x00, 0x00, -1)).toThrow();

        expect(()=> convert.u8x4_u32x1(0xFF, 0xFF, 0xFF, 0xFF+1)).toThrow();
    });

    it("Should reject a NaN value", ()=> {
        expect(()=> convert.u8x3_u32x1(NaN, 0x00, 0x00)).toThrow();
        expect(()=> convert.u8x3_u32x1(0x00, NaN, 0x00)).toThrow();
        expect(()=> convert.u8x3_u32x1(0x00, 0x00, NaN)).toThrow();
    });
});
