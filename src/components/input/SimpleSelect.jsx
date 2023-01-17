import { validateArray } from "../../utils/Validation";
import TextError from "./TextError";

const SimpleSelect = (props) => {
  const { label, name, options, onChange, err, ...rest } = props;
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <select onChange={onChange} name={name} id={name} {...rest}>
        {validateArray(options)
          ? options.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.key}
                </option>
              );
            })
          : null}
      </select>
      <TextError>{err}</TextError>
    </div>
  );
};

export default SimpleSelect;
