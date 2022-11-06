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
    
     <a href='https://earth.google.com/web/@-76.85117272,70.67049971,3150.13163325a,2533898.85103047d,35y,333.37270327h,0t,0r/data=CjkSNxIgZDY1OGRjYWIzNjlhMTFlOGFjNmU2OWJjN2I2ZDI2Y2EiE2xheWVyXzNkY292ZXJfcGFuZWw' target="blank"> <div className='explorebutton'>{t("exploretext3")}</div></a>
    </div>


 
    </div>
      // </Suspense>
  )
}

export default Explore