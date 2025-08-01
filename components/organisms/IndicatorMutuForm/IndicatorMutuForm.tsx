'use client'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'

export interface IndicatorMutuFormValues {
  nama: string
  deskripsi: string
  target: number
  verifikator: string
}

export default function IndicatorMutuForm() {
  const { register, handleSubmit, reset } = useForm<IndicatorMutuFormValues>()

  const onSubmit = (data: IndicatorMutuFormValues) => {
    console.log('Indikator Mutu:', data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium" htmlFor="nama">
          Nama Indikator
        </label>
        <input
          id="nama"
          {...register('nama', { required: true })}
          className="border p-2 mt-1 w-full rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="deskripsi">
          Deskripsi
        </label>
        <textarea
          id="deskripsi"
          {...register('deskripsi')}
          className="border p-2 mt-1 w-full rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="target">
          Target
        </label>
        <input
          id="target"
          type="number"
          {...register('target', { required: true, valueAsNumber: true })}
          className="border p-2 mt-1 w-full rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium" htmlFor="verifikator">
          Verifikator
        </label>
        <select
          id="verifikator"
          {...register('verifikator')}
          className="border p-2 mt-1 w-full rounded-md"
        >
          <option value="Komite">Komite</option>
          <option value="Verifikator">Verifikator</option>
        </select>
      </div>
      <Button type="submit">Simpan</Button>
    </form>
  )
}
