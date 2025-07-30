import React from 'react';
import { LabelProps } from '@/components/atoms/label/label.interface';
import clsx from 'clsx';

const Label: React.FC<LabelProps> = ({
  text,
  size = 'medium',
  color = 'text-gray-800',
  align = 'left',
  className,
}) => {
  const sizeMap = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const alignmentMap = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const labelClass = clsx(
    'block w-full',
    sizeMap[size],
    alignmentMap[align],
    color,
    className
  );

  return <label className={labelClass}>{text}</label>;
};

export default Label;
