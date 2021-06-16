import React from 'react';
import { render, screen } from '@testing-library/react';
import { Example } from '../src';

describe('<Example />', () => {
  it('renders', () => {
    render(<Example message="World!" />);
    expect(screen.getByText(/Hello World!/)).toBeInTheDocument();
  });
});
