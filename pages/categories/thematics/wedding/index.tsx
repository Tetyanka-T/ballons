import Head from 'next/head'
import common from '../../../../styles/common.module.scss'
import BalloonCard from '../../../../components/BalloonCard/BalloonCard'
import Filter from '../../../../components/FilterGender/FilterGender'
import NoFindComposition from '../../../../components/NoFindComposition/NoFindComposition'
import Novigation from '../../../../components/Navigation/Novigation'

const Wedding = () => {
    return (
        <div>
        <Head>
          <title>Весела витівка</title>
          <meta name="description" content="Інтернет магазин виробів із повітряних кульок, оформлення свят" />
          <link rel="icon" href="/balloon.svg"/>
        </Head>
  
        <main className={common.container}>
       
          
            <Novigation section='Тематична свята' category='Весілля' link='/categories/thematics'/>
            <h1 className={common.section_title}>Весілля</h1>
            <Filter/>
            <BalloonCard balloon={balloon}/>
     
        </main>
        <NoFindComposition/>
     
      </div>
    )
}


export default Wedding;