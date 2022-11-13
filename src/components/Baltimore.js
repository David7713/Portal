import React from 'react'
import Navigation from './Navigation';
import { useState } from 'react';
import { BsAlarm } from 'react-icons/bs';
import { WiDaySunny} from 'react-icons/wi';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { RiHotelLine } from 'react-icons/ri';
import { SlDirections } from 'react-icons/sl';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
const Baltimore = () => {
  const [ showdescription,setShowdescription ] = useState(false)
  const { t } = useTranslation();

  return (
    <div className='Baltimore' data-aos="fade-up">
  <div className='Baltimoree'> <Navigation></Navigation></div>

<p className='tourtobaltimore'>{t('Tourtobaltimore')}</p>
  <div className='linebaltimore'></div>
     <p className='pricebaltimore'>{t('Pricebaltimore')}</p>
    
    <div className='descriptiontable'>
    
    <div className='durationBaltimore'><BsAlarm className='icon'></BsAlarm><br></br>{t('Duration')}<br></br><label className='subtext'>{t('Sevendaysbaltimore')}</label></div>
    <div className='groupsizeBaltimore'><AiOutlineUsergroupDelete className='icon'></AiOutlineUsergroupDelete><br></br>{t('Groupsize')}<br></br><label className='subtext1'>
      +1</label></div>
    <div className='accommodationBaltimore'><RiHotelLine className='icon1'></RiHotelLine><br></br>{t('Accommondation')}<br></br><label className='subtext2'>
    {t('Hotelbaltimore')}</label></div>
    <div className='bestperiodBaltimore'><WiDaySunny className='icon5'></WiDaySunny><br></br>{t('Bestperiod')}<br></br><label className='subtext1'>
    {t('Summermiami')}</label></div>
    <div className='startendBaltimore'><SlDirections className='icon2'></SlDirections><br></br>{t('Startend')}<br></br><label className='subtext'>
    {t('Yerevanbaltimore')}</label></div>
    </div>
    <div className='imagesbaltimore'>

      <div className='imagesofbaltimore1'></div>
      <div className='imagesofbaltimore2'></div>
      <div className='imagesofbaltimore3'></div>

    </div>

           
      <button onClick={()=>{setShowdescription(!showdescription)}} className='descriptionbaltimore'> {t('Descriptionbtn')}</button>
      {showdescription && <div className='descriptiontextbaltimore'>
        
        <p className='maindescriptionbaltimore'>{t('Maindescriptionbaltimore')}
    </p>
    <p className='priceincludesbaltimore'>
    {t('Priceincludes')}
      <li> {t('Hotelbaltimore')}</li>
      <li>{t('Airtickets')}</li>
      <li>{t('Excrusions')}</li>
      <li>{t('Transfer')}</li>
      <li>{t('Food')}</li>
      <li>{t('Insurance')}</li>

    </p>
        
        
        
        </div>}

        <div>
         <div  class="mapouter" className='mapofbaltimore'><div class="gmap_canvas"><iframe width="600" height="300" class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=829 Elkridge Landing Rd, Baltimore, MD 21090, USA&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
        </div>
     





    </div>
  )
}

export default Baltimore