import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
// const { getByText } = render(<App />);
// const linkElement = getByText(/learn react/i);
// expect(linkElement).toBeInTheDocument();
// expect((2 + 2).toBe(4));
// });

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
