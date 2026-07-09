import React, { useState } from "react";
import { TableFooterProps } from "./TableFooter.types";
import styled, { css } from "styled-components";

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: black;
  cursor: pointer;
  background-color: ${({ background_colour }) =>
    background_colour ?? "#e6e3e3"};

  ${(props) =>
    !props.state &&
    css`
      color: white;
      cursor: not-allowed;
      background-color: #e4e4e4d3;
    `}

  &:hover {
    opacity: 0.9;
  }
`;

export default function TableFooter({
  label,
  background_colour,
  state,
  onClick,
}: TableFooterProps) {
  const [isState, setState] = useState(false);
  return (
    <StyledTableFooter
      state={state}
      background_colour={background_colour}
      onClick={() => setState(!isState)}
      data-testid="tablefooter"
    >
      {label}
    </StyledTableFooter>
  );
}
