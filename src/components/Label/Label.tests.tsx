import React from "react";
import { render, screen } from "@testing-library/react";
import Label from "./Label";
import 'jest-styled-components';

describe("Visible Label Test", () => {
  it("check if the label element is visible", () => {
    render(<Label label="default" state={true} />);

    const label = screen.getByTestId('label', {});

    expect(label).toBeVisible;
  });
});

describe("Change Background Colour Test", () => {
  it("check if the label element has a changed background colour", () => {
    render(<Label label="default" state={false} />);

    const label = screen.getByTestId('label', {});

    expect(label).toHaveStyle({
      backgroundColor: "#e4e4e4d3"
    })
  });
});