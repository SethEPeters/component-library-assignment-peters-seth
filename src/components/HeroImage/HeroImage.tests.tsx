import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';
import 'jest-styled-components';

describe('Visible Hero Image Test', () => {
  it('check if the hero image element is visible', () => {
    render(<HeroImage alt="default" border_colour="#e4e4e4" state={true} />);

    const heroimage = screen.getAllByRole('img', {});

    expect(heroimage).toBeVisible();
  });
});

describe('Change Border Colour Test', () => {
  it('check if the Hero image element has a changed border colour', () => {
    render(<HeroImage alt="default" border_colour="#e4e4e4" state={false} />);

    const heroimage = screen.getByTestId('heroimage', {});

    expect(heroimage).toHaveStyle({
      backgroundColor: '#e4e4e4d3',
    });
  });
});
