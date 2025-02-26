import { render, screen } from '@testing-library/react';

import App from '../../src/App';

describe('App', () => {
  test('should render App component', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});