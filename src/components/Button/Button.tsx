import React, { useState } from 'react';
import { ButtonProps } from './Button.types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button<ButtonProps>`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: solid;
  border-radius: 4px;
  border-color: #000000;
  color: black;
  cursor: pointer;
  background-color: ${({ background_colour }) => background_colour ?? '#e6e3e3'};

  ${(props) =>
    !props.state &&
    css`
      color: white;
      cursor: not-allowed;
      background-color: #e4e4e4d3;
      border-color: #e9e9e9;
    `}

  &:hover {
    opacity: 0.9;
  }
`;

export default function Button({ label, background_colour, state }: ButtonProps) {
  const [isState, setState] = useState(false);
  return (
    <StyledButton state={state} background_colour={background_colour} onClick={() => setState(!isState)}>
      {label}
    </StyledButton>
  );
}
