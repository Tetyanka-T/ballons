import Head from "next/head";
import NoFindComposition from "../components/NoFindComposition/NoFindComposition";
import SearchInput from "../components/Search/SearchInput";
import common from "../styles/common.module.scss";

const SearchPage = () => {
  return (
    <div>
      <Head>
        <title>Весела витівка</title>
        <meta
          name="description"
          content="Інтернет-магазин композицій (виробів) із повітряних кульок, оформлення свят у місті Кривий Ріг"
        />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className={common.container}>
        <h1 className={common.section_title}>Ваші запити</h1>
        <SearchInput />
      </main>
      <NoFindComposition />
    </div>
  );
};

export default SearchPage;
