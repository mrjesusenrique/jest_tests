import { calculator } from "./calculator";

test("sum calculator", () => {
  const result = calculator.sum(1, 2);
  expect(result).toBe(3);
});

test("substract", () => {
  const result = calculator.substract(4, 2);
  expect(result).toBe(2);
});

test("multiply", () => {
  const result = calculator.multiply(3, 3);
  expect(result).toBe(9);
});

test("divide", () => {
  const result = calculator.divide(10, 2);
  expect(result).toBe(5);
});
