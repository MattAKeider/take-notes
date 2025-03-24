import { render } from '@testing-library/react';

import NavigationBar from '../../src/components/NavigationBar/NavigationBar';

const tagsData = ['TypeScript', 'React', 'Home', 'Hobbies'];

describe('NavigationBar', () => {
  test('should render the NavigationBar component', () => {
    const { container } = render(<NavigationBar tags={tagsData} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});