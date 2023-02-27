import { useState } from "react";
import { useFormik } from "formik";
import { Inter } from "@next/font/google";
import * as yup from "yup";
import "yup-phone";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import FormControl from "@mui/material/FormControl";
import { createTheme } from "@mui/material/styles";
import {
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import streets from "./streets.json";
import s from "./OrderForm.module.scss";
import { ThemeProvider } from "@emotion/react";

const validationSchema = yup.object().shape({
  name: yup.string().required("Введіть своє ім'я"),
  // number: yup.string().phone().required("Введіть свій номер телефону"),
  email: yup.string().required("Введіть свій email").email(),
  time: yup.string().required("Оберіть бажаний час"),
  payment: yup.string().required("Оберіть спосіб оплати"),
  delivery: yup.string().required("Оберіть спосіб доставки"),
  street: yup.string().required(),
  hause: yup.string().required(),
  apartment: yup.number().required(),
  comment: yup.string(),
});
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFA500",
    },
    typography: {
      fontFamily: ["Inter"],
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.2,
    },
  },
});
const OrderForm = () => {
  const [time, SetTime] = useState("");
  const [payment, SetPayment] = useState("");
  const [delivery, SetDelivery] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  const day = startDate.getDate();

  const month = startDate.getMonth() + 1;
  const year = startDate.getFullYear();
  const formatDate = `${day}.${month}.${year}`;
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.name,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      email: "",
      data: "",
      time: "",
      payment: "",
      delivery: "",
      street: "",
      hause: "",
      apartment: "",
      comment: "",
      checked: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const selectTime = (e) => {
    SetTime(e.target.value);
  };
  const selectPayment = (e) => {
    SetPayment(e.target.value);
  };
  const selectDelivery = (e) => {
    SetDelivery(e.target.value);
  };
  // const selectStreet = (e) => {
  //   SetStreet(e.target.value);
  // };

  return (
    <form onSubmit={formik.handleSubmit} className={s.orderForm}>
      <ThemeProvider theme={theme}>
        <TextField
          id="name"
          name="name"
          label="Ім'я"
          value={formik.values.name}
          className={s.textField}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        />
        <TextField
          id="number"
          name="number"
          label="Номер телефону"
          type="number"
          placeholder="+380"
          value={formik.values.number}
          className={s.textField}
          onChange={formik.handleChange}
          patern="((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))"
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          className={s.textField}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <div className={s.calendarColor}>
          <p className={s.orderForm_select_date}>Виберіть дату свята:</p>
          <DatePicker
            dateFormat="dd.MM.yyyy"
            minDate={new Date()}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            name="date"
            disabledKeyboardNavigation
            // value={formatDate}
            className={s.date}
            placeholderText="Виберіть дату свята:"

            // maxDate={new Date()}
          />
        </div>

        <FormControl>
          <InputLabel id="payment">Спосіб оплати</InputLabel>
          <Select
            labelId="payment"
            id="payment"
            value={payment}
            label="Спосіб оплати"
            onChange={selectPayment}
            className={s.orderForm_select}
            sx={{
              ".MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                {
                  padding: "16px 0px 16px 10px",
                },
              ".MuiSvgIcon-root ": {
                fill: "#FFA500 !important",
              },
            }}
            // error={formik.touched.payment && Boolean(formik.errors.payment)}
          >
            <MenuItem value="100%">100% на карту МоноБанку</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="delivery" className={s.InputLabel}>
            Спосіб доставки
          </InputLabel>
          <Select
            labelId="delivery"
            id="delivery"
            value={delivery}
            label="Спосіб доставки"
            onChange={selectDelivery}
            className={s.orderForm_select}
            sx={{
              ".MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                {
                  padding: "16px 0px 16px 10px",
                },
              ".MuiSvgIcon-root ": {
                fill: "#FFA500 !important",
              },
            }}
            // error={formik.touched.delivery && Boolean(formik.errors.delivery)}
          >
            <MenuItem value="Самовивіз з магазину">
              <span>
                Самовивіз з магазину
                <br />
                <span className={s.orderForm_select_delivery}>
                  м.Кривий Ріг, просп. Металургів, б.20
                </span>
              </span>
            </MenuItem>
            <MenuItem value="Достака на хату">Достака кур&apos;єром</MenuItem>
          </Select>
        </FormControl>
        {delivery === "Самовивіз з магазину" && (
          <FormControl>
            <InputLabel id="time">
              Виберіть час, коли бажаєте забрати композицію
            </InputLabel>
            <Select
              labelId="time"
              id="time"
              value={time}
              label="Виберіть час, коли бажаєте забрати композицію"
              onChange={selectTime}
              className={s.orderForm_select}
              // error={formik.touched.time && Boolean(formik.errors.time)}
              sx={{
                ".MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                  {
                    padding: "16px 0px 16px 10px",
                  },
                ".MuiSvgIcon-root ": {
                  fill: "#FFA500 !important",
                },
              }}
            >
              <MenuItem value="9-10">9.00-10.00</MenuItem>
              <MenuItem value="10-11">10.00-11.00</MenuItem>
              <MenuItem value="11-12">11.00-12.00</MenuItem>
              <MenuItem value="12-13">12.00-13.00</MenuItem>
              <MenuItem value="13-14">13.00-14.00</MenuItem>
              <MenuItem value="14-15">14.00-15.00</MenuItem>
              <MenuItem value="15-16">15.00-16.00</MenuItem>
              <MenuItem value="16-17">16.00-17.00</MenuItem>
            </Select>
          </FormControl>
        )}
        {delivery === "Достака на хату" && (
          <>
            <Autocomplete
              disablePortal
              id="street"
              options={streets}
              getOptionLabel={(option) => option.name}
              filterOptions={filterOptions}
              className={s.orderForm_select}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Виберіть адресу"
                  sx={{
                    ".MuiSvgIcon-root ": {
                      fill: "#FFA500 !important",
                    },
                  }}
                />
              )}
            />
            <ul className={s.orderForm_delivery_price_list}>
              Орієнтовна ціна доставки
              <li className={s.orderForm_delivery_price_item}>
                Металургійний район: 70-150 грн
              </li>
              <li className={s.orderForm_delivery_price_item}>
                Саксаганський район: 150-300 грн
              </li>
              <li className={s.orderForm_delivery_price_item}>
                Довгинцівський район: 100-250 грн
              </li>
              <li className={s.orderForm_delivery_price_item}>
                Інгулецький район: 200-1000 грн
              </li>
              <li className={s.orderForm_delivery_price_item}>
                Центрально-Міський район: 150-300 грн
              </li>
              <li className={s.orderForm_delivery_price_item}>
                Покровський район: 250-400 грн
              </li>
              <li className={s.orderForm_delivery_price_item}>
                Тернівський район: 500-1000 грн
              </li>
            </ul>
            <div className={s.orderForm_container_address}>
              <TextField
                id="hause"
                name="hause"
                label="Будинок"
                type="hause"
                value={formik.values.hause}
                className={s.textField_address}
                onChange={formik.handleChange}
                error={formik.touched.hause && Boolean(formik.errors.hause)}
                helperText={formik.touched.hause && formik.errors.hause}
                sx={{
                  mr: "20px",
                }}
              />
              <TextField
                id="apartment"
                name="apartment"
                label="Квартира"
                value={formik.values.apartment}
                className={s.textField_address}
                onChange={formik.handleChange}
                error={
                  formik.touched.apartment && Boolean(formik.errors.apartment)
                }
                helperText={formik.touched.apartment && formik.errors.apartment}
              />
            </div>

            <FormControl>
              <InputLabel id="time">Виберіть час доставки</InputLabel>
              <Select
                labelId="time"
                id="time"
                value={time}
                label="Виберіть час доставки"
                onChange={selectTime}
                className={s.orderForm_select}
                sx={{
                  ".MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                    {
                      padding: "16px 0px 16px 10px",
                    },
                  ".MuiSvgIcon-root ": {
                    fill: "#FFA500 !important",
                  },
                }}
                // error={formik.touched.time && Boolean(formik.errors.time)}
              >
                <MenuItem value="6-7">6.00-7.00</MenuItem>
                <MenuItem value="7-8">7.00-8.00</MenuItem>
                <MenuItem value="8-9">8.00-9.00</MenuItem>
                <MenuItem value="9-10">9.00-10.00</MenuItem>
                <MenuItem value="10-11">10.00-11.00</MenuItem>
                <MenuItem value="11-12">11.00-12.00</MenuItem>
                <MenuItem value="12-13">12.00-13.00</MenuItem>
                <MenuItem value="13-14">13.00-14.00</MenuItem>
                <MenuItem value="14-15">14.00-15.00</MenuItem>
                <MenuItem value="15-16">15.00-16.00</MenuItem>
                <MenuItem value="16-17">16.00-17.00</MenuItem>
                <MenuItem value="17-18">17.00-18.00</MenuItem>
                <MenuItem value="18-19">18.00-19.00</MenuItem>
                <MenuItem value="19-20">19.00-20.00</MenuItem>
              </Select>
            </FormControl>
          </>
        )}
        <TextareaAutosize
          maxRows={5}
          id="comment"
          aria-label="comment on the order"
          placeholder="Якщо ви обрали композицію з надписом, напишіть бажаний текст. Залишилися питання пишіть сюди"
          value={formik.values.comment}
          onChange={formik.handleChange}
          className={s.orderForm_comment}
          style={{
            height: 80,
            marginBottom: 20,
            padding: 10,
            fontFamily: "Inter",
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        />
        <FormGroup className={s.orderForm_chekbox}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                className={s.orderForm_chekbox_lable}
                inputProps={{ "aria-label": "controlled" }}
                sx={{
                  color: "#FFA500",
                }}
              />
            }
            label="Мені можна не телефонувати з приводу замовлення"
          />
        </FormGroup>
        {checked && <p>Вам прийде повідомлення з реквізитами для оплати</p>}
        <Button
          variant="contained"
          type="submit"
          className={s.orderForm_button}
        >
          Оформити замовлення
        </Button>
      </ThemeProvider>
    </form>
  );
};

export default OrderForm;
