import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MyButton } from '@/components/atoms/button/button';
import { FiDownload } from 'react-icons/fi';

const meta: Meta<typeof MyButton> = {
  title: 'SiRatu/Button',
  component: MyButton,
  tags: ['autodocs'],
  args: {
    label: 'Tombol',
    variant: 'primary',
    size: 'medium',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    icon: { control: false },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof MyButton>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline Button',
    variant: 'outline',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};

// export const WithIcon: Story = {
//   args: {
//     label: 'With Icon',
//     icon: <FiDownload />,
//   },
// };

export const Loading: Story = {
  args: {
    label: 'Loading...',
    loading: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width',
    fullWidth: true,
  },
};

export const CustomColor: Story = {
  args: {
    label: 'Custom Pink',
    color: '#EC4899',
  },
};

export const CustomColorDisabled: Story = {
  args: {
    label: 'Disabled Custom Color',
    color: '#DC2626',
    disabled: true,
  },
};
export const IconPrimary: Story = {
  args: {
    label: 'Download',
    variant: 'primary',
    icon: <FiDownload />,
  },
};
