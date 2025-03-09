import { render, screen } from '@testing-library/react';

import Notes from '../../src/components/Notes/Notes';

describe('Notes', () => {
  test('should render the empty note message text correctly', () => {
    render(<Notes />);
    expect(screen.getByRole('paragraph')).toHaveTextContent(/you don't have any notes yet/i);
  });
});