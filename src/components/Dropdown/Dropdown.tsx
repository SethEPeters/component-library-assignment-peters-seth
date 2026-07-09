import React, { useState } from "react";
import { DropdownProps } from "./Dropdown.types";
import styled, { css } from "styled-components";

const StyledDropdown = styled.select<DropdownProps>`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: solid;
  border-radius: 4px;
  border-color: #000000;
  color: black;
  background-color: ${({ background_colour }) =>
    background_colour ?? "#e6e3e3"};

  ${(props) =>
    !props.state &&
    css`
      color: white;
      cursor: not-allowed;
      background-color: #e4e4e4d3;
      border-color: #e9e9e9;
    `}
`;

export default function Dropdown({
  label,
  option1,
  option2,
  background_colour,
  state,
}: DropdownProps) {
  return (
    <StyledDropdown
      state={state}
      background_colour={background_colour}
      data-testid="dropdown"
    >
      <option value={label}>{label}</option>
      <option value={option1}>{option1}</option>
      <option value={option2}>{option2}</option>
    </StyledDropdown>
  );
}
