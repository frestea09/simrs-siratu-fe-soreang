import { fireEvent, render, screen } from '@testing-library/react';
import Select from '@/components/atoms/select/select';

const options = [
  { label: 'A', value: 'a' },
  { label: 'B', value: 'b' },
];

describe('Select Component', () => {
  it('renders all options', () => {
    render(<Select options={options} onChange={() => {}} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
  });

  it('displays placeholder when nothing is selected', () => {
    render(
      <Select
        options={options}
        onChange={() => {}}
        placeholder="Please select"
      />
    );
    expect(screen.getByText('Please select')).toBeInTheDocument();
  });

  it('fires onChange when option selected', () => {
    const onChangeMock = jest.fn();
    render(<Select options={options} onChange={onChangeMock} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'b' } });
    expect(onChangeMock).toHaveBeenCalledWith('b');
  });

  it('shows selected value when provided', () => {
    render(<Select options={options} selectedValue="b" onChange={() => {}} />);
    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('b');
  });

  it('applies required validation', () => {
    render(<Select options={options} onChange={() => {}} required />);
    const select = screen.getByRole('combobox');
    expect(select).toBeRequired();
  });
});
