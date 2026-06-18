import React, { useState } from "react";
import { ImgProps } from "./Img.types";
import styled, { css } from 'styled-components';



const StyledImg = styled.img<ImgProps>`
  padding: 0;
  font-size: 1rem;
  border: solid;
  border-radius: 4px;
  color: black;
  width: 200px;
  border-color: ${({ border_colour }) =>
    border_colour ?? "#e6e3e3"};
rgb(111, 111, 111)
  ${props => !props.state && css`
    padding: 0;
    color: white;
    cursor: not-allowed;
    width: 200px;
    background-color: #e4e4e4d3;
    opacity: 50%;
    border-color: #e4e4e4;
  `}

`

export default function Img({ alt, border_colour, state }: ImgProps) {
  return (
    <StyledImg
      state={state}
      border_colour={border_colour}
      alt={alt}
      src={"src/images/PokemonSapphireGameplay.png"}
      data-testid="img"
    >

    </StyledImg>
  );
}