import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders spin wheel', () => {
  render(<App />);
  const linkElement = screen.getByText(/spin the wheel/i);
  expect(linkElement).toBeInTheDocument();
});
