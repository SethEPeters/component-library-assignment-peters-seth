import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import 'jest-styled-components';

describe('Visible Card Test', () => {
  it('check if the card element is visible', () => {
    render(<Card title="default" description="default description" state={true} />);

    const card = screen.getByRole('heading', {});

    expect(card).toBeVisible();
  });
});

describe('Change Background Colour Test', () => {
  it('check if the card element has a changed background colour', () => {
    render(<Card title="default" description="default description" state={false} />);

    const card = screen.getByTestId('card', {});

    expect(card).toHaveStyle({
      backgroundColor: '#e4e4e4d3',
    });
  });
});
