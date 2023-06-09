import {
  createContext,
  useContext,
  useEffect,
} from "react";

export type Values = {
  [key: string]: string;
};

const FormContext = createContext({
  values: {} as Values,
  appendField: (name: string) => {
    return;
  },
  removeField: (name: string) => {
    return;
  },
  setFieldValue: (name: string, value: string) => {
    return;
  },
  _isInForm: false,
});

export const useFormContext = () => {
  const formContext = useContext(FormContext);
  if (!formContext._isInForm) {
    throw new Error("useFormContext must be wrapped in a Form component");
  }
  return formContext;
};

export const useRegisterField = (name: string) => {
  const { appendField, removeField } = useFormContext();
  useEffect(() => {
    if (name) {
      appendField(name);
    }
    return () => {
      if (name) {
        removeField(name);
      }
    };
  }, [appendField, removeField, name]);
};

export default FormContext;
