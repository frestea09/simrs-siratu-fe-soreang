import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Icon from '@/components/atoms/icon/icon';

const meta: Meta<typeof Icon> = {
  title: 'SiRatu/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    color: { control: 'text' },
    strokeWidth: { control: 'number' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const SuccessIcon: Story = {
  args: {
    name: 'CheckCircle',
    size: 'medium',
    color: 'text-green-500',
  },
};

export const ErrorIcon: Story = {
  args: {
    name: 'XCircle',
    size: 'medium',
    color: 'text-red-500',
  },
};

export const WarningIcon: Story = {
  args: {
    name: 'AlertTriangle',
    size: 'medium',
    color: 'text-yellow-500',
  },
};

export const LargeCustomStroke: Story = {
  args: {
    name: 'Bell',
    size: 'large',
    color: 'text-blue-600',
    strokeWidth: 1,
  },
};
