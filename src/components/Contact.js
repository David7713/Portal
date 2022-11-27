import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className='Contact'>


      <div className='contact-part-1'>

      <p id='contact-portal'>PORTAL </p>
      <br></br>
      <p className='contact-part-1-details'>{t('Email')}  &nbsp; &nbsp; <i class="fa-solid fa-envelope"></i> Portal@gmail.com</p>
      <p className='contact-part-1-details'>{t('Phone')}  &nbsp; <i class="fa-solid fa-phone"></i> +37400000000</p>
      <p className='contact-part-1-details'>{t('Address')}   <i class="fa-solid fa-location-pin"></i>{t('Abovyan')}</p>

      </div>
<div className='contact-part-2'>
    <p id='contact2-links'>{t('Links')} </p>
    <br></br>
      <a className='contact-links-2'   href='/Portal'>{t('Home')}</a>
      <a className='contact-links-2'   href='/Portal/miami'>{t('Miami')}</a>
      <a className='contact-links-2'   href='/Portal/newyork'>{t('Newyork')}</a>
      <a className='contact-links-2'   href='/Portal/baltimore'>{t('Baltimore')}</a>
      <a className='contact-links-2'   href='/Portal/about'>{t('About')}</a>
  
 
  
    

</div>
<div className='contact-part-2'>
      <p id='contact-part3'>{t('Here')}</p>
    <br></br>
      <div class="mapouter"><div class="gmap_canvas"><iframe width="400" height="160" id="gmap_canvas" src="https://maps.google.com/maps?q=Abovyan%20Street&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>

    
</div>
<br></br><br></br><br></br><br></br>
<p className='copyright'>© Copyright 2022 Portal Incorporated. All Rights Reserved.</p>
    </div>
  )
}

export default Contact