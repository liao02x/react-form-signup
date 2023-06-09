import {
  useState,
  useCallback,
  type ReactNode,
} from "react";
import FormContext, { type Values } from "./context";

type FormProps = {
  children: ReactNode;
  className?: string;
  onSubmit: (values: Values, event: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({ children, className, onSubmit, ...props }: FormProps) {
  const [values, setValues] = useState<Values>({});

  const setFieldValue = useCallback(
    (name: string, value: string) => {
      setValues((values) => ({ ...values, [name]: value }));
    },
    [setValues]
  );

  const appendField = useCallback(
    (name: string) => {
      setValues((values) => ({ ...values, [name]: "" }));
    },
    [setValues]
  );

  const removeField = useCallback(
    (name: string) => {
      setValues((values) => {
        const { [name]: _, ...rest } = values;
        return rest;
      });
    },
    [setValues]
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(values, event);
    },
    [onSubmit, values]
  );

  const _className = className ? `form ${className}` : "form";

  return (
    <form className={_className} onSubmit={handleSubmit} {...props}>
      <FormContext.Provider
        value={{
          values,
          appendField,
          removeField,
          setFieldValue,
          _isInForm: true,
        }}
      >
        {children}
      </FormContext.Provider>
    </form>
  );
}
