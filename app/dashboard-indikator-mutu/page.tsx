"use client";
import { useState } from "react";
import Link from "next/link";
import { MyButton } from "@/components/atoms/button/button";

interface Indicator {
  id: number;
  name: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: string;
}

const initialData: Indicator[] = [
  {
    id: 1,
    name: "Waktu Tanggap Pelayanan Dokter di Gawat Darurat ≤ 5 menit",
    status: "pending",
    createdAt: "2024-01-01",
  },
];

export default function DashboardIndikatorMutu() {
  const [data, setData] = useState<Indicator[]>(initialData);

  const updateStatus = (id: number, status: "accepted" | "rejected") => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Dashboard Indikator Mutu</h1>
        <Link href="/dashboard-indikator-mutu/create">
          <MyButton label="Create Indikator Mutu" variant="primary" size="medium" />
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-200 border">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Tanggal Dibuat</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((indicator) => (
            <tr key={indicator.id} className="bg-white">
              <td className="px-4 py-2">{indicator.name}</td>
              <td className="px-4 py-2 capitalize">{indicator.status}</td>
              <td className="px-4 py-2">{indicator.createdAt}</td>
              <td className="px-4 py-2 space-x-2">
                <MyButton
                  label="Accepted"
                  size="small"
                  onClick={() => updateStatus(indicator.id, "accepted")}
                />
                <MyButton
                  label="Reject"
                  variant="outline"
                  size="small"
                  onClick={() => updateStatus(indicator.id, "rejected")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
