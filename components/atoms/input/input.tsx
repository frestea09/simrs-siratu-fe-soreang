import { InputProps } from '@/components/atoms/input/input.interface';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export const MyInput: React.FC<InputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled,
  required,
  className,
}) => {
  const inputId = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full">
      <Label
        htmlFor={inputId}
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={cn(
          'w-full border border-gray-300 focus:border-primary focus:ring-1 focus:ring-primary rounded-md px-3 py-2 text-sm transition-colors',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
