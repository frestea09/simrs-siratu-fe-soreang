import { render, screen, fireEvent } from '@testing-library/react';
import { MyButton } from '@/components/atoms/button/button';
import '@testing-library/jest-dom';
import { FiDownload } from 'react-icons/fi';

describe('MyButton Component', () => {
  it('renders with label text', () => {
    render(<MyButton label="Click Me" />);
    expect(
      screen.getByRole('button', { name: /click me/i })
    ).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<MyButton label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables the button when disabled is true', () => {
    render(<MyButton label="Disabled" disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('shows loading spinner when loading is true', () => {
    render(<MyButton label="Loading..." loading />);
    expect(screen.getByRole('button')).toHaveClass('pointer-events-none');
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders with icon when icon is provided', () => {
    render(<MyButton label="Download" icon={<FiDownload />} />);
    expect(screen.getByRole('button')).toContainElement(
      screen.getByText('Download')
    );
  });

  it('applies custom color via props', () => {
    render(<MyButton label="Custom" color="#FF0000" />);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background-color: #FF0000');
  });

  it('applies full width if fullWidth is true', () => {
    render(<MyButton label="Full" fullWidth />);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  it('has correct type when type prop is set', () => {
    render(<MyButton label="Submit" type="submit" />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('sets aria-label if provided', () => {
    render(
      <MyButton
        label="Icon only"
        icon={<FiDownload />}
        aria-label="Download Icon"
      />
    );
    expect(screen.getByLabelText('Download Icon')).toBeInTheDocument();
  });
});
