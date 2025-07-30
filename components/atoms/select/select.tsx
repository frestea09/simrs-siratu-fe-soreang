import React from 'react';
import { SelectProps } from '@/components/atoms/select/select.interface';
import clsx from 'clsx';

const Select: React.FC<SelectProps> = ({
  options,
  selectedValue,
  placeholder = 'Pilih salah satu...',
  onChange,
  className,
  required = false,
}) => {
  return (
    <select
      value={selectedValue || ''}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className={clsx(
        'w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500',
        className
      )}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
