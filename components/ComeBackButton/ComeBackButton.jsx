"use client";

import { useRouter } from "next/router";
import { PrevPage } from "../svg";
import s from "./ComeBackButton.module.scss";

const ComeBackButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      className={s.galleryButton_comeBack}
      onClick={() => router.back()}
    >
      <PrevPage />
    </button>
  );
};

export default ComeBackButton;
