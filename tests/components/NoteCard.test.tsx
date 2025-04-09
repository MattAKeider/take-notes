import { render, screen } from '@testing-library/react';

import NoteCard from '../../src/components/NoteCard/NoteCard';

const props = {
  title: 'React Testing',
  tags: ['React', 'Testing'],
  lastEdit: '2024-10-29T10:15:00Z'
};

describe('NoteCard', () => {
  test('should render the NoteCard component', () => {
    render(<NoteCard {...props} />);
    expect(screen.getByText(/react testing/i)).toBeInTheDocument();
    expect(screen.getByText(/29 oct 2024/i)).toBeInTheDocument();
    props.tags.forEach((tag: string) => {
      expect(screen.getByText(tag, {exact: true})).toBeInTheDocument();
    });
  });
});