import React from 'react';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { IconProps } from '@/components/atoms/icon/icon.interface';
import clsx from 'clsx';

const sizeMap = {
  small: 16,
  medium: 24,
  large: 32,
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 'medium',
  color = 'text-black',
  className,
  strokeWidth = 2,
}) => {
  const IconComponent = Icons[name as keyof typeof Icons] as LucideIcon;

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in Lucide icon set.`);
    return null;
  }

  const finalSize = typeof size === 'number' ? size : sizeMap[size];

  return (
    <IconComponent
      size={finalSize}
      strokeWidth={strokeWidth}
      className={clsx(color, className)}
    />
  );
};

export default Icon;
