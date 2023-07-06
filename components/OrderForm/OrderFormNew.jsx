import { useState, useContext } from "react";
import { Cross } from "../../components/svg";
import Image from "next/image";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import FormControl from "@mui/material/FormControl";
import {
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import DatePicker, { registerLocale } from "react-datepicker";
import uk from "date-fns/locale/uk";
import "react-datepicker/dist/react-datepicker.css";
import s from "./OrderForm.module.scss";
import ss from "../../styles/OrderPage.module.scss";
import sss from "../Basket/Basket.module.scss";
import common from "../../styles/common.module.scss";
import OrderSuccess from "../OrderSuccess/OrderSuccess";
import CartContext from "../../context/CartContext";

const validationSchema = yup.object().shape({
  userName: yup.string().required("Введіть своє ім'я"),
  userPhone: yup
    .number()
    .integer("Некоректний телефон")
    .typeError()
    .required("Введіть свій номер телефону"),
  userEmail: yup
    .string()
    .email("Некоректний email")
    .required("Введіть свій email"),
  dateHoliday: yup.date().required(),
  deliveryTime: yup.string().required("Оберіть бажаний час"),
  payment: yup.string().required("Оберіть спосіб оплати"),
  deliveryMethod: yup.string().required("Оберіть спосіб доставки"),
  userAddress: yup.string().required("Вкажіть вашу адресу"),
  comment: yup.string(),
  callBack: yup.boolean(),
});

const OrderFormNew = () => {
  const { addItemToCart, deleteItemFromCart, cart, removeItemCart } =
    useContext(CartContext);

  const amount = cart?.cartItems?.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const increaseQty = (cartItem) => {
    const newQty = cartItem?.quantity + 1;
    const item = { ...cartItem, quantity: newQty };

    if (newQty > Number(cartItem.stock)) return;

    addItemToCart(item);
  };

  const decreaseQty = (cartItem) => {
    const newQty = cartItem?.quantity - 1;
    const item = { ...cartItem, quantity: newQty };
    if (newQty <= 0) return;
    addItemToCart(item);
  };

  const [formSuccess, setFormSuccess] = useState(false);
  const [userName, SetUserName] = useState("");
  const [userPhone, SetUserPhone] = useState("");
  const [userEmail, SetUserEmail] = useState("");
  const [deliveryTime, SetDeliveryTime] = useState("");
  const [payment, SetPayment] = useState("");
  const [deliveryMethod, SetDeliveryMethod] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [userAddress, SetUserAddress] = useState("");
  const [comment, SetComment] = useState("");
  const [callBack, setCallBack] = useState(false);

  registerLocale("uk", uk);
  const handleChangeCheck = (event) => {
    setCallBack(event.target.checked);
  };

  const deliveryDate = startDate.toISOString().slice(0, 10);
  const numberOrder = Date.now().toString();

  const selectTime = (e) => {
    SetDeliveryTime(e.target.value);
  };
  const selectPayment = (e) => {
    SetPayment(e.target.value);
  };
  const selectDelivery = (e) => {
    SetDeliveryMethod(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "userName":
        SetUserName(value);
        break;

      case "userPhone":
        SetUserPhone(value);
        break;

      case "userEmail":
        SetUserEmail(value);
        break;

      case "userAddress":
        SetUserAddress(value);
        break;

      case "comment":
        SetComment(value);
        break;

      default:
        return;
    }
  };
  const order = {
    numberOrder,
    userName,
    userPhone,
    userEmail,
    deliveryTime,
    payment,
    deliveryMethod,
    userAddress,
    deliveryDate,
    comment,
    callBack,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const basketBalloons = cart.cartItems.map((b) => ({
      id: b.id,
      img: b.imgSrc,
      name: b.name,
      code: b.code,
      price: b.price,
      quantity: b.quantity,
      price: b.quantity * b.price,
    }));
    const basket = {
      balloons: basketBalloons,
      amount: amount,
    };
    const orderFull = {
      numberOrder,
      userName,
      userPhone,
      userEmail,
      deliveryTime,
      payment,
      deliveryMethod,
      userAddress,
      deliveryDate,
      comment,
      callBack,
      basket,
    };
    const JSONdata = JSON.stringify(orderFull);
    const link = "https://balloons-shop.onrender.com/api/orders";
    // const link = "https://backend-balloons.netlify.app/api/orders";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(link, options);
    console.log(response);
    setFormSuccess(true);
    removeItemCart();
  };

  return (
    <>
      {formSuccess ? (
        <OrderSuccess order={order} />
      ) : (
        <>
          <h1 className={common.section_title}>Оформлення замовлення</h1>
          <form onSubmit={handleSubmit} className={s.orderForm}>
            <div className={s.textField}>
              <TextField
                id="userName"
                name="userName"
                type="text"
                label="Ім'я"
                value={userName}
                className={s.textField}
                onChange={handleChange}
                required
              />
            </div>
            <div className={s.textField}>
              <TextField
                id="userPhone"
                name="userPhone"
                type="tel"
                label="Номер телефону"
                value={userPhone}
                className={s.textField}
                onChange={handleChange}
                required
                pattern="[0-9]*"
              />
            </div>
            <div className={s.textField}>
              <TextField
                id="userEmail"
                name="userEmail"
                label="Email"
                type="email"
                value={userEmail}
                className={s.textField}
                onChange={handleChange}
                required
                pattern="^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$"
              />
            </div>

            <div className={s.calendarColor}>
              <p className={s.orderForm_select_date}>Виберіть дату свята:</p>
              <DatePicker
                locale="uk"
                dateFormat="dd.MM.yyyy"
                minDate={new Date()}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                name="date"
                disabledKeyboardNavigation
                className={s.date}
                placeholderText="Виберіть дату свята:"
              />
            </div>
            <FormControl>
              <InputLabel id="payment">Спосіб оплати</InputLabel>
              <Select
                labelId="payment"
                id="payment"
                name="payment"
                value={payment}
                label="Спосіб оплати"
                onChange={selectPayment}
                required
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
              >
                <MenuItem value="100%">100% на карту МоноБанку</MenuItem>
              </Select>
            </FormControl>

            <FormControl>
              <InputLabel id="deliveryMethod" className={s.InputLabel}>
                Спосіб доставки
              </InputLabel>
              <Select
                labelId="deliveryMethod"
                id="deliveryMethod"
                name="deliveryMethod"
                value={deliveryMethod}
                label="Спосіб доставки"
                onChange={selectDelivery}
                required
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
                <MenuItem value="Доставка кур'єр">
                  Доставка кур&apos;єром
                </MenuItem>
              </Select>
            </FormControl>
            {deliveryMethod === "Самовивіз з магазину" && (
              <>
                <p className={s.orderForm_timeInfo}>
                  Важливо! На опрацювання та підготовку ваших замовлень потрібен
                  деякий час, тому плануйте ваше свято заздалегідь.
                </p>
                <FormControl>
                  <InputLabel id="deliveryTime">
                    Виберіть час, коли бажаєте забрати композицію
                  </InputLabel>
                  <Select
                    labelId="deliveryTime"
                    id="deliveryTime"
                    name="deliveryTime"
                    value={deliveryTime}
                    label="Виберіть час, коли бажаєте забрати композицію"
                    onChange={selectTime}
                    required
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
                  >
                    <MenuItem value="09:00-10:00">09:00-10:00</MenuItem>
                    <MenuItem value="10:00-11:00">10:00-11:00</MenuItem>
                    <MenuItem value="11:00-12:00">11:00-12:00</MenuItem>
                    <MenuItem value="12:00-13:00">12:00-13:00</MenuItem>
                    <MenuItem value="13:00-14:00">13:00-14:00</MenuItem>
                    <MenuItem value="14:00-15:00">14:00-15:00</MenuItem>
                    <MenuItem value="15:00-16:00">15:00-16:00</MenuItem>
                    <MenuItem value="16:00-17:00">16:00-17:00</MenuItem>
                  </Select>
                </FormControl>
              </>
            )}
            {deliveryMethod === "Доставка кур'єр" && (
              <>
                <p className={s.orderForm_timeInfo}>
                  Важливо! На опрацювання та підготовку ваших замовлень потрібен
                  деякий час, тому плануйте ваше свято заздалегідь.
                </p>
                <FormControl>
                  <InputLabel id="deliveryTime">
                    Виберіть час доставки
                  </InputLabel>
                  <Select
                    labelId="deliveryTime"
                    id="deliveryTime"
                    value={deliveryTime}
                    label="Виберіть час доставки"
                    onChange={selectTime}
                    required
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
                  >
                    <MenuItem value="06:00-07:00">06:00-07:00</MenuItem>
                    <MenuItem value="07:00-08:00">07:00-08:00</MenuItem>
                    <MenuItem value="08:00-09:00">08:00-09:00</MenuItem>
                    <MenuItem value="09:00-10:00">09:00-10:00</MenuItem>
                    <MenuItem value="10:00-11:00">10:00-11:00</MenuItem>
                    <MenuItem value="11:00-12:00">11:00-12:00</MenuItem>
                    <MenuItem value="12:00-13:00">12:00-13:00</MenuItem>
                    <MenuItem value="13:00-14:00">13:00-14:00</MenuItem>
                    <MenuItem value="14:00-15:00">14:00-15:00</MenuItem>
                    <MenuItem value="15:00-16:00">15:00-16:00</MenuItem>
                    <MenuItem value="16:00-17:00">16:00-17:00</MenuItem>
                    <MenuItem value="17:00-18:00">17:00-18:00</MenuItem>
                    <MenuItem value="18:00-19:00">18:00-19:00</MenuItem>
                    <MenuItem value="19:00-20:00">19:00-20:00</MenuItem>
                  </Select>
                </FormControl>
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
                <div className={s.textField}>
                  <TextField
                    name="userAddress"
                    id="userAddress"
                    label="Адреса"
                    placeholder="Введіть вулицю, будинок, квартиру"
                    value={userAddress}
                    className={s.textField}
                    required
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            <TextareaAutosize
              maxRows={5}
              id="comment"
              name="comment"
              aria-label="comment on the order"
              placeholder="Якщо ви обрали композицію з надписом, напишіть бажаний текст. Залишилися питання пишіть сюди"
              value={comment}
              onChange={handleChange}
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
                    checked={callBack}
                    onChange={handleChangeCheck}
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
            {callBack && (
              <p>Вам прийде повідомлення з реквізитами для оплати</p>
            )}

            {cart?.cartItems && (
              <>
                <h2 className={ss.order}>Ваше замовлення</h2>
                <ul className={ss.basket_list}>
                  {cart.cartItems.map((balloon) => (
                    <li className={ss.basket_list__item} key={balloon._id}>
                      <div className={ss.basket_photo}>
                        <Image
                          src={balloon.imgSrc}
                          alt=""
                          width={70}
                          height={90}
                        />
                      </div>

                      <div className={ss.basket_list__item__product}>
                        <h3 className={ss.basket_list__item__product__title}>
                          {balloon.name}
                        </h3>
                        <p className={ss.basket_list__item__product__art}>
                          арт.№ {balloon.code}
                        </p>
                        <div className={sss.basket_couter}>
                          <ul className={sss.basket_couter__list}>
                            <li className={sss.basket_couter__list__item}>
                              <button
                                className={sss.basket_couter__list__item_button}
                                onClick={() => decreaseQty(balloon)}
                              >
                                -
                              </button>
                            </li>
                            <li className={sss.basket_couter__list__item}>
                              <p>{balloon.quantity}</p>
                            </li>
                            <li className={sss.basket_couter__list__item}>
                              <button
                                className={sss.basket_couter__list__item_button}
                                onClick={() => increaseQty(balloon)}
                              >
                                +
                              </button>
                            </li>
                            <li className={sss.basket_couter__list__item}>
                              <button
                                onClick={() => deleteItemFromCart(balloon.id)}
                                className={
                                  sss.basket_couter__list__item_button_cross
                                }
                              >
                                <Cross
                                  className={
                                    sss.basket_couter__list__item_button__icon
                                  }
                                />
                              </button>
                            </li>
                          </ul>
                          <p className={sss.basket__price}>
                            {balloon.quantity * balloon.price} грн
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className={sss.basket_sum}>
                  <p>Разом:</p>
                  <p>{amount} грн</p>
                </div>
              </>
            )}

            <button type="submit" className={s.orderForm_button}>
              Оформити замовлення
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default OrderFormNew;
