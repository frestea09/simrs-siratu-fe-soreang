export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  options: Option[];
  selectedValue?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  className?: string;
  required?: boolean;
}
