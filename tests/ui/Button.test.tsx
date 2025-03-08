import { render, screen } from '@testing-library/react';
import { type IconType } from 'react-icons';

import Button from '../../src/ui/Button/Button';

describe('Button', () => {
  test('should render with only text and not icon', () => {
    const { container}  = render(<Button>Click me!</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me!');
    expect(container.querySelector('svg')).not.toBeInTheDocument();
  });

  test('should render with text and icon', () => {
    const Icon = vitest.fn(() => <svg></svg>);
    const { container}  = render(<Button Icon={Icon as IconType}>Click me!</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me!');
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});