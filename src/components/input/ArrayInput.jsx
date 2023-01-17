import { FieldArray } from "formik";
import { DefaultBtn } from "../buttons";
import { H4 } from "../text";
import { validateArray } from "../../utils/Validation";
const ArrayInput = (props) => {
  const {
    label,
    name,
    options,
    children,
    initialize,
    renderChildren,
    customButton,
    ...rest
  } = props;
  return (
    <div className="form-control">
      <H4 fontWeight="600">{label}</H4>
      <FieldArray
        name={name}
        render={(arrayHelpers) => {
          const fieldList = arrayHelpers.form.values[name];
          return (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                {validateArray(fieldList)
                  ? fieldList.map((_, index) => (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                        key={index}
                      >
                        {renderChildren({
                          ...rest,
                          name: name,
                          setValues: arrayHelpers.form.setValues,
                          values: arrayHelpers.form.values[name],
                          id: index,
                        })}
                        {/* <Select
                        label="Programa:"
                        name={`ProgramIds[${index}]`}
                        options={dropdownGenerate(requestPrograms, "Programas")}
                      /> */}
                        <button
                          className="FormRelease__delete"
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    ))
                  : null}
              </div>
              {!customButton && (
                <DefaultBtn
                  type="button"
                  onClick={() => arrayHelpers.push(initialize)}
                >
                  Adicionar programa
                </DefaultBtn>
              )}
            </>
          );
        }}
      />
    </div>
  );
};

export default ArrayInput;
