import { render, screen } from '@testing-library/react';
import Label from '@/components/atoms/label/label';

describe('Label Component', () => {
  it('renders text correctly', () => {
    render(<Label text="Nama Pengguna" />);
    expect(screen.getByText('Nama Pengguna')).toBeInTheDocument();
  });

  it('applies small size class', () => {
    render(<Label text="Kecil" size="small" />);
    expect(screen.getByText('Kecil')).toHaveClass('text-sm');
  });

  it('applies medium size class by default', () => {
    render(<Label text="Medium" />);
    expect(screen.getByText('Medium')).toHaveClass('text-base');
  });

  it('applies large size class', () => {
    render(<Label text="Besar" size="large" />);
    expect(screen.getByText('Besar')).toHaveClass('text-lg');
  });

  it('applies custom text color', () => {
    render(<Label text="Berwarna" color="text-red-500" />);
    expect(screen.getByText('Berwarna')).toHaveClass('text-red-500');
  });

  it('applies text alignment (center)', () => {
    render(<Label text="Tengah" align="center" />);
    expect(screen.getByText('Tengah')).toHaveClass('text-center');
  });

  it('applies text alignment (right)', () => {
    render(<Label text="Kanan" align="right" />);
    expect(screen.getByText('Kanan')).toHaveClass('text-right');
  });

  it('applies additional className', () => {
    render(<Label text="Kustom" className="italic font-bold" />);
    const label = screen.getByText('Kustom');
    expect(label).toHaveClass('italic');
    expect(label).toHaveClass('font-bold');
  });

  it('renders as a <label> element', () => {
    render(<Label text="Cek Tag" />);
    expect(screen.getByText('Cek Tag').tagName).toBe('LABEL');
  });
});
