import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { DatePickerProps } from "./datepicker.props";

const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      label,
      value,
      onChange,
      placeholder = "Pilih Tanggal...",
      error,
      required,
      className,
    },
    ref
  ) => {
    const inputId = label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 py-2"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <Input
          id={inputId}
          type="date"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          ref={ref}
          className={cn(
            "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

DatePicker.displayName = "DatePicker";

export default DatePicker;
