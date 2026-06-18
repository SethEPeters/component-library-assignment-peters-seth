import React, { useState } from "react";
import { RadioButtonProps } from "./RadioButton.types";
import styled, { css } from 'styled-components';



const StyledRadioButton = styled.input.attrs({ type: "radio" }) <RadioButtonProps>`
 accent-color: blue;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: black;
  cursor: pointer;
  background-color: ${({ background_colour }) =>
    background_colour ?? "#e6e3e3"};

  ${props => !props.state && css`
    color: white;
    cursor: not-allowed;
    background-color: #e4e4e4d3;
  `}

  &:hover {
    opacity: 0.9;
  }
`

const StyledRadioButtonLabel = styled.label <RadioButtonProps>`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: black;
  cursor: pointer;
  background-color: ${({ background_colour }) =>
    background_colour ?? "#f4d3d3"};

  ${props => !props.state && css`
    color: white;
    cursor: not-allowed;
    background-color: #e4e4e4d3;
  `}

  &:hover {
    opacity: 0.9;
  }
`

export default function RadioButton({ label, background_colour, state, onClick }: RadioButtonProps) {
  const [isState, setState] = useState(false);
  return (
    <StyledRadioButtonLabel
      state={state}
      background_colour={background_colour}
      onClick={() => setState(!isState)}
      data-testid="radiobuttonlabel"
      >
      {label}
      <StyledRadioButton
        // type="radio"
        state={state}
        background_colour={background_colour}
        onClick={() => setState(!isState)}
        data-testid="radiobutton"
      >
      </StyledRadioButton>
    </StyledRadioButtonLabel>
  );
}