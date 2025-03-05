import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type IconType } from 'react-icons';
import { act } from 'react';

import NavItem from '../../src/components/NavItem/NavItem';

const props = {
  LinkIcon: vitest.fn() as IconType,
  linkText: 'All Notes',
  selected: false,
  onClickLink: vitest.fn()
};

describe('NavItem', () => {
  beforeEach(() => {
    vitest.clearAllMocks();
  });

  test('should render NavItem correctly', () => {
    render(<NavItem {...props} />);
    expect(screen.getByRole('link')).toHaveTextContent('All Notes');
  });

  test('should call onClickLink when NavItem is clicked', async () => {
    render(<NavItem {...props} />);
    const link = screen.getByRole('link');

    const user = userEvent.setup();
    await act(() => user.click(link));

    expect(props.onClickLink).toHaveBeenCalledOnce();
  });

  test('should not call onClickLink when NavItem is not clicked', () => {
    render(<NavItem {...props} />);
    expect(props.onClickLink).not.toHaveBeenCalledOnce();
  });
});