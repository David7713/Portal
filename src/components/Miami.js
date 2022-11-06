import React from 'react'
import { useState } from 'react';
import { BsAlarm } from 'react-icons/bs';
import { WiDaySunny} from 'react-icons/wi';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { RiHotelLine } from 'react-icons/ri';
import { SlDirections } from 'react-icons/sl';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Navigation from './Navigation';
const Miami = () => {
  const [ showdescription,setShowdescription ] = useState(false)

  const { t } = useTranslation();

  return (
    <div className='Miami'  data-aos="fade-up">

      <div className='Miamii'> <Navigation></Navigation></div>
     
     

    <p className='tourtomiami'>{t('Tourtomiami')}</p>
  <div className='linemiami'></div>
     <p className='pricemiami'>{t('Pricemiami')}</p>
    
    <div className='descriptiontable'>
    
    <div className='durationMiami'><BsAlarm className='icon'></BsAlarm><br></br>{t('Durationmiami')}<br></br><label className='subtext'>{t('Sevendaysmiami')}</label></div>
    <div className='groupsizeMiami'><AiOutlineUsergroupDelete className='icon'></AiOutlineUsergroupDelete><br></br>{t('Groupsizemiami')}<br></br><label className='subtext1'>
      +1</label></div>
    <div className='accommodationMiami'><RiHotelLine className='icon1'></RiHotelLine><br></br>{t('Accommondationmiami')}<br></br><label className='subtext2'>
    {t('Hotelmiami')}</label></div>
    <div className='bestperiodMiami'><WiDaySunny className='icon5'></WiDaySunny><br></br>{t('Bestperiodmiami')}<br></br><label className='subtext1'>
    {t('Summermiami')}</label></div>
    <div className='startendMiami'><SlDirections className='icon2'></SlDirections><br></br>{t('Startendmiami')}<br></br><label className='subtext'>
    {t('Yerevanmiami')}</label></div>
    </div>
    <div className='imagesmiami'>

      <div className='imagesofmiami1'></div>
      <div className='imagesofmiami2'></div>
      <div className='imagesofmiami3'></div>

    </div>

           
      <button onClick={()=>{setShowdescription(!showdescription)}} className='descriptionmiami'> {t('Descriptionmiami')}</button>
      {showdescription && <div className='descriptiontextmiami'>
        
        <p className='maindescriptionmiami'>{t('Maindescriptionmiami')}
    </p>
    <p className='priceincludesmiami'>
    {t('Priceincludesmiami')}
      <li> {t('Hotelmiami')}</li>
      <li>{t('Airticketsmiami')}</li>
      <li>{t('Excrusionsmiami')}</li>
      <li>{t('Transfermiami')}</li>
      <li>{t('Foodmiami')}</li>
      <li>{t('Insurancemiami')}</li>

    </p>
        
        
        
        </div>}

        <div>
        <div class="mapouter" className='mapofmiami'><div class="gmap_canvas"><iframe width="600" height="300" id="gmap_canvas"   src="https://maps.google.com/maps?q=985%20Collins%20AveMiami%20Beach,%20FL%2033139,%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>
        </div>
    </div>
  )
}

export default Miami