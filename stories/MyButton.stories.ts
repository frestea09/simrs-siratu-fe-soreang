// MyButton.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import MyButton from "@/components/atoms/mybutton/MyButton";

const meta: Meta<typeof MyButton> = {
  title: "Atoms/MyButton",
  component: MyButton,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof MyButton>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
    size: "medium",
  },
};

// export const WithIcon: Story = {
//   args: {
//     label: 'Download',
//     variant: 'primary',
//     size: 'medium',
//     icon: <span>📥</span>,
//   },
// };

export const Loading: Story = {
  args: {
    label: "Loading...",
    variant: "primary",
    loading: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: "Full Width Button",
    variant: "primary",
    fullWidth: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    variant: "danger",
    disabled: true,
  },
};
