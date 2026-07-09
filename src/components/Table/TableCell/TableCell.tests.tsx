import React from "react";
import { render, screen } from "@testing-library/react";
import TableCell from "./TableCell";
import "jest-styled-components";

describe("Visible TableCell Test", () => {
  it("check if the tablecell element is visible", () => {
    render(<TableCell label="default" state={true} />);

    const tablecell = screen.getByTestId("tablecell", {});

    expect(tablecell).toBeVisible;
  });
});

describe("Change Background Colour Test", () => {
  it("check if the tablecell element has a changed background colour", () => {
    render(<TableCell label="default" state={false} />);

    const tablecell = screen.getByTestId("tablecell", {});

    expect(tablecell).toHaveStyle({
      backgroundColor: "#e4e4e4d3",
    });
  });
});
