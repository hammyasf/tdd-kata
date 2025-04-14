import { useState } from "react";
import { add } from "./StringCalculator";

export default function CalculatorApp() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  function calculate() {
    try {
      const sum = add(input.replace("\\n", "\n"));
      setResult(`${sum}`);
    } catch (error) {
      if (error instanceof Error) {
        setResult(`Error: ${error.message}`);
      } else {
        setResult("Unknown error");
      }
    }
  }

  return (
    <main className="bg-white shadow-2xl border-2 border-white/15 p-6 rounded-2xl max-w-5xl mx-auto flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-center text-teal-900">
        String Calculator
      </h1>
      <div className="flex flex-col gap-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers separated by commas or newlines"
          className="border-2 border-gray-300 rounded-lg p-2 w-full resize-none h-32 focus:outline-none focus:border-teal-900 transition duration-200"
          rows={4}
        ></textarea>
        <button
          onClick={calculate}
          className="bg-teal-900 text-white rounded-lg p-2 hover:bg-teal-700 transition duration-200"
        >
          Calculate
        </button>
        <div className="text-lg font-semibold text-teal-900">
          Result: {result}
        </div>
      </div>
      <div className="text-sm text-gray-500">
        <p>Enter numbers separated by commas or newlines.</p>
        <p>Custom delimiters can be defined with //{`<delimiter>`}\n.</p>
        <p>Negative numbers will throw an error.</p>
        <p>Numbers greater than 1000 will be ignored.</p>
        <p>Example: 1,2\n3 or //;\n1;2</p>
        <p>Note: This is a simple calculator for demonstration purposes.</p>
        <p>It does not handle all edge cases.</p>
        <p>For more complex calculations, consider using a library.</p>
        <p>For example, you can use mathjs or similar libraries.</p>
        <p>Feel free to modify the code to suit your needs.</p>
      </div>
      <div className="text-sm text-gray-500">
        <p>
          Created by Harman Kamboj (
          <a
            className="hover:underline"
            href="https://radegg.com/"
            target="_blank"
          >
            radegg.com
          </a>
          )
        </p>
      </div>
    </main>
  );
}
