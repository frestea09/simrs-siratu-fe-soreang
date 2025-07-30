export type LabelSize = 'small' | 'medium' | 'large';

export interface LabelProps {
  text: string;
  size?: LabelSize;
  color?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}
