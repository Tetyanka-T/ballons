import Head from 'next/head'
import BalloonCard from '../../../../components/BalloonCard/BalloonCard'
import Filter from '../../../../components/Filter/Filter'
import NoFindComposition from '../../../../components/NoFindComposition/NoFindComposition'
import Novigation from '../../../../components/Navigation/Novigation'
import common from '../../../../styles/common.module.scss'



const BirthDayBoy = ({balloon}) => {
    return (
        <div>
        <Head>
          <title>Весела витівка</title>
          <meta name="description" content="Інтернет магазин виробів із повітряних кульок, оформлення свят" />
          <link rel="icon" href="/balloon.svg" />
        </Head>
  
        <main className={common.container}>
         
            <Novigation section='День народження' category='хлопчик' link='/categories/birthday'/>
            <h1 className={common.section_title}>День народження для хлопчика</h1>
            <Filter/>
            <BalloonCard balloon={balloon}/>
      
          
        </main>
        <NoFindComposition/>
      </div>
    )
}



export default BirthDayBoy;