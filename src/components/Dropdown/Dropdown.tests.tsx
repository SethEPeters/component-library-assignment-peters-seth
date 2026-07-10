import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';
import 'jest-styled-components';

describe('Visible Dropdown Test', () => {
  it('check if the dropdown element is visible', () => {
    render(<Dropdown label="default" option1="an option" option2="another option" state={true} />);

    const dropdown = screen.getAllByRole('option', {});

    expect(dropdown).toBeVisible();
  });
});

describe('Change Background Colour Test', () => {
  it('check if the Dropdown element has a changed background colour', () => {
    render(<Dropdown label="default" option1="another option" option2="an option" state={false} />);

    const dropdown = screen.getByTestId('dropdown', {});

    expect(dropdown).toHaveStyle({
      backgroundColor: '#e4e4e4d3',
    });
  });
});
