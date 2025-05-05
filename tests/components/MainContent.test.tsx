import { render, screen } from '@testing-library/react';

import MainContent from '../../src/components/MainContent/MainContent';
import notes from '../../src/data/data';

describe('MainContent', () => {
  test('should render the MainContent component', () => {
    render(<MainContent note={notes[0]}/>);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});