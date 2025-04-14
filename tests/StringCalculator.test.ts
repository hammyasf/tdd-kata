import {describe, it, expect} from 'vitest';
import { add } from '../src/components/StringCalculator';

describe("StringCalculator", () => {
	
	it("should return 0 for an empty string", () => {
		expect(add("")).toBe(0);
	});

	it ("should return the number for a single number string", () => {
		expect(add("1")).toBe(1);
	});

	it ("should return the sum of two numbers separated by a comma", () => {
		expect(add("1,2")).toBe(3);
	});

	it ("should return the sum of multiple numbers separated by commas", () => {
		expect(add("1,2,3,4")).toBe(10);
	});

	it ("supports newline as a delimiter", () => {
		expect(add("1\n2,3")).toBe(6);
	});

	it ("supports custom delimiters defined with //{delimiter}\\n", () => {
		expect(add("//;\n1;2")).toBe(3);
	});
	
})