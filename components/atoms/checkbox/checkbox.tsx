import React from 'react';
import { CheckboxProps } from '@/components/atoms/checkbox/checkbox.interface';
import clsx from 'clsx';

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  name,
  value,
  className,
}) => {
  return (
    <label
      className={clsx(
        'flex items-center space-x-2 text-sm cursor-pointer',
        disabled && 'opacity-60 cursor-not-allowed',
        className
      )}
    >
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="form-checkbox text-blue-600 h-4 w-4"
        aria-label={label}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
