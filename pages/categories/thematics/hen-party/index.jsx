import Head from 'next/head'
import common from '../../../../styles/common.module.scss'
import BalloonCard from '../../../../components/BalloonCard/BalloonCard'

import NoFindComposition from '../../../../components/NoFindComposition/NoFindComposition'
import Novigation from '../../../../components/Navigation/Novigation'

const HenParty = ({balloon}) => {
    return (
        <div>
        <Head>
          <title>Весела витівка</title>
          <meta name="description" content="Інтернет магазин виробів із повітряних кульок, оформлення свят" />
          <link rel="icon" href="/balloon.svg" />
        </Head>
  
        <main className={common.container}>
          
            <Novigation section='Тематична свята' category='Дівич-вечір' link='/categories/thematics'/>
            <h1 className={common.section_title}>Дівич-вечір</h1>
         
            <BalloonCard balloon={balloon}/>
        
        </main>
        <NoFindComposition/>
  
      
      </div>
    )
}


export default HenParty;