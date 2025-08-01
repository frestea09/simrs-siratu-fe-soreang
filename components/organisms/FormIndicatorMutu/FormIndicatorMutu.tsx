"use client";
import { useForm, Controller } from "react-hook-form";
import { MyInput } from "@/components/atoms/input/input";
import Select from "@/components/atoms/select/select";
import DatePicker from "@/components/atoms/datepicker/datepicker";
import Button from "@/components/atoms/mybutton/MyButton";

// Options for Select dropdown
const jenisIndikatorOptions = [
  { label: "All", value: "All" },
  { label: "Perhari", value: "Perhari" },
  { label: "Perbulan", value: "Perbulan" },
];

const FormIndicatorMutu = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      name: "",
      jenisIndikator: "All",
      date: "",
      standarCapaian: 0,
      denumerator: 0,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data); // Process form submission
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 gap-6 p-6"
    >
      <div className="space-y-4">
        <Controller
          name="name"
          control={control}
          rules={{ required: "Nama Indikator is required" }}
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
            rules={{ required: "Jenis Indikator is required" }}
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
          rules={{ required: "Tanggal Input is required" }}
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
          rules={{ required: "Standar Capaian Indikator is required" }}
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
          name="denumerator"
          control={control}
          rules={{ required: "Denumerator is required" }}
          render={({ field }) => (
            <MyInput
              label="Denumerator"
              {...field}
              placeholder="Masukkan Denumerator"
              type="number"
              value={`${field.value}`}
              error={errors.denumerator?.message}
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

export default FormIndicatorMutu;
