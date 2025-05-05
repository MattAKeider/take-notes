import { render, screen } from '@testing-library/react'; 

import NoteContent from '../../src/components/NoteContent/NoteContent';
import { type Note } from '../../src/data/data';

const note: Note = {
  title: 'TypeScript Migration Guide',
  tags: [
    'Dev',
    'React',
    'TypeScript'
  ],
  content: 'Project migration steps:\n\n1. Initial Setup\n- Install TypeScript dependencies\n- Configure tsconfig.json\n- Set up build pipeline\n\n2. Migration Strategy\n- Start with newer modules\n- Add type definitions gradually\n- Use "any" temporarily for complex cases\n\n3. Testing Approach\n- Update test configuration\n- Add type testing\n- Validate build process\n\nDeadline: End of Q4 2024',
  lastEdited: '2024-10-26T09:20:00Z',
  isArchived: true
};

describe('NoteContent', () => {
  test('should render the NoteContent component', () => {
    render(<NoteContent note={note} />);
    expect(screen.getByRole('heading')).toHaveTextContent(/typeScript migration guide/i);
    expect(screen.getByText('26 Oct 2024')).toBeInTheDocument();
    note.tags.forEach((tag: string) => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });
});