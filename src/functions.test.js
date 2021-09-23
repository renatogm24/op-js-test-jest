const {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyze,
} = require("./functions");

test("capitalize strings 1", () => {
  expect(capitalize("renato")).toBe("Renato");
});

test("capitalize strings 2", () => {
  expect(capitalize("vanessa")).toBe("Vanessa");
});

test("capitalize strings whith uppers", () => {
  expect(capitalize("renaTO")).toBe("Renato");
});

test("capitalize strings whith senteces", () => {
  expect(capitalize("good morNing how are yoU?")).toBe(
    "Good morning how are you?"
  );
});

test("capitalize when received not string", () => {
  expect(capitalize("1234")).toBe("1234");
});

test("reverseString strings 1", () => {
  expect(reverseString("Renato")).toBe("otaneR");
});

test("reverseString strings 2", () => {
  expect(reverseString("Vanessa")).toBe("assenaV");
});

test("reverseString strings 3", () => {
  expect(reverseString("Vanessa Renato")).toBe("otaneR assenaV");
});

const calculator = new Calculator();

test("Calculator: adds 1 + 2 to equal 3", () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test("Calculator: rests 3 - 2 to equal 1", () => {
  expect(calculator.rest(3, 2)).toBe(1);
});

test("Calculator: multiply 2 * 4 to equal 8", () => {
  expect(calculator.multiply(2, 4)).toBe(8);
});

test("Calculator: divide 10 / 2 to equal 5", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("caesarCipher: string 1", () => {
  expect(caesarCipher("attack at dawn", 5)).toBe("fyyfhp fy ifbs");
});

test("caesarCipher: string 2", () => {
  expect(caesarCipher("lets go for it", 5)).toBe("qjyx lt ktw ny");
});

test("caesarCipher: string 3 with capital letters", () => {
  expect(caesarCipher("lets GO for it...", 5)).toBe("qjyx LT ktw ny...");
});

test("Analize: array 1", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Analize: array 2", () => {
  expect(analyze([1, 8, 3, 4, 2, 12])).toStrictEqual({
    average: 5,
    min: 1,
    max: 12,
    length: 6,
  });
});