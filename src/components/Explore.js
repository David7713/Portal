import React , {Suspense, useEffect} from 'react'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import AOS from "aos"
import 'aos/dist/aos.css'

  
    /////resources ends///
    <script>
    AOS.init();
  </script>
  
const Explore = () => {
  const { t } = useTranslation();


  ////AOS ANIMATION//
  useEffect(()=>{
    AOS.init({duration:2000})
  },[]);
  return (
    // <Suspense fallback={<p></p>}>
    <div className='Explore' data-aos="fade-down"  >



      <div className='exploreimage'></div>

    <div className='exploretext'> <h1>{t("exploretext1")}</h1>
    <p className='exploretext2'>{t("exploretext2")}</p>
    
  
    </div>


 
    </div>
      // </Suspense>
  )
}

export default Explore