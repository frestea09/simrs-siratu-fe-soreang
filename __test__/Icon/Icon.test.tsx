import { render } from '@testing-library/react';
import Icon from '@/components/atoms/icon/icon';

describe('Icon Component', () => {
  it('renders a valid icon by name', () => {
    const { container } = render(<Icon name="CheckCircle" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('applies the correct size and color classes', () => {
    const { container } = render(
      <Icon name="AlertTriangle" size="large" color="text-yellow-500" />
    );
    const svg = container.querySelector('svg');
    expect(svg).toHaveClass('text-yellow-500');
  });

  it('renders nothing if icon not found', () => {
    const { container } = render(<Icon name="NotExist" />);
    expect(container.firstChild).toBeNull();
  });

  it('respects custom stroke width and pixel size', () => {
    const { container } = render(
      <Icon name="Bell" size={40} strokeWidth={1} />
    );
    const svg = container.querySelector('svg');

    expect(svg).toBeInTheDocument();
    expect(svg?.getAttribute('stroke-width')).toBe('1');
    expect(svg?.getAttribute('width')).toBe('40');
    expect(svg?.getAttribute('height')).toBe('40');
  });

  it('applies small size correctly', () => {
    const { container } = render(<Icon name="Check" size="small" />);
    const svg = container.querySelector('svg');

    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('width', '16');
    expect(svg).toHaveAttribute('height', '16');
  });
});
