// components/organisms/Breadcrumb.tsx
import Link from "next/link";
import { SlashIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; // Pastikan path sesuai
import { BreadcrumbProps } from "./SiRatuBreadcrumb.interface";

export const SiRatuBreadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink asChild>
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbLink>
            {index < items.length - 1 && (
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
