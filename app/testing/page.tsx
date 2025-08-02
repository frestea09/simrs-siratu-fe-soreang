"use client";
import React from "react";
import DatePicker from "@/components/atoms/datepicker/datepicker";
import { MyInput } from "@/components/atoms/input/input";
import Button from "@/components/atoms/mybutton/MyButton";
import Select from "@/components/atoms/select/select";
import { useForm, Controller } from "react-hook-form";

const MyForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      jenisIndikator: "All",
      date: "",
      standarCapaian: 0,
      numerator: 0,
      denominator: 0,
      hasilCapaian: 0,
    },
  });

  const numerator = watch("numerator");
  const denominator = watch("denominator");

  React.useEffect(() => {
    if (denominator && Number(denominator) !== 0) {
      const hasil = (Number(numerator) / Number(denominator)) * 100;
      setValue(
        "hasilCapaian",
        Number.isFinite(hasil) ? parseFloat(hasil.toFixed(2)) : 0,
      );
    } else {
      setValue("hasilCapaian", 0);
    }
  }, [numerator, denominator, setValue]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  // Options for Select dropdown
  const jenisIndikatorOptions = [
    { label: "All", value: "All" },
    { label: "Perhari", value: "Perhari" },
    { label: "Perbulan", value: "Perbulan" },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-6 p-6"
    >
      <div className="space-y-4">
        <Controller
          name="name"
          control={control}
          rules={{ required: "Nama Indikator is required" }} // Menambahkan validasi required
          render={({ field }) => (
            <MyInput
              label="Nama Indikator"
              {...field}
              placeholder="Masukkan Nama Indikator"
              error={errors.name?.message}
            />
          )}
        />
        <div>
          <label className="text-sm font-medium text-gray-700">
            Jenis Indikator
          </label>
          <Controller
            name="jenisIndikator"
            control={control}
            rules={{ required: "Jenis Indikator is required" }} // Menambahkan validasi required
            render={({ field }) => (
              <Select
                options={jenisIndikatorOptions}
                selectedValue={field.value}
                onChange={(value) => setValue("jenisIndikator", value)}
                className="border border-gray-300 p-2 rounded"
              />
            )}
          />
        </div>
        <Controller
          name="date"
          control={control}
          rules={{ required: "Tanggal Input is required" }} // Menambahkan validasi required
          render={({ field }) => (
            <DatePicker
              label="Tanggal Input"
              {...field}
              error={errors.date?.message}
            />
          )}
        />
      </div>

      <div className="space-y-4">
        <Controller
          name="standarCapaian"
          control={control}
          rules={{ required: "Standar Capaian Indikator is required" }} // Menambahkan validasi required
          render={({ field }) => (
            <MyInput
              label="Standar Capaian Indikator"
              {...field}
              placeholder="Masukkan Standar Capaian Indikator"
              value={`${field.value}`}
              error={errors.standarCapaian?.message}
            />
          )}
        />
        <Controller
          name="numerator"
          control={control}
          rules={{ required: "Numerator is required" }}
          render={({ field }) => (
            <MyInput
              label="Numerator"
              {...field}
              placeholder="Masukkan Numerator"
              type="number"
              value={`${field.value}`}
              error={errors.numerator?.message}
            />
          )}
        />
        <Controller
          name="denominator"
          control={control}
          rules={{ required: "Denominator is required" }}
          render={({ field }) => (
            <MyInput
              label="Denominator"
              {...field}
              placeholder="Masukkan Denominator"
              type="number"
              value={`${field.value}`}
              error={errors.denominator?.message}
            />
          )}
        />
        <Controller
          name="hasilCapaian"
          control={control}
          render={({ field }) => (
            <MyInput
              label="Hasil Capaian"
              {...field}
              type="number"
              placeholder="0"
              value={`${field.value}`}
              disabled
            />
          )}
        />
      </div>
      <div className="col-span-2">
        <Button
          label="Create Indikator Mutu"
          type="submit"
          size="medium"
          fullWidth
          className="bg-[#5E936C] hover:bg-[#93DA97] flex flex-row gap-2 align-middle justify-center"
        />
      </div>
    </form>
  );
};

export default MyForm;
