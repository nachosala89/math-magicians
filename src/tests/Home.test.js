import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/Home';

test('Renders home title', () => {
  render(<Home />);

  const welcomeText = screen.queryByText('Welcome to our Page!');

  expect(welcomeText).toBeInTheDocument();
});
