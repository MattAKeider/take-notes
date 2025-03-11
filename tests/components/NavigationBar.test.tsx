import { render } from '@testing-library/react';

import NavigationBar from '../../src/components/NavigationBar/NavigationBar';

describe('NavigationBar', () => {
  test('should render the NavigationBar component', () => {
    const { container } = render(<NavigationBar />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});