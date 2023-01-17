import { Field, FieldArray } from "formik";
// import TextError from "./TextError";

const InputArray = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{label}</label>
      <FieldArray name={name}>
        {(fieldArrayProps) => {
          const { push, remove, form } = fieldArrayProps;
          const { values } = form;
          const { phNumbers } = values;
          // console.log('fieldArrayProps', fieldArrayProps)
          // console.log('Form errors', form.errors)
          return (
            <div>
              {phNumbers.map((phNumber, index) => (
                <div key={index}>
                  <Field name={`phNumbers[${index}]`} />
                  {index > 0 && (
                    <button type="button" onClick={() => remove(index)}>
                      -
                    </button>
                  )}
                </div>
              ))}
              <button type="button" onClick={() => push("")}>
                +
              </button>
            </div>
          );
        }}
      </FieldArray>
    </div>
  );
};

export default InputArray;
