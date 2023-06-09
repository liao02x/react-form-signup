import { useRegisterField, useFormContext } from "./context";

type TextFieldProps = {
  name: string;
  type?: string;
  placeholder?: string;
  pattern?: string;
  required?: boolean;
  disabled?: boolean;
};

export default function TextField({
  name,
  type,
  placeholder,
  pattern,
  required,
  disabled,
}: TextFieldProps) {
  const { values, setFieldValue } = useFormContext();
  const value = values[name];

  useRegisterField(name);
  if (value === undefined) return null;

  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      pattern={pattern}
      required={required}
      disabled={disabled}
      value={value}
      onChange={(e) => setFieldValue(name, e.target.value)}
    />
  );
}
