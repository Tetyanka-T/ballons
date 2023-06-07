import Router from "next/router";
import { PrevPage } from "../svg";
import s from "./ComeBackButton.module.scss";

const ComeBackButton = () => {
  return (
    <button
      type="button"
      className={s.galleryButton_comeBack}
      onClick={() => Router.back()}
    >
      <PrevPage />
    </button>
  );
};

export default ComeBackButton;
