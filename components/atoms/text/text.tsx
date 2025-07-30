import React from 'react';
import { TextProps } from './text.interface';
import clsx from 'clsx';

const Text: React.FC<TextProps> = ({
  content,
  className,
  variant = 'paragraph',
  color = 'text-gray-800',
  size,
  align = 'left',
}) => {
  const baseStyle = clsx(
    color,
    size ||
      (variant === 'heading'
        ? 'text-2xl font-bold'
        : variant === 'subheading'
          ? 'text-xl font-semibold'
          : 'text-base'),
    `text-${align}`,
    className
  );

  const Tag =
    variant === 'heading' ? 'h1' : variant === 'subheading' ? 'h2' : 'p';

  return <Tag className={baseStyle}>{content}</Tag>;
};

export default Text;
