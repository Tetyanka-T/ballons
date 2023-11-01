import { useState, useContext, ChangeEvent, FormEvent } from "react";
import { Cross } from "../svg";
import Image from "next/image";
// import TextField from "@mui/material/TextField";
// import TextareaAutosize from "@mui/base/TextareaAutosize";

// import FormControl from "@mui/material/FormControl";
// import {
//   InputLabel,
//   Select,
//   MenuItem,
//   Checkbox,
//   FormGroup,
//   FormControlLabel,
//   SelectChangeEvent 
// } from "@mui/material";
import DatePicker, { registerLocale } from "react-datepicker";
import uk from "date-fns/locale/uk";
import "react-datepicker/dist/react-datepicker.css";
import s from "./OrderForm.module.scss";
import ss from "../../styles/OrderPage.module.scss";
import sss from "../Basket/Basket.module.scss";
import common from "../../styles/common.module.scss";
import OrderSuccess from "../OrderSuccess/OrderSuccess";
import CartContext from "../../context/CartContext";
import Cart from "../../Interface/interface"


const OrderFormNew = () => {
  const { addItemToCart, deleteItemFromCart, cart, removeItemCart } =
    useContext(CartContext);

  const amount = cart?.cartItems?.reduce(
    (acc: any, item: Cart) => acc + item.quantity * item.price,
    0
  );
  const increaseQty = (cartItem: Cart) => {
    const newQty = cartItem?.quantity + 1;
    const item = { ...cartItem, quantity: newQty };

    if (newQty > Number(cartItem)) return;

    addItemToCart(item);
  };

  const decreaseQty = (cartItem: Cart) => {
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
  const [disabled, setDisabled] = useState(false);
  const [waiteBack, setWaiteBack] = useState(false);

  registerLocale("uk", uk);

  const handleChangeCheck = (event: ChangeEvent<HTMLInputElement> ) => {
    setCallBack(event.target.checked);
  };

  const deliveryDate = startDate.toISOString().slice(0, 10);
  const numberOrder = Date.now().toString();

  const selectTime = (e: ChangeEvent<HTMLSelectElement> ) => {
    SetDeliveryTime(e.target.value);
  };
  const selectPayment = (e: ChangeEvent<HTMLSelectElement> ) => {
    SetPayment(e.target.value);
  };
  const selectDelivery = (e: ChangeEvent<HTMLSelectElement> ) => {
    SetDeliveryMethod(e.target.value);
  };
  const handleChange = (e: FormEvent<HTMLTextAreaElement | HTMLInputElement> ) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "userName":
        SetUserName(value);
        break;

      case "userPhone":
        const limitChar = 10;
        if (value.toString().length <= limitChar) {
          SetUserPhone(value);
        }
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

  const handleSubmit = async (e: FormEvent ) => {
    e.preventDefault();
    setDisabled(true);
    setWaiteBack(true);
    const basketBalloons = cart.cartItems.map((b: Cart) => ({
      id: b.id,
      img: b.imgSrc,
      name: b.name,
      code: b.code,
      price: b.price,
      quantity: b.quantity,
      priceAll: b.quantity * b.price,
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
           
              <label id="userName">Ім&#39;я
                <input
                id="userName"
                name="userName"
                type="text"
                value={userName}
                className={s.textField}
                onChange={(e)=> SetUserName(e.target.value)}
                required
              />
            </label>
           
           
            <label id="userPhone">Номер телефону
              <input
                id="userPhone"
                name="userPhone"
                type="number"
                placeholder="0971233366"
                value={userPhone}
                className={s.textField}
                onChange={handleChange}
                required
              />
            </label>
          
              <label id="userEmail">Email
              <input
                id="userEmail"
                name="userEmail"
                type="email"
                value={userEmail}
                className={s.textField}
                onChange={handleChange}
                required
              />
              </label>
             
         

            <div className={s.calendarColor}>
              <p className={s.orderForm_select_date}>Виберіть дату свята:</p>
              <DatePicker
                id="date"
                locale="uk"
                dateFormat="dd.MM.yyyy"
                minDate={new Date()}
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                name="date"
                disabledKeyboardNavigation
                className={s.date}
                placeholderText="Виберіть дату свята:"
              />
            </div>
           
              <label id="payment">Спосіб оплати
              <select
               id="payment"
               name="payment"
               value={payment}
               onChange={selectPayment}
               required
               className={s.textField}
             >
               <option></option>
               <option value="100%">100% на карту МоноБанку</option>
             </select>

              </label>
       

              <label id="deliveryMethod">Спосіб доставки </label>
              <select
              id="deliveryMethod"
              name="deliveryMethod"
              value={deliveryMethod}
              onChange={selectDelivery}
              required
              className={s.orderForm_select}
         
            >
              <option value="Самовивіз з магазину" className={s.option}>
                <span>Самовивіз з магазину<br/></span>
                <span>м.Кривий Ріг, просп. Металургів, б.20</span> 
              </option>
              <option value="Доставка кур'єр">
                Доставка кур&apos;єром
              </option>
            </select>
      
            {deliveryMethod === "Самовивіз з магазину" && (
              <>
                <p className={s.orderForm_timeInfo}>
                  Важливо! На опрацювання та підготовку ваших замовлень потрібен
                  деякий час, тому плануйте ваше свято заздалегідь.
                </p>
             
                  <label  id="deliveryTime">Виберіть час, коли бажаєте забрати композицію</label>
                  <select
                   id="deliveryTime"
                   name="deliveryTime"
                   value={deliveryTime}
                   onChange={selectTime}
                   required
                   className={s.textField}
                 >
                  <option></option>
                   <option value="09:00-10:00">09:00-10:00</option>
                   <option value="10:00-11:00">10:00-11:00</option>
                   <option value="11:00-12:00">11:00-12:00</option>
                   <option value="12:00-13:00">12:00-13:00</option>
                   <option value="13:00-14:00">13:00-14:00</option>
                   <option value="14:00-15:00">14:00-15:00</option>
                   <option value="15:00-16:00">15:00-16:00</option>
                   <option value="16:00-17:00">16:00-17:00</option>
                 </select>
              </>
            )}
            {deliveryMethod === "Доставка кур'єр" && (
              <>
                <p className={s.orderForm_timeInfo}>
                  Важливо! На опрацювання та підготовку ваших замовлень потрібен
                  деякий час, тому плануйте ваше свято заздалегідь.
                </p>
                <label id="deliveryTimeHome">Виберіть час доставки</label>
                <select
                id="deliveryTime"
                value={deliveryTime}
                onChange={selectTime}
                required
                className={s.textField}
              >
                <option></option>
                <option value="06:00-07:00">06:00-07:00</option>
                <option value="07:00-08:00">07:00-08:00</option>
                <option value="08:00-09:00">08:00-09:00</option>
                <option value="09:00-10:00">09:00-10:00</option>
                <option value="10:00-11:00">10:00-11:00</option>
                <option value="11:00-12:00">11:00-12:00</option>
                <option value="12:00-13:00">12:00-13:00</option>
                <option value="13:00-14:00">13:00-14:00</option>
                <option value="14:00-15:00">14:00-15:00</option>
                <option value="15:00-16:00">15:00-16:00</option>
                <option value="16:00-17:00">16:00-17:00</option>
                <option value="17:00-18:00">17:00-18:00</option>
                <option value="18:00-19:00">18:00-19:00</option>
                <option value="19:00-20:00">19:00-20:00</option>
              </select>

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
                  <label id="userAddress">Адреса
                  <input
                    name="userAddress"
                    id="userAddress"
                
                    placeholder="Введіть вулицю, будинок, квартиру"
                    value={userAddress}
                    className={s.textField}
                    required
                    onChange={handleChange}
                  />
                  </label>
               
              </>
            )}
            <textarea
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
            <input type="checkbox" checked={callBack}
              onChange={handleChangeCheck}
              className={s.orderForm_checkbox_input}
              />
  
            <label className={s.orderForm_checkbox_lable}>Мені можна не телефонувати з приводу замовлення</label>
          
           
            {callBack && (
              <p className={s.callBack_message}>Вам прийде повідомлення з реквізитами для оплати</p>
            )}

            {cart?.cartItems && (
              <>
                <h2 className={ss.order}>Ваше замовлення</h2>
                <ul className={ss.basket_list}>
                  {cart.cartItems.map((balloon: Cart) => (
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

            <button
              type="submit"
              disabled={disabled}
              className={s.orderForm_button}
            >
              Оформити замовлення
            </button>
            {waiteBack && (
              <p className={s.text_waite_back}>
                Зачекайте інформація обробляється...
              </p>
            )}
          </form>
        </>
      )}
    </>
  );
};

export default OrderFormNew;
