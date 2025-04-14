export function add(input: string): number {

	if (input === "") {
		return 0;
	}

	if (!input.includes(",")) {
		return Number(input);
	}

	return 0;
}