import { render, screen } from '@testing-library/react';

import Search from '../../src/components/Search/Search';

describe('Search', () => {
  test('should render the Search component', () => {
    render(<Search />);
    const search = screen.getByRole('textbox');
    expect(search).toBeInTheDocument();
    expect(search).toHaveAttribute('placeholder', 'Search by title, content, or tags...');
  });
});