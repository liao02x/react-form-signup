import { useState, useEffect } from "react";
import SelectField, { type SelectFieldProps } from "./SelectField";

type FetchSelectFieldProps = {
  getData: () => Promise<SelectFieldProps["options"]>;
} & SelectFieldProps;

export default function FetchSelectField({
  getData,
  disabled,
  ...props
}: FetchSelectFieldProps) {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState<SelectFieldProps["options"]>([]);

  useEffect(() => {
    setLoading(true);
    getData()
      .then((options) => {
        setOptions(options);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [getData]);

  return (
    <SelectField
      disabled={disabled || loading}
      {...props}
      options={options}
      loading={loading}
    />
  );
}
