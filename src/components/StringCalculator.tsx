export function add(input: string): number {

	if (input === "") {
		return 0;
	}

	if (!input.includes(",")) {
		return Number(input);
	}

	const numbers = input.split(/,|\n/).map(Number);

	if (numbers.some(isNaN)) {
		throw new Error("Invalid input");
	}

	return numbers.reduce((acc, num) => acc + num, 0);
}