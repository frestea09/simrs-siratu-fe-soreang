import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Label from '@/components/atoms/label/label';

const meta: Meta<typeof Label> = {
  title: 'SiRatu/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
    color: {
      control: { type: 'text' },
    },
    text: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Small: Story = {
  args: {
    text: 'Nama Lengkap',
    size: 'small',
    color: 'text-gray-700',
    align: 'left',
  },
};

export const Medium: Story = {
  args: {
    text: 'Email Address',
    size: 'medium',
    color: 'text-gray-900',
    align: 'center',
  },
};

export const Large: Story = {
  args: {
    text: 'Informasi Tambahan',
    size: 'large',
    color: 'text-blue-600',
    align: 'right',
  },
};

export const CustomClass: Story = {
  args: {
    text: 'Label dengan underline & bold',
    size: 'medium',
    className: 'underline font-bold',
    color: 'text-green-600',
  },
};
