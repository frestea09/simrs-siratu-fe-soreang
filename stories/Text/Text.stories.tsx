import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Text from '@/components/atoms/text/text';

const meta: Meta<typeof Text> = {
  title: 'SiRatu/Text',
  component: Text,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Heading: Story = {
  args: {
    content: 'Ini adalah Heading',
    variant: 'heading',
  },
};

export const Subheading: Story = {
  args: {
    content: 'Ini Subheading',
    variant: 'subheading',
  },
};

export const Paragraph: Story = {
  args: {
    content: 'Ini paragraf biasa untuk konten umum.',
    variant: 'paragraph',
  },
};

export const CustomStyle: Story = {
  args: {
    content: 'Teks dengan warna merah dan center align',
    color: 'text-red-500',
    align: 'center',
    size: 'text-lg',
  },
};

export const Deskripsi: Story = {
  args: {
    content: 'Gunakan nama lengkap sesuai KTP.',
    variant: 'paragraph',
    size: 'text-sm',
    color: 'text-gray-500',
    align: 'left',
    className: 'italic',
  },
};
