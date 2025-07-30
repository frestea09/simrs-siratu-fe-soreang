import { render, screen } from '@testing-library/react';
import Text from '@/components/atoms/text/text';

describe('Text Component', () => {
  it('should render content', () => {
    render(<Text content="Halo Dunia" />);
    expect(screen.getByText('Halo Dunia')).toBeInTheDocument();
  });

  it('should render heading variant correctly', () => {
    render(<Text content="Ini Heading" variant="heading" />);
    const element = screen.getByText('Ini Heading');
    expect(element.tagName).toBe('H1');
    expect(element).toHaveClass('text-2xl', 'font-bold');
  });

  it('should apply custom className', () => {
    render(<Text content="Dengan garis bawah" className="underline" />);
    expect(screen.getByText('Dengan garis bawah')).toHaveClass('underline');
  });

  it('should render with custom size and color', () => {
    render(
      <Text content="Ukuran & Warna" size="text-xl" color="text-red-500" />
    );
    const element = screen.getByText('Ukuran & Warna');
    expect(element).toHaveClass('text-xl', 'text-red-500');
  });

  it('should align text correctly', () => {
    render(<Text content="Tengah" align="center" />);
    expect(screen.getByText('Tengah')).toHaveClass('text-center');
  });
});
