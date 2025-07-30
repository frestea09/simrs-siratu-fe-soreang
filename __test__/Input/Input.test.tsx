import { render, screen, fireEvent } from '@testing-library/react';
import { MyInput } from '@/components/atoms/input/input';

describe('MyInput component', () => {
  const defaultProps = {
    label: 'Nama Lengkap',
    type: 'text',
    placeholder: 'Masukkan nama',
    value: '',
    onChange: jest.fn(),
  };

  it('should render input with label', () => {
    render(<MyInput {...defaultProps} />);
    expect(screen.getByLabelText(/nama lengkap/i)).toBeInTheDocument();
  });

  it('should call onChange when input value changes', () => {
    render(<MyInput {...defaultProps} />);
    const input = screen.getByPlaceholderText(/masukkan nama/i);
    fireEvent.change(input, { target: { value: 'Yora' } });
    expect(defaultProps.onChange).toHaveBeenCalledTimes(1);
  });

  it('should show error message when error prop is provided', () => {
    render(<MyInput {...defaultProps} error="Nama wajib diisi" />);
    expect(screen.getByText(/nama wajib diisi/i)).toBeInTheDocument();
  });

  it('should be disabled when disabled prop is true', () => {
    render(<MyInput {...defaultProps} disabled />);
    expect(screen.getByPlaceholderText(/masukkan nama/i)).toBeDisabled();
  });

  it('should render required indicator (*) when required is true', () => {
    render(<MyInput {...defaultProps} required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });
});
