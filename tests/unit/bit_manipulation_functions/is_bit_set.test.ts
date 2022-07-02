import { bits } from '../../../src/index';
import { DataType } from '../../../src/bit_manipulation_functions/is_bit_set';

describe("Class method testing", ()=> {
    const nibble = new DataType('nibble');
    const u8 = new DataType('u8');
    const u16 = new DataType('u16');
    const u32 = new DataType('u32');

    it("Should throw an error when instantiated with an invalid type", ()=> {
        expect(()=> new DataType('invalid')).toThrow();
    });

    describe("validate", ()=> {
        it("should successfully validate correct values for each type", ()=> {
            expect(nibble.validate(0xF, 1)).toBe(true);
            expect(nibble.validate(0xF, 3)).toBe(true);

            expect(u8.validate(0x00, 1)).toBe(true);
            expect(u8.validate(0x00, 7)).toBe(true);

            expect(u16.validate(0xBEEF, 1)).toBe(true);
            expect(u16.validate(0xBEEF, 15)).toBe(true);

            expect(u32.validate(0xDEADBEEF, 1)).toBe(true);
            expect(u32.validate(0xDEADBEEF, 31)).toBe(true);
        });

        it("should reject unsuitable value arguments", ()=> {
            expect(nibble.validate(0xFF, 1)).toBe(false);
            expect(nibble.validate(-1, 3)).toBe(false);

            expect(u8.validate(256, 1)).toBe(false);
            expect(u8.validate(-1, 7)).toBe(false);

            expect(u16.validate(0xFFFF+1, 1)).toBe(false);
            expect(u16.validate(-1, 15)).toBe(false);

            expect(u32.validate(0xFFFFFFFF+1, 1)).toBe(false);
            expect(u32.validate(-1, 31)).toBe(false);
        });

        it("Should reject unsuitable position arguments", ()=>{
            expect(nibble.validate(0xF, 4)).toBe(false);
            expect(nibble.validate(0xF, -1)).toBe(false);
            expect(()=> nibble.validate(0xF, NaN)).toThrow("util::DataType::nibble_bit_set::validate::InvalidParameter");
            // @ts-ignore
            expect(()=> nibble.validate(0xFF, "no")).toThrow();

            expect(u8.validate(0xFF, 8)).toBe(false);
            expect(u8.validate(0xFF, -1)).toBe(false);
            expect(()=> u8.validate(0xFF, NaN)).toThrow();
            // @ts-ignore
            expect(()=> u8.validate(0xFF, "no")).toThrow();


            expect(u16.validate(0xFFFF, 32)).toBe(false);
            expect(u16.validate(0xFFFF, -1)).toBe(false);
            expect(()=> u16.validate(0xFFFF, NaN)).toThrow();
            // @ts-ignore
            expect(()=> u16.validate(0xFF, "no")).toThrow();

            expect(u32.validate(0xFFFFFFFF, 32)).toBe(false);
            expect(u32.validate(0xFFFFFFFF, -1)).toBe(false);
            expect(()=> u32.validate(0xFFFFFFFF, NaN)).toThrow();
            // @ts-ignore
            expect(()=> u32.validate(0xFFFFFFFF, "no")).toThrow();
        });
    });

    describe("is_bit_set", ()=> {
        it("Should successfully pick out bits in numbers", ()=> {
            expect(nibble.is_bit_set(0b1000, 3)).toBe(true);
            expect(nibble.is_bit_set(0b0001, 0)).toBe(true);

            expect(u8.is_bit_set(0b10000001, 0)).toBe(true);
            expect(u8.is_bit_set(0b10000001, 7)).toBe(true);

            expect(u16.is_bit_set(0b1000000000000000, 15)).toBe(true);
            expect(u16.is_bit_set(0b1000000000000001, 0)).toBe(true);

            expect(u32.is_bit_set(0b10000000000000000000000000000001, 0)).toBe(true);
            expect(u32.is_bit_set(0b10000000000000000000000000000001, 31)).toBe(true);
        });

        it("Should reject bad arguments", ()=> {
            expect(()=> u16.is_bit_set(0xBEEF, -1)).toThrow();
            expect(()=> u16.is_bit_set(0xFFFF+1, 0)).toThrow();
        });
    });
});

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
        expect(()=> bits.is_bit_set.nibble(-1, 0)).toThrow();
        expect(()=> bits.is_bit_set.nibble(0, 0xBE)).toThrow();
        expect(()=> bits.is_bit_set.nibble(0, -1)).toThrow();
    });

    it("Should fail if invalid parameters are provided", ()=> {
        // @ts-ignore
        expect(()=> bits.is_bit_set.nibble(undefined, 0)).toThrow();
        // @ts-ignore
        expect(()=> bits.is_bit_set.nibble(0, undefined)).toThrow();
        // @ts-ignore
        expect(()=> bits.is_bit_set.nibble(undefined, undefined)).toThrow();
        // @ts-ignore
        expect(()=> bits.is_bit_set.nibble()).toThrow();


        expect(()=> bits.is_bit_set.nibble(NaN, 1)).toThrow();
        expect(()=> bits.is_bit_set.nibble(1, NaN)).toThrow();

    });
});

