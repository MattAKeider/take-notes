import { render, screen } from '@testing-library/react';

import Notes from '../../src/components/Notes/Notes';
import notes from '../../src/data/data';

describe('Notes', () => {
  test('should render the empty note message text correctly', () => {
    render(<Notes notes={[]}/>);
    expect(screen.getByRole('paragraph')).toHaveTextContent(/you don't have any notes yet/i);
  });

  test('should render a list of notes', () => {
    render(<Notes notes={notes} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(10);
  });
});