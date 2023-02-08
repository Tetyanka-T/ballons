import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import FormControl from "@mui/material/FormControl";
import { InputLabel, Select, MenuItem } from "@mui/material";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import streets from "./streets";
import s from "./OrderForm.module.scss";

const validationSchema = yup.object().shape({
  name: yup.string().required("Введіть своє ім'я"),
  number: yup
    .number()
    .required("Введіть свій номер телефону")
    .positive()
    .integer(),
  email: yup.string().required("Введіть свій email").email(),
  time: yup.number().required("Оберіть дату свята"),
  payment: yup.string().required("Оберіть спосіб оплати"),
  delivery: yup.string().required("Оберіть спосіб доставки"),
  street: yup.string().required(),
  hause: yup.number().required(),
  apartment: yup.number().required(),
  comment: yup.string(),
});

const OrderForm = () => {
  const [time, SetTime] = useState("");
  const [payment, SetPayment] = useState("");
  const [delivery, SetDelivery] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  const day = startDate.getDate();

  const month = startDate.getMonth() + 1;
  const year = startDate.getFullYear();
  const formatDate = `${day}.${month}.${year}`;
  // const [address, SetAddress] = useState("");
  // const [street, SetStreet] = useState("");
  // const [hause, SetHause] = useState("");
  // const [apartment, SetApartment] = useState("");

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
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
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

  return (
    <form onSubmit={formik.handleSubmit} className={s.orderForm}>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Ім'я"
        value={formik.values.name}
        className={s.textField}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        fullWidth
        id="number"
        name="number"
        label="Номер телефону"
        type="number"
        value={formik.values.number}
        className={s.textField}
        onChange={formik.handleChange}
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number}
      />
      <TextField
        fullWidth
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
        <DatePicker
          dateFormat="dd.MM.yyyy"
          // selected={startDate}
          onChange={(date) => setStartDate(date)}
          name="date"
          value={formatDate}
          className={s.date}
          showTimeSelect
          // maxDate={new Date()}
        />
      </div>

      <FormControl fullWidth>
        <InputLabel id="time">
          Виберіть час, на який потрібна композиція
        </InputLabel>
        <Select
          labelId="time"
          id="time"
          value={time}
          label="Виберіть час, на який потрібна композиція"
          onChange={selectTime}
          className={s.orderForm_select}
          // error={formik.touched.time && Boolean(formik.errors.time)}
        >
          <MenuItem value="9-11">9.00-11.00</MenuItem>
          <MenuItem value="11-12">11.00-12.00</MenuItem>
          <MenuItem value="12-14">12.00-14.00</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="payment">Спосіб оплати</InputLabel>
        <Select
          labelId="payment"
          id="payment"
          value={payment}
          label="Спосіб оплати"
          onChange={selectPayment}
          className={s.orderForm_select}
          // error={formik.touched.payment && Boolean(formik.errors.payment)}
        >
          <MenuItem value="100%">100% на карту МоноБанку</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="delivery">Спосіб доставки</InputLabel>
        <Select
          labelId="delivery"
          id="delivery"
          value={delivery}
          label="Спосіб доставки"
          onChange={selectDelivery}
          className={s.orderForm_select}
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
      {delivery === "Достака на хату" && (
        // <FormControl fullWidth>
        //   <InputLabel id="address">Виберіть адресу</InputLabel>
        //   <Select
        //     labelId="address"
        //     id="address"
        //     value={address}
        //     label="address"
        //     onChange={selectAddress}
        //     error={formik.touched.address && Boolean(formik.errors.address)}
        //   >
        //     {streets.map((street) => (
        //       <MenuItem key={street.id} value={street.name}>
        //         {street.name}
        //       </MenuItem>
        //     ))}
        //   </Select>
        // </FormControl>
        <>
          <TextField
            fullWidth
            id="street"
            name="street"
            label="Вулиця"
            value={formik.values.street}
            className={s.textField}
            onChange={formik.handleChange}
            error={formik.touched.street && Boolean(formik.errors.street)}
            helperText={formik.touched.street && formik.errors.street}
          />
          <TextField
            fullWidth
            id="hause"
            name="hause"
            label="Будинок"
            type="hause"
            value={formik.values.hause}
            className={s.textField}
            onChange={formik.handleChange}
            error={formik.touched.hause && Boolean(formik.errors.hause)}
            helperText={formik.touched.hause && formik.errors.hause}
          />
          <TextField
            fullWidth
            id="apartment"
            name="apartment"
            label="Квартира"
            value={formik.values.apartment}
            className={s.textField}
            onChange={formik.handleChange}
            error={formik.touched.apartment && Boolean(formik.errors.apartment)}
            helperText={formik.touched.apartment && formik.errors.apartment}
          />
        </>
      )}
      <TextareaAutosize
        maxRows={5}
        id="comment"
        aria-label="comment on the order"
        placeholder="Якщо ви обрали композицію з надписом, напишіть бажаний текст"
        value={formik.values.comment}
        style={{ width: 280, height: 80, marginBottom: 20 }}
      />
      <Button variant="contained" type="submit" className={s.orderForm_button}>
        Оформити замовлення
      </Button>
    </form>
  );
};

export default OrderForm;
