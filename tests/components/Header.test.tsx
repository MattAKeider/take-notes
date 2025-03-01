import { render, screen } from '@testing-library/react';

import Header from '../../src/components/Header/Header';

describe('Header', () => {
  test('should render the Header component', () => {
    render(<Header />);
    expect(screen.getByRole('heading')).toHaveTextContent(/all notes/i);
  });
});