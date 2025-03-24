import { render, screen } from '@testing-library/react';

import Tags from '../../src/components/Tags/Tags';

const tagsData = ['TypeScript', 'React', 'Home', 'Hobbies'];

describe('Tags', () => {
  test('should render a list of tags', () => {
    render(<Tags onClickTag={vi.fn()} selectedTag={'React'} tags={tagsData} />);
    tagsData.forEach((tag: string) => {
      const item = screen.getByText(tag);
      expect(item).toBeInTheDocument();
    });
  });
});