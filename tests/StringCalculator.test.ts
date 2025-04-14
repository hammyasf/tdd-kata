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

})