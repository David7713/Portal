import React from 'react'
import { useState } from 'react';
import { BsAlarm } from 'react-icons/bs';
import { WiDaySunny} from 'react-icons/wi';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { RiHotelLine } from 'react-icons/ri';
import { SlDirections } from 'react-icons/sl';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { Route,Routes,Link } from 'react-router'
import Navigation from './Navigation'
const Newyork = () => {
  const [ showdescription,setShowdescription ] = useState(false)
  const { t } = useTranslation();

  return (
    
    <div className='Newyork' data-aos="fade-up">
 <div className='Newyorkk'> <Navigation></Navigation></div>
  <p className='tourtonewyork'>{t('Tourtonewyork')}</p>
  <div className='linenewyork'></div>
     <p className='pricenewyork'>{t('Pricenewyork')}</p>
    
    <div className='descriptiontable'>
    
    <div className='durationNewyork'><BsAlarm className='icon'></BsAlarm><br></br>{t('Duration')}<br></br><label className='subtext'>{t('Sevendaysnewyork')}</label></div>
    <div className='groupsizeNewyork'><AiOutlineUsergroupDelete className='icon'></AiOutlineUsergroupDelete><br></br>{t('Groupsize')}<br></br><label className='subtext1'>
      +1</label></div>
    <div className='accommodationNewyork'><RiHotelLine className='icon1'></RiHotelLine><br></br>{t('Accommondation')}<br></br><label className='subtext2'>
    {t('Hotelnewyork')}</label></div>
    <div className='bestperiodNewyork'><WiDaySunny className='icon5'></WiDaySunny><br></br>{t('Bestperiod')}<br></br><label className='subtext1'>
    {t('Summernewyork')}</label></div>
    <div className='startendNewyork'><SlDirections className='icon2'></SlDirections><br></br>{t('Startend')}<br></br><label className='subtext'>
    {t('Yerevannewyork')}</label></div>
    </div>
    <div className='imagesnewyork'>

      <div className='imagesofnewyork1'></div>
      <div className='imagesofnewyork2'></div>
      <div className='imagesofnewyork3'></div>

    </div>

           
      <button onClick={()=>{setShowdescription(!showdescription)}} className='descriptionnewyork'> {t('Descriptionbtn')}</button>
      {showdescription && <div className='descriptiontextnewyork'>
        
        <p className='maindescriptionnewyork'>{t('Maindescriptionnewyork')}
    </p>
    <p className='priceincludesnewyork'>
    {t('Priceincludesmiami')}
      <li> {t('Hotelnewyork')}</li>
      <li>{t('Airtickets')}</li>
      <li>{t('Excrusions')}</li>
      <li>{t('Transfer')}</li>
      <li>{t('Food')}</li>
      <li>{t('Insurance')}</li>

    </p>
        
        
        
        </div>}

        <div>
        <div class="mapouter" className='mapofnewyork'><div class="gmap_canvas"><iframe width="600" height="300" id="gmap_canvas"   src="https://maps.google.com/maps?q=5th%20Avenue%20at,%20Central%20Park%20S,%20New%20York,%20NY&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
        </div>


       
    </div>
  )
}

export default Newyork

