import React from 'react';
import Numbers from './Numbers';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
const About = () => {
  const { t } = useTranslation();
  return (
    <div className='About' data-aos="zoom-in">
           <div className='aboutustext'>
           {t('Aboutus')}
                        <div className='lineabout' ></div>
       </div>

     <div className='Mainabout'>
      <div className='leftside'></div>
      <div className='rightside'>
          <div className='rightside1'><p className='rightsidetext1'>  
          {t('Webelieve')}</p>
                <p className='rightsidetext2'>{t('Established')}
              </p>
        </div>
      </div>
     </div>
     <Numbers></Numbers>
        <div className='Mainabout2' data-aos="zoom-in-up"><a  name="about"></a>
          <div className='leftside2'>
            <p className='leftsidetext1'>
            {t('Advantages')}  
            </p>
            <p className='ouradventages'>
        <li className='aboutlist'><i class="fa-sharp fa-solid fa-check"></i>  &nbsp; &nbsp;  {t('Diectandopen')}</li>
        <li className='aboutlist'><i class="fa-sharp fa-solid fa-check"></i> &nbsp; &nbsp; {t('Speed')} </li>
        <li className='aboutlist'><i class="fa-sharp fa-solid fa-check"></i> &nbsp; &nbsp;{t('Teamwork')}</li>
        <li className='aboutlist'><i class="fa-sharp fa-solid fa-check"></i> &nbsp; &nbsp;{t('Flexibility')}</li>
        <li className='aboutlist'><i class="fa-sharp fa-solid fa-check"></i> &nbsp; &nbsp;{t('Recognizing')}</li>
        <li className='aboutlist'><i class="fa-sharp fa-solid fa-check"></i> &nbsp; &nbsp;{t('Risk')}</li>
        <li className='aboutlist'><i class="fa-sharp fa-solid fa-check"></i> &nbsp; &nbsp;{t('Quality')}</li>
         
         </p>
                </div>
          <div className='rightside2'></div>
      </div>


    </div>
  )
}

export default About