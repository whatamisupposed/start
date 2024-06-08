describe("MathUtils", () => {
    let mathUtils;

    beforeEach(()=> {
        mathUtils = new mathUtils();
    });
});

describe("add", () => {
    it("should add 2 numbers", () => {
        expect(mathUtils.add(1,2)).toBe(3);
        expect(mathUtils.add(2,4)).toBe(6);
    });
    it("should add 2 numbers", () => {
        expect(mathUtils.add(1,2)).toBe(3);
        expect(mathUtils.add(2,4)).toBe(6);
    });
    it("should add 2 numbers", () => {
        expect(mathUtils.add(1,2)).toBe(3);
        expect(mathUtils.add(2,4)).toBe(6);
    });
    it("should add 2 numbers", () => {
        expect(mathUtils.add(1,2)).toBe(3);
        expect(mathUtils.add(2,4)).toBe(6);
    });
 describe("MathUtils", () => {
    describe("add", () => {
        it("should work with non-integer numbers", () => {
            expect(mathUtils.add("not", "numbers")).toBe("notnumbers");
        });
    });
 });

    describe("subtract", () => {
        it("should subtract 2 numbers", () => {
            expect(maUtils.subtract(2,1)).toEqual(1);
        });
        it("should should throw an error with non-numbers", () => {
            expect(maUtils.subtract("not", "numbers")).toThrow();

        });
    });
    describe("average", () => {
        it("should work with multiple inputs", () =>{
            expect(mathUtils.average(2,4)).toBe(3);
            expect(mathUtils.average(1,3,5)).toBe(3);
            expect(mathUtils.average(0,4)).toBe(3);
        });
        it('should work with mltiple strings', () =>{
            expect(() => {
                mathUtils.average
            })
        })
    })
});
