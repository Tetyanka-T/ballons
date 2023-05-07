import { Select } from "@mui/material";
import { useField, useFormikContext } from "formik";

const SelectForm = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };
  const configSelect = {
    ...field,
    ...otherProps,
    // select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <>
      <Select
        {...configSelect}
        // name={name}
        // value={value}
        // onChange={(e) => {
        //   setFieldValue(name, e.target.value);
        // }}
      >
        {children}
      </Select>
      {/* <TextField {...configSelect}>
        {options.map((option) => {
          return (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          );
        })}
      </TextField> */}
    </>
  );
};

export default SelectForm;
