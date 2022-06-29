import {
    two_nibble_to_one_u8,
    one_u8_to_two_nibbles,
    two_u8_to_one_u16,
    one_u16_to_two_u8,
    three_u8_to_u32,
    one_u32_to_two_u16,
    two_u16_to_one_u32
} from '../../src/converters';

describe("two_nibble_to_one_u8", ()=> {
    it("Should convert two valid nibbles to one valid u8", ()=> {
        const higher_bits = 0xA;
        const lower_bits = 0x0;
        expect(two_nibble_to_one_u8(lower_bits, higher_bits)).toBe(0xA);
    });

    it ("Should convert two 0xF's to one 0xFF", ()=> {
        expect(two_nibble_to_one_u8(0xF, 0xf)).toBe(0xFF);
    });

    it("Should throw an error if passed a number outside the remits of a valid nibble", ()=> {
        expect(()=> two_nibble_to_one_u8(0xAA, 0x00)).toThrow();
        expect(()=> two_nibble_to_one_u8(0x00, -52)).toThrow();
    });

    it("Should reject a NaN value", ()=> {
        expect(()=> two_nibble_to_one_u8(NaN, 0x00)).toThrow();
        expect(()=> two_nibble_to_one_u8(0x00, NaN)).toThrow();
    });
});

describe("one_u8_to_two_nibbles", ()=> {
    it("Should convert one u8 into two valid nibbles", ()=> {
        expect(one_u8_to_two_nibbles(0x10)).toStrictEqual([0x0, 0x1]);
        expect(one_u8_to_two_nibbles(0x01)).toStrictEqual([0x1, 0x0]);
    });

    it("Should convert one 0xFF into two 0xF's", ()=> {
        expect(one_u8_to_two_nibbles(0xFF)).toStrictEqual([0xF, 0xF]);
    });

    it("Should throw an error if passed a number outside the remits of a u8", ()=> {
        expect(()=> one_u8_to_two_nibbles(0xFF+1)).toThrow();
    });

    it("Should reject NaN values", ()=> {
        expect(()=> one_u8_to_two_nibbles(NaN)).toThrow();
    });
});

describe("two_u8_to_one_u16", ()=> {
    it("Should convert two valid bytes to one valid U16", ()=> {
        const higher_bits = 0x01;
        const lower_bits = 0x00;
        expect(two_u8_to_one_u16(lower_bits, higher_bits)).toBe(256);
    });

    it("Should convert two 0xFF's to one 0xFFFF", ()=> {
        expect(two_u8_to_one_u16(0xFF, 0xFF)).toBe(0xFFFF);
    });

    it("Should throw an error if passed a number outside the remits of a valid U8", ()=> {
        expect(()=> two_u8_to_one_u16(0xAAA, 0x00)).toThrow();
        expect(()=> two_u8_to_one_u16(0x00, -1)).toThrow();
    });

    it("Should reject a NaN value", ()=> {
        expect(()=> two_u8_to_one_u16(0x00, NaN)).toThrow();
        expect(()=> two_u8_to_one_u16(NaN, 0x00)).toThrow();
    });
});

describe("one_u16_to_two_u8", ()=> {
    it("Should convert one valid U16 to two valid bytes", ()=> {
        const higher_bits = 0x01;
        const lower_bits = 0x00;
        expect(one_u16_to_two_u8(256)).toStrictEqual([lower_bits, higher_bits]);
    });

    it("Should convert one 0xFFFF into two 0xFF's", ()=> {
        expect(one_u16_to_two_u8(0xFFFF)).toStrictEqual([0xFF, 0xFF]);
    });

    it("Should throw an error if passed a number outside the remits of a valid U16", ()=> {
        expect(()=> one_u16_to_two_u8(0xFFFF+ 1)).toThrow();
        expect(()=> one_u16_to_two_u8(-1)).toThrow();
    });

    it("Should reject a NaN value", ()=> {
        expect(()=> one_u16_to_two_u8(NaN)).toThrow();
    });
});

describe("two_u16_to_one_u32", ()=> {
    it("Should convert two valid U16 into one valid U32", ()=> {
        const higher_bits = 0xDEAD;
        const lower_bits = 0xBEEF;
        expect(two_u16_to_one_u32(lower_bits, higher_bits)).toBe(0xDEADBEEF);
    });

    it("Should convert two FFFF's into one FFFFFFFF", ()=> {
        expect(two_u16_to_one_u32(0xFFFF, 0xFFFF)).toBe(0xFFFFFFFF);
    });

    it("Should throw an error if passed a number outside the remit of a U32", ()=> {
        expect(()=> two_u16_to_one_u32(0xFFFF, 0xFFFF + 1)).toThrow();
        expect(()=> two_u16_to_one_u32(0xFFFF + 1, 0xFFFF)).toThrow();
    });

    it("Should reject a NaN value", ()=> {
        expect(()=> two_u16_to_one_u32(0x00, NaN)).toThrow();
        expect(()=> two_u16_to_one_u32(NaN, 0x00)).toThrow();
    });
} );

describe("one_u32_to_two_u16", ()=> {
    it("Should convert one valid U32 to two valid bytes", ()=> {
        expect(one_u32_to_two_u16(0xDEADBEEF)).toStrictEqual([0xBEEF, 0xDEAD]);
        expect(one_u32_to_two_u16(0xBEEFDEAD)).toStrictEqual([0xDEAD, 0xBEEF]);
    });

    it("Should convert one 0xFFFFFFFF into two 0xFF's", ()=> {
        expect(one_u32_to_two_u16(0xFFFFFFFF)).toStrictEqual([0xFFFF, 0xFFFF]);
    });

    it("Should throw an error if passed a number outside the remits of a valid U16", ()=> {
        expect(()=> one_u32_to_two_u16(0xFFFFFFFF+ 1)).toThrow();
        expect(()=> one_u32_to_two_u16(-1)).toThrow();
    });

    it("Should reject a NaN value", ()=> {
        expect(()=> one_u32_to_two_u16(NaN)).toThrow();
    });
});

describe("three_u8_to_u32", ()=> {
    it("Should convert three, valid U8s into one valid U32", ()=> {
        let low_byte = 0x01;
        let mid_byte = 0x00;
        let hig_byte = 0x00;
        expect(three_u8_to_u32(low_byte, mid_byte, hig_byte)).toBe(1);

        low_byte = 0x00;
        mid_byte = 0x01;
        hig_byte = 0x00;
        expect(three_u8_to_u32(low_byte, mid_byte, hig_byte)).toBe(256);

        low_byte = 0x00;
        mid_byte = 0x00;
        hig_byte = 0x01;
        expect(three_u8_to_u32(low_byte, mid_byte, hig_byte)).toBe(0xFFFF + 1);
    });

    it("Should reject a NaN value", ()=> {
        expect(()=> three_u8_to_u32(NaN, 0x00, 0x00)).toThrow();
        expect(()=> three_u8_to_u32(0x00, NaN, 0x00)).toThrow();
        expect(()=> three_u8_to_u32(0x00, 0x00, NaN)).toThrow();
    });
});

