import Head from 'next/head'
import Header from '../../../../components/Header/Header'
import Footer from '../../../../components/Footer/Footer'

const NewYear = () => {
    return (
        <div>
        <Head>
          <title>Весела витівка</title>
          <meta name="description" content="Інтернет магазин виробів із повітряних кульок, оформлення свят" />
          <link rel="icon" href="" />
        </Head>
  
        <main>
          <Header />
          <h1>New Year</h1>
        </main>
  
        <footer>
          <Footer/>
        </footer>
      </div>
    )
}


export default NewYear;