import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import DatePicker from "@/components/atoms/datepicker/datepicker";
import { DatePickerProps } from "@/components/atoms/datepicker/datepicker.props";

const meta: Meta<typeof DatePicker> = {
  title: "Siratu/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label for the DatePicker input",
    },
    value: {
      control: "text",
      description: "Value of the DatePicker input",
    },
    onChange: {
      action: "changed",
      description: "Handler for value change",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    error: {
      control: "text",
      description: "Validation error message",
    },
    required: {
      control: "boolean",
      description: "If true, the field is required",
    },
    className: {
      control: "text",
      description: "Custom Tailwind CSS class",
    },
  },
  args: {
    label: "Tanggal Input",
    value: "",
    placeholder: "Pilih Tanggal...",
    onChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

const ControlledTemplate = (args: DatePickerProps) => {
  const [value, setValue] = useState("");
  return (
    <DatePicker
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Playground: Story = {
  render: (args) => <ControlledTemplate {...args} />,
};

export const WithError: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    error: "Tanggal harus diisi",
    required: true,
  },
};

export const Disabled: Story = {
  render: (args) => <ControlledTemplate {...args} />,
  args: {
    disabled: true,
    placeholder: "Tidak bisa diisi",
  },
};
