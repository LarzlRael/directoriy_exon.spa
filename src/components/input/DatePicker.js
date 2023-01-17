import DateView, { registerLocale } from "react-datepicker";
import { Field, ErrorMessage } from "formik";
import es from "date-fns/locale/es";
import TextError from "./TextError";
import "react-datepicker/dist/react-datepicker.css";
import "./style/DatePicker.css";
registerLocale("es", es);
function DatePicker(props) {
  
  const { label, name, selected, ...rest } = props;
  return (
    <div className="form-control DatePicker">
      <label htmlFor={name}>{label}</label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              locale="es"
              id={name}
              {...field}
              {...rest}
              selected={value ? value : selected}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default DatePicker;
