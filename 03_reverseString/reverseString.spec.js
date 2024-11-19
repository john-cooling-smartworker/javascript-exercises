const reverseString = require('./reverseString');
const reverseStringManual = require("./reverseString");

describe('reverseString', () => {
  test('reverses single word', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

  test.skip('reverses multiple words', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh');
  });

  test.skip('works with numbers and punctuation', () => {
    expect(reverseString('123! abc! Hello, Odinite.')).toEqual(
      '.etinidO ,olleH !cba !321'
    );
  });
  test.skip('works with blank strings', () => {
    expect(reverseString('')).toEqual('');
  });
});
describe("reverseStringManual", () => {
	test("reverses single word", () => {
		expect(reverseStringManual("hello")).toEqual("olleh");
	});

	test("reverses multiple words", () => {
		expect(reverseStringManual("hello there")).toEqual("ereht olleh");
	});

	test("works with numbers and punctuation", () => {
		expect(reverseStringManual("123! abc! Hello, Odinite.")).toEqual(
			".etinidO ,olleH !cba !321"
		);
	});
	test("works with blank strings", () => {
		expect(reverseStringManual("")).toEqual("");
	});
});
