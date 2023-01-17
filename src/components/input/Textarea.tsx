import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import "./style/Textarea.css";

function Textarea(props:any) {
  const { label, name, ...rest } = props;
  return (
    <div className="Textarea">
      <label htmlFor={name}>{label}</label>
      <br />
      <Field as="textarea" id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
      <br />
      <br />
    </div>
  );
}

export default Textarea;
