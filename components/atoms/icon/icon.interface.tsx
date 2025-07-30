export type IconSize = 'small' | 'medium' | 'large' | number;

export interface IconProps {
  name: string;
  size?: IconSize;
  color?: string;
  className?: string;
  strokeWidth?: number;
}
