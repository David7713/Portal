import React from 'react'
import CountUp from 'react-countup';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
const Numbers = () => {
  const { t } = useTranslation();
  return (
    <div className='Numbers'>
      {/* <CountUp end={100} duration={4} /> */}

     <div className='Mainnumbers'>
      <div className='Number1' ><div className='Numbericon'><i class="fa-solid fa-users"></i></div>
      <CountUp className='Number1numbers' end={700} duration={25} />
          <p className='NumberText'>{t('Customers')}</p>
      </div>
      <div className='Number2' ><div className='Numbericon'><i class="fa-solid fa-calendar-days"></i></div>
      <CountUp className='Number1numbers' end={8} duration={20} />
      <p className='NumberText'>{t('Experience')}</p>
      </div>
      <div className='Number3' ><div className='Numbericon'><i class="fa-solid fa-handshake"></i></div>
      <CountUp className='Number1numbers' end={50} duration={22.6} />
      <p className='NumberText'>{t('Partners')}</p>
      </div>
      <div className='Number4' ><div className='Numbericon'><i class="fa-solid fa-plane-departure"></i></div>
      <CountUp className='Number1numbers' end={700} duration={25} />
      <p className='NumberText'>{t('Tours')}</p>
      </div>
      <div className='Number5' ><div className='Numbericon'><i class="fa-solid fa-face-smile"></i></div>
      <CountUp className='Number1numbers' end={1000} duration={30} />
      <p className='NumberText'>{t('Happyface')}</p>
      </div>
     </div>
    </div>
  )
}

export default Numbers