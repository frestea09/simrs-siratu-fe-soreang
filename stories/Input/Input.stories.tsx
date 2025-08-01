import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { MyInput } from "@/components/atoms/input/input";
import { InputProps } from "@/components/atoms/input/input.interface";

const meta: Meta<typeof MyInput> = {
  title: "Siratu/Input",
  component: MyInput,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "radio",
      },
      options: ["text", "email", "password", "number", "date"],
      description: "Jenis input yang digunakan",
      defaultValue: "text",
    },
    error: {
      control: "text",
      description: "Pesan error validasi",
    },
    disabled: {
      control: "boolean",
      description: "Nonaktifkan input",
    },
    required: {
      control: "boolean",
      description: "Apakah field wajib diisi",
    },
    placeholder: {
      control: "text",
      description: "Text petunjuk di dalam input",
    },
    label: {
      control: "text",
      description: "Label untuk input",
    },
    className: {
      control: "text",
      description: "Tailwind tambahan",
    },
  },
  args: {
    label: "Nama Lengkap",
    type: "text",
    placeholder: "Masukkan nama lengkap",
    value: "",
    onChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof MyInput>;

const ControlledTemplate = (args: InputProps) => {
  const [value, setValue] = useState("");
  return (
    <MyInput
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
    error: "Field ini wajib diisi",
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
