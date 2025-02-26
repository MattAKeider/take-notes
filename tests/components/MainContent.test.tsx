import { render, screen } from '@testing-library/react';

import MainContent from '../../src/components/MainContent/MainContent';

describe('MainContent', () => {
  test('should render the MainContent component', () => {
    render(<MainContent />);
    expect(screen.getByRole('paragraph')).toHaveTextContent(/main content/i);
  });
});