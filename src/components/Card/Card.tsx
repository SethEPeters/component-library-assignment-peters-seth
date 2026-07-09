import React, { useState } from "react";
import { CardProps } from "./Card.types";
import styled, { css } from "styled-components";

const StyledCard = styled.div<CardProps>`
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

const StyledImg = styled.img<CardProps>`
  padding: 0;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
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

export default function Card({
  title,
  description,
  background_colour,
  state,
}: CardProps) {
  return (
    <StyledCard
      state={state}
      background_colour={background_colour}
      data-testid="card"
    >
      <h1>{title}</h1>
      <StyledImg
        state={state}
        background_colour={background_colour}
        src="src/images/PokemonSapphireGameplay.png"
        alt="Src image"
      />
      <p>{description}</p>
    </StyledCard>
  );
}
