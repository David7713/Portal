import React , {Suspense} from 'react'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";


  
    /////resources ends///

  
const Explore = () => {
  const { t } = useTranslation();
  return (
    // <Suspense fallback={<p></p>}>
    <div className='Explore'>



      <div className='exploreimage'></div>

    <div className='exploretext'> <h1>{t("exploretext1")}</h1>
    <p className='exploretext2'>{t("exploretext2")}</p>
  
    </div>
    </div>
      // </Suspense>
  )
}

export default Explore