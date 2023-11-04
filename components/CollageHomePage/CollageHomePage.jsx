import Image from "next/image";
import imgs from "./collageImgsHomePageLinks.json";
import s from "./CollageHomePage.module.scss";

const CollageHomePage = () => {
  return (
    <div>
      <h2 className={s.title}>Дякуємо, що довіряєте нам Ваші свята!</h2>

      <ul className={s.imageList}>
        {imgs.map((img) => (
          <li key={img.id} className={s.imageList_item}>
            <Image
              src={img.src}
              alt="композиції із замовниками"
              width={280}
              height={220}
              priority={true}
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