describe("bits.is_bit_set.u8", ()=> {
    it("Should report the first bit set for value 0x01", ()=> {
        expect(bits.is_bit_set.u8(0x01, 0)).toBe(true);
    });

    it("Should report the last bit set for value 0x80", ()=> {
        expect(bits.is_bit_set.u8(0x80, 7)).toBe(true);
    });

    it("Should report the middle bit set for value 0x0F", ()=> {
        expect(bits.is_bit_set.u8(0x0F, 3)).toBe(true);
    });

    it("Should reject an invalid u8 value", ()=> {
        expect(()=> bits.is_bit_set.u8(0xBEEF, 0)).toThrow();
        expect(()=> bits.is_bit_set.u8(-1, 0)).toThrow();
    });

    it("Should fail if invalid parameters are provided", ()=> {
        // @ts-ignore
        expect(()=> bits.is_bit_set.u8(undefined, 0)).toThrow();
        // @ts-ignore
        expect(()=> bits.is_bit_set.u8(0, undefined)).toThrow();
        // @ts-ignore
        expect(()=> bits.is_bit_set.u8(undefined, undefined)).toThrow();
        // @ts-ignore
        expect(()=> bits.is_bit_set.u8()).toThrow();


        expect(()=> bits.is_bit_set.u8(NaN, 1)).toThrow();
        expect(()=> bits.is_bit_set.u8(1, NaN)).toThrow();
    });
});

describe("bits.is_bit_set.u16", ()=> {
    it("Should report the first bit set for value 0x01", ()=> {
        expect(bits.is_bit_set.u16(0x01, 0)).toBe(true);
    });

    it("Should report the last bit set for value ", ()=> {
        expect(bits.is_bit_set.u16(0xF000, 15)).toBe(true);
    });

    it("Should reject an invalid u16 value", ()=> {
        expect(()=> bits.is_bit_set.u16(0xDEADBEEF, 0)).toThrow();
        expect(()=> bits.is_bit_set.u16(0, -1)).toThrow();
    });

    it("Should fail if invalid parameters are provided", ()=> {
        // @ts-ignore
        expect(()=> bits.is_bit_set.u16(undefined, 0)).toThrow();
        // @ts-ignore
        expect(()=> bits.is_bit_set.u16(0, undefined)).toThrow();
        // @ts-ignore
        expect(()=> bits.is_bit_set.u16(undefined, undefined)).toThrow();
        // @ts-ignore
        expect(()=> bits.is_bit_set.u16()).toThrow();


        expect(()=> bits.is_bit_set.u16(NaN, 1)).toThrow();
        expect(()=> bits.is_bit_set.u16(1, NaN)).toThrow();
    });
});



describe("bits.is_bit_set.u32", ()=> {
    it("Should report the first bit set for value 0x01", ()=> {
        expect(bits.is_bit_set.u32(0x01, 0)).toBe(true);
    });

    it("Should report the last bit set for value ", ()=> {
        expect(bits.is_bit_set.u32(0b10101010101010101010101010101010, 31)).toBe(true);
    });

    it("Should reject an invalid u32 value", ()=> {
        expect(()=> bits.is_bit_set.u32(0xFFFFFFFF + 1, 0)).toThrow();
        expect(()=> bits.is_bit_set.u32(0, -1)).toThrow();
    });

    it("Should fail if invalid parameters are provided", ()=> {
        // @ts-ignore
        expect(()=> bits.is_bit_set.u32(undefined, 0)).toThrow();
        // @ts-ignore
        expect(()=> bits.is_bit_set.u32(0, undefined)).toThrow();
        // @ts-ignore
        expect(()=> bits.is_bit_set.u32(undefined, undefined)).toThrow();
        // @ts-ignore
        expect(()=> bits.is_bit_set.u32()).toThrow();


        expect(()=> bits.is_bit_set.u32(NaN, 1)).toThrow();
        expect(()=> bits.is_bit_set.u32(1, NaN)).toThrow();
    });
});
