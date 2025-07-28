import { SiRatuBreadcrumb } from "@/components/organisms/SiRatuBreadcrumb/SiRatuBreadcrumb";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SiRatuBreadcrumb> = {
  title: "Organisms/Breadcrumb", // Pastikan title sesuai dengan kategori komponen
  component: SiRatuBreadcrumb,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SiRatuBreadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Settings" }, // Tanpa link, hanya text biasa
    ],
  },
};

export const WithCustomItems: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Components", href: "/components" },
      { label: "Breadcrumb" },
    ],
  },
};

export const EmptyBreadcrumb: Story = {
  args: {
    items: [],
  },
};
