import { useRegisterField, useFormContext } from "./context";

export type SelectFieldProps = {
  name: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  required?: boolean;
  disabled?: boolean;
  loading?: boolean;
};
export default function SelectField({
  name,
  placeholder = "-- select an option --",
  required,
  options,
  disabled,
  loading,
}: SelectFieldProps) {
  const { values, setFieldValue } = useFormContext();
  const value = values[name];

  useRegisterField(name);
  if (value === undefined) return null;

  return (
    <select
      name={name}
      placeholder={placeholder}
      required={required}
      value={value}
      disabled={disabled}
      onChange={(e) => setFieldValue(name, e.target.value)}
    >
      <option hidden disabled value="">
        {loading ? "loading..." : placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value} title={option.label}>
          {option.label.length > 20 ? option.label.slice(0, 20) + "..." : option.label}
        </option>
      ))}
    </select>
  );
}
