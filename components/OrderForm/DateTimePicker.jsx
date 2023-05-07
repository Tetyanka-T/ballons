import { MenuItem, TextField } from "@mui/material";
import { useField } from "formik";

const DateTimePicker = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);
  const configDatePicker = {
    ...field,
    ...otherProps,
    type: "date",
    variant: "outlined",
  };
  if (meta && meta.touched && meta.error) {
    configDatePicker.error = true;
    configDatePicker.helperText = meta.error;
  }
  return <TextField {...configDatePicker} sx={{ mb: 3 }}></TextField>;
};

export default DateTimePicker;
