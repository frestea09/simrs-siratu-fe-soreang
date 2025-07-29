import React from 'react';
import { cn } from '@/lib/utils';
import { MyButtonProps } from '@/components/atoms/button/button.interface';
import Image from 'next/image';

export const MyButton: React.FC<MyButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  variant = 'primary',
  size = 'medium',
  icon,
  loading = false,
  fullWidth = false,
  'aria-label': ariaLabel,
  color,
  className,
  ...props
}) => {
  const isTrulyDisabled = disabled || loading || variant === 'disabled';

  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none',
    {
      'bg-[#5E936C] text-white hover:bg-[#93DA97] active:bg-[#3E5F44]':
        variant === 'primary' && !isTrulyDisabled,
      'bg-gray-200 text-black hover:bg-gray-300':
        variant === 'secondary' && !isTrulyDisabled,
      'border border-gray-400 text-gray-800 bg-transparent hover:bg-gray-50':
        variant === 'outline' && !isTrulyDisabled,

      'bg-[#D9D9D9] text-[#8F8F8F] border border-[#6E6E6E] cursor-not-allowed':
        isTrulyDisabled,

      'h-8 px-3 text-sm': size === 'small',
      'h-9 px-4 text-base': size === 'medium',
      'h-11 px-6 text-lg': size === 'large',

      'w-full': fullWidth,
      'opacity-60 pointer-events-none': loading,
    },
    className
  );

  const dynamicStyles: React.CSSProperties = {
    backgroundColor:
      color && !isTrulyDisabled && variant !== 'outline' ? color : undefined,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isTrulyDisabled}
      aria-label={ariaLabel || label}
      className={baseClasses}
      style={dynamicStyles}
      {...props}
    >
      {loading ? (
        <span
          className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-t-transparent border-white"
          aria-hidden="true"
        />
      ) : (
        icon &&
        (typeof icon === 'string' ? (
          <Image src={icon} alt="" width={16} height={16} className="w-4 h-4" />
        ) : (
          <span className="mr-2">{icon}</span>
        ))
      )}
      {label}
    </button>
  );
};
