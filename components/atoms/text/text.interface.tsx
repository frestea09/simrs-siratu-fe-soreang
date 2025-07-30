export type TextVariant = 'heading' | 'subheading' | 'paragraph';

export interface TextProps {
  content: string;
  className?: string;
  variant?: TextVariant;
  color?: string;
  size?: string;
  align?: 'left' | 'center' | 'right';
}
