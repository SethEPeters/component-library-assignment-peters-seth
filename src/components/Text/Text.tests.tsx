import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "./Text";
import "jest-styled-components";

describe("Visible Text Test", () => {
  it("check if the Text element is visible", () => {
    render(<Text label="default" state={true} />);

    const text = screen.getByTestId("text", {});

    expect(text).toBeVisible;
  });
});

describe("Change Background Colour Test", () => {
  it("check if the Text element has a changed background colour", () => {
    render(<Text label="default" state={false} />);

    const text = screen.getByTestId("text", {});

    expect(text).toHaveStyle({
      backgroundColor: "#e4e4e4d3",
    });
  });
});
