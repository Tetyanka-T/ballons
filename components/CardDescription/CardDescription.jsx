import Image from "next/image";
import ComeBackButton from "../ComeBackButton/ComeBackButton";
import s from "./CardDescription.module.scss";

const CardDescription = ({ balloon }) => {
  return (
    <>
      <ComeBackButton />
      <div className={s.cardDescription_container}>
        <div className={s.cardDescription_photo_container}>
          <Image
            src={balloon.imgSrc}
            alt=""
            width={200}
            height={100}
            className={s.cardDescription_image}
          />
          <div className={s.transparent}></div>
        </div>

        <div>
          <h3 className={s.cardDescription_title}>{balloon.name}</h3>
          <p className={s.cardDescription_article}>арт.№ {balloon.code}</p>

          <p className={s.cardDescription_descriptionComposition}>
            {balloon.description}
          </p>

          <p className={s.cardDescription_price}>{balloon.price} грн.</p>

          <p className={s.cardDescription_inform}>
            *Просимо звернути увагу: колір товару може відрізнятися в залежності
            від освітлення та налаштувань Вашого екрану.
          </p>
        </div>
      </div>
    </>
  );
};

export default CardDescription;
