import { render, screen } from '@testing-library/react';

import NavigationBar from '../../src/components/NavigationBar/NavigationBar';

describe('NavigationBar', () => {
  test('should render the NavigationBar component', () => {
    render(<NavigationBar />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});