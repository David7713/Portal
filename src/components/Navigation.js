import React from 'react'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";




///////resources///
const translationsEng = {
Miami:"Miami",
Newyork:"NewYork",
Baltimore:"Baltimore",
About:"About",
Contact:"Contact"
}


const translationsArm = {
Miami:"Մայամի",
Newyork:"Նյու Յորք",
Baltimore:"Բալթիմոր",
About:"Մեր Մասին",
Contact:"Կապ"
}
const translationsRus = {
  Miami:"Майами",
  Newyork:"Нью-Йорк",
  Baltimore:"Балтимор",
  About:"О Нас",
  Contact:"Кантакт"
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
    
    
    
  )
}

export default Navigation
