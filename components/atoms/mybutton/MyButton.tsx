// Button.tsx
import React from 'react';
import { ButtonProps } from './MyButton.props';

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'medium',
  icon,
  loading = false,
  fullWidth = false,
  ariaLabel,
}) => {
  const classNames = `
  px-4 py-2 rounded 
  ${variant === 'primary' ? 'bg-blue-600 text-white' : ''}
  ${variant === 'secondary' ? 'bg-gray-300 text-black' : ''}
  ${variant === 'danger' ? 'bg-red-500 text-white' : ''}
  ${fullWidth ? 'w-full' : ''}
  ${size === 'small' ? 'text-sm' : size === 'large' ? 'text-lg' : 'text-base'}
  ${loading ? 'opacity-60 cursor-not-allowed' : ''}
`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classNames}
      aria-label={ariaLabel}
    >
      {loading ? (
        <span>Loading...</span>
      ) : (
        icon && <span className="icon">{icon}</span>
      )}
      {label}
    </button>
  );
};

export default Button;
