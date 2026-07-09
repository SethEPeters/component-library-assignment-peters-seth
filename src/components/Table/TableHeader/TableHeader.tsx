import React, { useState } from "react";
import { TableHeaderProps } from "./TableHeader.types";
import styled, { css } from "styled-components";

const StyledTableHeader = styled.thead<TableHeaderProps>`
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

export default function TableHeader({
  label,
  background_colour,
  state,
  onClick,
}: TableHeaderProps) {
  const [isState, setState] = useState(false);
  return (
    <StyledTableHeader
      state={state}
      background_colour={background_colour}
      onClick={() => setState(!isState)}
      data-testid="tableheader"
    >
      {label}
    </StyledTableHeader>
  );
}
