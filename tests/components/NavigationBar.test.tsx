import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';

import NavigationBar from '../../src/components/NavigationBar/NavigationBar';

const tagsData = ['TypeScript', 'React', 'Home', 'Hobbies'];

describe('NavigationBar', () => {
  test('should render the NavigationBar component', () => {
    const { container } = render(<NavigationBar tags={tagsData} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('should select Tag link on click', async () => {
    render(<NavigationBar tags={tagsData} />);

    const link = screen.getByRole('link', {name: 'React'});
    const user = userEvent.setup();
    await act(async () => await user.click(link));

    expect(location.href).toContain('/#');
  });
});