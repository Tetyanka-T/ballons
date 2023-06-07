import Head from 'next/head'

import Novigation from '../components/Navigation/Novigation'

import common from '../styles/common.module.scss'
import s from '../styles/PaymentDelivery.module.scss'
import Image from 'next/image'
import CategoriesListDesktop from '../components/CategoriesListDesktop/CategoriesListDesktop'

export default function PaymentPage() {
  return (
    <div>
      <Head>
        <title>Весела витівка</title>
        <meta name="description" content="Інтернет магазин виробів із повітряних кульок, оформлення свят" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={common.container}>
  
       
        <Novigation section='Оплата і доставка'/>
     
        <h2 className={common.section_title}>Оплата і доставка</h2>
        <div className={s.payment_section}>
          <p>При підтвердженні замовлення, клієнт отримує смс-повідомлення з реквізитами для оплати. Магазин працює при умові <span>повної 100% оплати на карту банку.</span> У разі необхідності доставки, її вартість буде додана до рахунку відповідно до тарифів, наведених нижче.</p>
          <p>Доставка по місту  здійснюється щодня з 06:00 до 21:00. Доступний час можна обрати при формуванні замовлення у пункті «Доставка». У разі термінових замовлень питання вирішуються індивідуально.</p>
          <p className={s.delivery_list_title}>Розрахунок приблизної вартості доставки по місту:</p>
          <ul className={s.delivery_list}>
            <li>Металургійний район: 70-150 грн;</li>
            <li>Саксаганський район: 150-300 грн;</li>
            <li>Довгинцівський район: 100-250 грн;</li>
            <li>Інгулецький район: 200-1000 грн;</li>
            <li>Центрально-Міський район: 150-300 грн;</li>
            <li>Покровський район: 250-400 грн;</li>
            <li>Тернівський район: 500-1000 грн.</li>
          </ul>
          <p><span>Самовивіз</span> замовлення можливий за адресою магазину: м. Кривий Ріг, пр. Металургів, 20.</p>
       <div className={s.delivery_car}>
       <Image src="/car.jpg" alt="delivery car" width={290} height={150}/>
       </div>
       
        </div>
    
      </main>

  
    </div>
  )
}