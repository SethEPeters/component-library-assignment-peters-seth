import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';
import 'jest-styled-components';

describe('Visible Image Test', () => {
  it('check if the image element is visible', () => {
    render(<Img alt="default" border_colour="#e4e4e4" state={true} />);

    const img = screen.getByRole('img', {});

    expect(img).toBeVisible();
  });
});

describe('Change Border Colour Test', () => {
  it('check if the image element has a changed border colour', () => {
    render(<Img alt="default" border_colour="#e4e4e4" state={false} />);

    const img = screen.getByTestId('img', {});

    expect(img).toHaveStyle({
      backgroundColor: '#e4e4e4d3',
    });
  });
});
