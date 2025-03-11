import React from "react";
import { render, screen, test, expect } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // for the toBeInTheDocument matcher
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
