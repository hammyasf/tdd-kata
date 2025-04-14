export function add(input: string): number {
  if (input === "") {
    return 0;
  }

  let delimiterRegex = /,|\n/;

  if (input.startsWith("//")) {
    const newLineIndex = input.indexOf("\n");
    if (newLineIndex === -1) {
      throw new Error(
        "Invalid input: missing newline after delimiter declaration"
      );
    }

    const delimiterSpec = input.substring(2, newLineIndex);
    input = input.substring(newLineIndex + 1);

    delimiterRegex = new RegExp(escapeRegExp(delimiterSpec));
  }

  const numbers = input.split(delimiterRegex).map(Number);
  
  const negatives = numbers.filter((num) => num < 0);
  if (negatives.length > 0) {
	throw new Error("Negatives not allowed: " + negatives.join(", "));
  }
  
  return numbers.reduce((sum, num) => sum + num, 0);
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
