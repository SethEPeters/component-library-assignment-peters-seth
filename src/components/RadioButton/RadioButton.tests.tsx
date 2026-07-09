import React from "react";
import { render, screen } from "@testing-library/react";
import RadioButton from "./RadioButton";
import "jest-styled-components";

describe("Visible RadioButton Test", () => {
  it("check if the RadioButton element is visible", () => {
    render(<RadioButton label="default" state={true} />);

    const radiobutton = screen.getByTestId("radiobutton", {});

    expect(radiobutton).toBeVisible;
  });
});

describe("Change Background Colour Test", () => {
  it("check if the RadioButton element has a changed background colour", () => {
    render(<RadioButton label="default" state={false} />);

    const radiobutton = screen.getByTestId("radiobutton", {});
    const label = screen.getByTestId("radiobuttonlabel", {});

    expect(radiobutton).toHaveStyle({
      backgroundColor: "#e4e4e4d3",
    });
    expect(label).toHaveStyle({
      backgroundColor: "#e4e4e4d3",
    });
  });
});
