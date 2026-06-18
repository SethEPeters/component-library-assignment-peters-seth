import React from "react";
import { render, screen } from "@testing-library/react";
import TableHeader from "./TableHeader";
import 'jest-styled-components';

describe("Visible TableHeader Test", () => {
  it("check if the TableHeader element is visible", () => {
    render(<TableHeader label="default" state={true} />);

    const tableheader = screen.getByTestId('tableheader', {});

    expect(tableheader).toBeVisible;
  });
});

describe("Change Background Colour Test", () => {
  it("check if the TableHeader element has a changed background colour", () => {
    render(<TableHeader label="default" state={false} />);

    const tableheader = screen.getByTestId('tableheader', {});

    expect(tableheader).toHaveStyle({
      backgroundColor: "#e4e4e4d3"
    })
  });
});