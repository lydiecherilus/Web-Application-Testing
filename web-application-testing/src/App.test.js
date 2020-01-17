import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('strike is found', () => {
  const { getByText } = render(<App />);

  getByText(/strike/i);
});
