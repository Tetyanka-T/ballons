import Image from "next/image";
import photo from "../../public/default.jpg";
import s from "./BalloonCard.module.scss";
import Balloon from "../../Interface/interface";

const BalloonCard = ({ balloon }: {balloon: Balloon}) => {
  return (
    <>
      <div className={s.img_container}>
        <Image
          src={balloon.imgSrc ?? photo}
          alt="photo composition"
          width={200}
          height={300}
          className={s.img}
          priority={true}
          // fill={true}
        />
        <div className={s.transparent}></div>
      </div>

      <div className={s.cart_description}>
        <h3 className={s.card_title}>{balloon.name}</h3>
        <p className={s.card_code}>арт.№ {balloon.code}</p>
        <p className={s.card_price}>{balloon.price} грн.</p>
      </div>
    </>
  );
};

export default BalloonCard;
