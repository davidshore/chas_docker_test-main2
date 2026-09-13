/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("App Router: Works with Server Components", () => {
  render(<Page />);

  screen.debug();

  expect(screen.getByRole("heading")).toHaveTextContent("hej");
});
