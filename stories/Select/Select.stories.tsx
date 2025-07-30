import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Select from '@/components/atoms/select/select';

const meta: Meta<typeof Select> = {
  title: 'SiRatu/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    selectedValue: { control: 'text' },
    placeholder: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ],
    placeholder: 'Silakan pilih...',
    onChange: (val) => alert(`Dipilih: ${val}`),
  },
};

export const WithSelectedValue: Story = {
  args: {
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ],
    selectedValue: 'female',
    placeholder: 'Select gender',
    onChange: (val) => console.log('Selected:', val),
  },
};

export const RequiredSelect: Story = {
  args: {
    options: [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ],
    placeholder: 'Status pengguna',
    onChange: () => {},
  },
};
