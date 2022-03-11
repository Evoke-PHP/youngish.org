import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './home';

test('renders youngish.org', () => {
  render(<Home />);
  const linkElement = screen.getByText(/youngish.org/i);
  expect(linkElement).toBeInTheDocument();
});
