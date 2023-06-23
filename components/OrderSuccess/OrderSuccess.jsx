import s from "./OrderSuccess.module.scss";

const OrderSuccess = ({ order }) => {
  return (
    <div className={s.container}>
      <h2>Дякуємо за замовлення {order.userName}!</h2>
      <p>Ваше замовлення № {order.numberOrder}</p>
      <ul className={s.successform_list}>
        <li>Дата свята: {order.deliveryDate}</li>
        <li>Спосіб доставки: {order.deliveryMethod}</li>
        <li>Час доставки: {order.deliveryTime}</li>
        {order.userAddress && <li>Адреса доставки: {order.userAddress}</li>}
        <li>Ваш номер: {order.userPhone}</li>
        <li>Ваш Email: {order.userEmail}</li>
        {order.comment && <li>Ваш коментарій: {order.comment}</li>}
      </ul>
      <p className={s.succeessform_info}>
        *Після обробки замовлення менеджером, вам на пошту надійде
        лист-підтвердження. Перевірте папку «Спам» або «Промо», якщо не побачите
        його.
      </p>
    </div>
  );
};

export default OrderSuccess;
