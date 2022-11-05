import React, { Suspense } from 'react'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";




///////resources///
const translationsEng = {
Miami:"Miami",
Newyork:"New York",
Baltimore:"Baltimore",
About:"About",
Contact:"Contact",
exploretext1:"Explore a new world",
exploretext2:"No matter where in the world you want to go, we can help you get there",
Tourtomiami:"TOUR TO MIAMI",
Pricemiami:"Price 1.500 USD",
Durationmiami:"DURATION",
Groupsizemiami:"Group Size",
Accommondationmiami:"Accommondation",
Bestperiodmiami:"Best Period",
Startendmiami:"Start/End",
Sevendaysmiami:"8Days/7Nights",
Hotelmiami:"Hotel",
Summermiami:"Summer",
Yerevanmiami:"Yerevan/Yerevan"
}


const translationsArm = {
Miami:"Մայամի",
Newyork:"Նյու Յորք",
Baltimore:"Բալթիմոր",
About:"Մեր Մասին",
Contact:"Կապ",
exploretext1:"Բացահայտիր նոր աշխարհ",
exploretext2:"Անկախ նրանից, թե աշխարհի որտեղ եք ուզում գնալ, մենք կարող ենք օգնել ձեզ հասնել այնտեղ",
Tourtomiami:"ՏՈՒՐ ԴԵՊԻ ՄԱՅԱՄԻ",
Pricemiami:"Գինը՝ 1.500 USD",
Durationmiami:"ՏԵՎՈՂՈՒԹՅՈՒՆԸ",
Groupsizemiami:"ՔԱՆԱԿԸ",
Accommondationmiami:"Բնակության Վայր",
Bestperiodmiami:"ԼԱՎ ՍԵԶՈՆ",
Startendmiami:"ՍԿԻԶԲ/ԱՎԱՐՏ",
Sevendaysmiami:"8օր/7գիշեր",
Hotelmiami:"ՀՅՈՒՐԱՆՈՑ",
Summermiami:"ԱՄԱՌ",
Yerevanmiami:"Երևան/Երևան"

}
const translationsRus = {
  Miami:"Майами",
  Newyork:"Нью-Йорк",
  Baltimore:"Балтимор",
  About:"О Нас",
  Contact:"Кантакт",
  exploretext1:"Исследуйте новый мир",
  exploretext2:"Независимо от того, куда вы хотите отправиться, мы можем помочь вам добраться туда",
  Tourtomiami:"ТУР В МАЙАМИ",
  Pricemiami:"Цена: 1.500 USD",
  Groupsizemiami:"КОЛ.ЧЕЛОВЕК",
  Accommondationmiami:"ПРОЖИВАНИЕ",
  Bestperiodmiami:"ЛУЧШИЙ ПЕРИОД",
  Startendmiami:"НАЧАЛО/КОНЕЦ",
  Sevendaysmiami:"8 дней/7 ночей",
  Hotelmiami:"ОТЕЛЬ",
  Summermiami:"Лето",
  Yerevanmiami:"Ереван/Ереван"

  }


  /////resources ends///
i18n
.use (initReactI18next)
.init({
  resources:{
    en:{translation:translationsEng},
    arm:{translation:translationsArm},
    rus:{translation:translationsRus},
  },
  lng:"en",
  fallbackLng:"en",
  interpolation:{
    escapeValue:false},
});


const onChange = (event) =>{
  i18n.changeLanguage(event.target.value);
}

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <Suspense fallback="Loading...">
   
    <div className='Navigation'>
          <a href='#'><div className='logoNavigation'> .</div></a>
          <a href='#'><div  className='miamiNavigation'>  | &nbsp; &nbsp; &nbsp; &nbsp;{t('Miami')}</div></a>
          <a href='#'><div  className='newyorkNavigation'>| &nbsp; &nbsp; &nbsp; &nbsp;{t('Newyork')}</div></a>
          <a href='#'><div  className='baltimoreNavigation'>| &nbsp; &nbsp; &nbsp; &nbsp;{t('Baltimore')}</div></a>
          <a href='#'><div  className='aboutNavigation'>| &nbsp; &nbsp; &nbsp; &nbsp;{t('About')}</div></a>
          <a href='#'><div  className='contactNavigation'>| &nbsp; &nbsp; &nbsp; &nbsp;{t('Contact')}</div></a>
          <div  className='languageNavigation'>
          <select className='languageSwitcher'  name='language' onChange={onChange}>
          <option value="en">ENG</option>
          <option value="arm">ARM</option>
          <option value="rus">RUS</option>
          </select>
          </div>


  
    </div>
     </Suspense>
    
   
  )
}

export default Navigation
