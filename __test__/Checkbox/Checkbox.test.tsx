import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from '@/components/atoms/checkbox/checkbox';

describe('Checkbox Component', () => {
  it('renders with label', () => {
    render(
      <Checkbox label="Terima syarat" checked={false} onChange={() => {}} />
    );
    expect(screen.getByText('Terima syarat')).toBeInTheDocument();
  });

  it('is checked when prop checked is true', () => {
    render(<Checkbox label="Centang" checked={true} onChange={() => {}} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('calls onChange when clicked', () => {
    const mock = jest.fn();
    render(<Checkbox label="Klik Saya" checked={false} onChange={mock} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mock).toHaveBeenCalledWith(true);
  });

  it('is disabled when disabled prop is true', () => {
    render(
      <Checkbox label="Nonaktif" checked={false} disabled onChange={() => {}} />
    );
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('is accessible with aria-label', () => {
    render(
      <Checkbox label="Aksesibilitas" checked={false} onChange={() => {}} />
    );
    expect(screen.getByLabelText('Aksesibilitas')).toBeInTheDocument();
  });
  it('applies custom className to the wrapper', () => {
    render(
      <Checkbox
        label="Custom Style"
        checked={false}
        onChange={() => {}}
        className="bg-yellow-100 rounded-md"
      />
    );

    const label = screen.getByText('Custom Style').closest('label');
    expect(label).toHaveClass('bg-yellow-100');
    expect(label).toHaveClass('rounded-md');
  });
});
