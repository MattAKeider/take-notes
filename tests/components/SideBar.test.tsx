import { render, screen } from '@testing-library/react';

import SideBar from '../../src/components/SideBar/SideBar';

describe('SideBar', () => {
  test('should render the SideBar component', () => {
    render(<SideBar notes={[]} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});