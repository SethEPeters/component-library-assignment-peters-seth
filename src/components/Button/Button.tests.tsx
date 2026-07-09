import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "jest-styled-components";

describe("Visible Button Test", () => {
  it("check if the button element is visible", () => {
    render(<Button label="default" state={true} />);

    const button = screen.getByRole("button", {});

    expect(button).toBeVisible;
  });
});

describe("Change Background Colour Test", () => {
  it("check if the button element has a changed background colour", () => {
    render(<Button label="default" state={false} />);

    const button = screen.getByRole("button", {});

    expect(button).toHaveStyle({
      backgroundColor: "#e4e4e4d3",
    });
  });
});
