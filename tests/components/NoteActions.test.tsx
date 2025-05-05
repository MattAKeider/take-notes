import { render, screen } from '@testing-library/react';
import NoteActions from '../../src/components/NoteActions/NoteActions';

describe('NoteActions', () => {
  test('should render the NoteActions component', () => {
    render(<NoteActions />);
    const buttons = screen.getAllByRole('button');
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent(/archive note/i);
    expect(buttons[1]).toHaveTextContent(/delete note/i);
  });
});