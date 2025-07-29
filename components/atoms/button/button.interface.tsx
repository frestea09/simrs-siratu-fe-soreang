import React from 'react';

export interface MyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'disabled';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode | string;
  loading?: boolean;
  fullWidth?: boolean;
  'aria-label'?: string;
  color?: string; // custom background color
  className?: string;
}
