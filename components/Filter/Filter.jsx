import s from "./Filter.module.scss";

const Filter = () => {
  return (
    <>
      <div className={s.categories_filters__button}>
        <button className={s.categories_filters__button__parameters}>
          Фільтр
        </button>
        <button className={s.categories_filters__button__sort}>
          Впорядкувати
        </button>
      </div>
    </>
  );
};

export default Filter;
