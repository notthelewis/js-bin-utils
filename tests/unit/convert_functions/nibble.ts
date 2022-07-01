import { convert } from '../../../src/index';

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

