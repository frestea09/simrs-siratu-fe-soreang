"use client";
import FormIndicatorMutu from "@/components/organisms/FormIndicatorMutu/FormIndicatorMutu";
import { SiRatuBreadcrumb } from "@/components/organisms/SiRatuBreadcrumb/SiRatuBreadcrumb";

export default function InputIndikatorPage() {
  const items = [
    { label: "Home", href: "/" },
    { label: "Input Indikator Mutu" },
  ];

  return (
    <div className="p-6 space-y-4">
      <SiRatuBreadcrumb items={items} />
      <FormIndicatorMutu />
    </div>
  );
}
