import {describe, it, expect} from 'vitest';
import { add } from '../src/components/StringCalculator';

describe("StringCalculator", () => {
	it("should return 0 for an empty string", () => {
		expect(add("")).toBe(0);
	});
})