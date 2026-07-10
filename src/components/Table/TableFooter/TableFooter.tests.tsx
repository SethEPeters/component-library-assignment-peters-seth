import React from 'react';
import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';
import 'jest-styled-components';

describe('Visible TableFooter Test', () => {
  it('check if the TableFooter element is visible', () => {
    render(<TableFooter label="default" state={true} />);

    const tablefooter = screen.getByTestId('tablefooter', {});

    expect(tablefooter).toBeVisible();
  });
});

describe('Change Background Colour Test', () => {
  it('check if the TableFooter element has a changed background colour', () => {
    render(<TableFooter label="default" state={false} />);

    const tablefooter = screen.getByTestId('tablefooter', {});

    expect(tablefooter).toHaveStyle({
      backgroundColor: '#e4e4e4d3',
    });
  });
});
