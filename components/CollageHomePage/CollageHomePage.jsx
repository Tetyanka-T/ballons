import Image from "next/image";
import imgs from "./collageImgsHomePageLinks.json";
import s from "./CollageHomePage.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-flip";

const CollageHomePage = () => {
  return (
    <div>
      <h2 className={s.title}>Дякуємо за довіру</h2>
      <ul className={s.imageList}>
        {imgs.map((img) => (
          <li key={img.id} className={s.imageList_item}>
            <Image
              src={img.src}
              alt=""
              width={280}
              height={200}
              className={s.imageList_photo}
            />
            <div className={s.transparent}></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollageHomePage;
