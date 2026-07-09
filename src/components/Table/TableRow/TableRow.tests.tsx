import React from "react";
import { render, screen } from "@testing-library/react";
import TableRow from "./TableRow";
import "jest-styled-components";

describe("Visible TableRow Test", () => {
  it("check if the TableRow element is visible", () => {
    render(<TableRow label="default" state={true} />);

    const tablerow = screen.getByTestId("tablerow", {});

    expect(tablerow).toBeVisible;
  });
});

describe("Change Background Colour Test", () => {
  it("check if the TableRow element has a changed background colour", () => {
    render(<TableRow label="default" state={false} />);

    const tablerow = screen.getByTestId("tablerow", {});

    expect(tablerow).toHaveStyle({
      backgroundColor: "#e4e4e4d3",
    });
  });
});
