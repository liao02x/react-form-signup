import TextField from "./TextField";
import SelectField from "./SelectField";
import FetchSelectField from "./FetchSelectField";
import "./index.css";

type FieldComponent =
  | typeof TextField
  | typeof SelectField
  | typeof FetchSelectField;
type FieldProps = {
  label: string;
} & any;
const withLabel = (Component: FieldComponent) => (props: FieldProps) => {
  const { label, ...rest } = props;
  return (
    <div>
      <label className="form-field__label">
        <div>{label}</div>
        <Component {...rest} />
      </label>
    </div>
  );
};

const TextFieldWithLabel = withLabel(TextField);
const SelectFieldWithLabel = withLabel(SelectField);
const FetchSelectFieldWithLabel = withLabel(FetchSelectField);

export {
  TextFieldWithLabel as TextField,
  SelectFieldWithLabel as SelectField,
  FetchSelectFieldWithLabel as FetchSelectField,
};

export { useFormContext } from "./context";

export { default as Form } from "./Form";
