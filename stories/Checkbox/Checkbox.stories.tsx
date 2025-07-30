import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Checkbox from '@/components/atoms/checkbox/checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'SiRatu/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    name: { control: 'text' },
    value: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Saya setuju',
    checked: false,
    onChange: (v) => alert(`checked: ${v}`),
  },
};

export const Checked: Story = {
  args: {
    label: 'Sudah dipilih',
    checked: true,
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: 'Tidak bisa diubah',
    checked: true,
    disabled: true,
    onChange: () => {},
  },
};

export const WithName: Story = {
  args: {
    label: 'Setuju dengan syarat',
    name: 'terms',
    value: 'accepted',
    checked: false,
    onChange: (checked) => {
      alert(`Name: terms\nValue: accepted\nChecked: ${checked}`);
    },
  },
};
