// app/page.tsx
'use client';

import React from 'react';
import { MyButton } from '@/components/atoms/button/button';
import { FiDownload } from 'react-icons/fi';

export default function HomePage() {
  const handleClick = () => {
    alert('Tombol diklik!');
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Contoh Tombol</h1>
      <MyButton
        label="Klik Saya"
        onClick={handleClick}
        variant="primary"
        size="large"
        fullWidth
        loading
      />
      <MyButton
        label="Klik Saya"
        onClick={handleClick}
        variant="primary"
        size="large"
        fullWidth
      />
      <MyButton
        label="Unduh"
        icon={<FiDownload />}
        variant="primary"
        size="medium"
        onClick={() => alert('Diunduh')}
        disabled
      />
    </main>
  );
}
