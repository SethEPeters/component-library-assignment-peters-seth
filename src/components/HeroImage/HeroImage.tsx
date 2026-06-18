import React, { useState } from "react";
import { HeroImageProps } from "./HeroImage.types";
import styled, { css } from 'styled-components';



const StyledHeroImage = styled.img<HeroImageProps>`
  padding: 0;
  font-size: 1rem;
  border: solid;
  border-radius: 4px;
  border-color: #000000;
  width: 100%;
  color: black;
  border-color: ${({ border_colour }) =>
    border_colour ?? "#e6e3e3"};

  ${props => !props.state && css`
    padding: 0;
    color: white;
    cursor: not-allowed;
    background-color: #e4e4e4d3;
    opacity: 50%;
    border-color: #e4e4e4;
  `}

`

export default function Dropdown({ alt, border_colour, state }: HeroImageProps) {
  return (
    <StyledHeroImage
      state={state}
      border_colour={border_colour}
      alt={alt}
      src={"src/images/PokemonSapphireGameplay.png"}
      data-testid="heroimage"
    >

    </StyledHeroImage>
  );
}