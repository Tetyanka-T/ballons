import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useField, useFormikContext } from "formik";

const CheckboxWrapper = ({ name, lable, legend, ...otherProps }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const handleChange = (e) => {
    const { checked } = e.target;
    setFieldValue(name, checked);
  };
  const configCheckBox = {
    ...field,
    onChange: handleChange,
  };
  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configCheckBox.error = true;
    configCheckBox.helperText = meta.error;
  }
  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckBox} />}
          label={lable}
        />
      </FormGroup>
    </FormControl>
  );
};

export default CheckboxWrapper;
