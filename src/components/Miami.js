import React from 'react'
import { BsAlarm } from 'react-icons/bs';
import { WiDaySunny} from 'react-icons/wi';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';
import { RiHotelLine } from 'react-icons/ri';
import { SlDirections } from 'react-icons/sl';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const Miami = () => {
  const { t } = useTranslation();
  return (
    <div className='Miami'  data-aos="fade-up">

    <div className='Mainmaiami'></div>
    <p className='tourtomiami'>{t('Tourtomiami')}</p>
  <div className='linemiami'></div>
     <p className='pricemiami'>{t('Pricemiami')}</p>
    
    <div className='descriptiontable'>
    
    <div className='durationMiami'><BsAlarm className='icon'></BsAlarm><br></br>{t('Durationmiami')}<br></br><label className='subtext'>{t('Sevendaysmiami')}</label></div>
    <div className='groupsizeMiami'><AiOutlineUsergroupDelete className='icon'></AiOutlineUsergroupDelete><br></br>{t('Groupsizemiami')}<br></br><label className='subtext1'>
      +1</label></div>
    <div className='accommodationMiami'><RiHotelLine className='icon1'></RiHotelLine><br></br>{t('Accommondationmiami')}<br></br><label className='subtext2'>
    {t('Hotelmiami')}</label></div>
    <div className='bestperiodMiami'><WiDaySunny className='icon2'></WiDaySunny><br></br>{t('Bestperiodmiami')}<br></br><label className='subtext1'>
    {t('Summermiami')}</label></div>
    <div className='startendMiami'><SlDirections className='icon2'></SlDirections><br></br>{t('Startendmiami')}<br></br><label className='subtext'>
    {t('Yerevanmiami')}</label></div>
    </div>
{/*   
  <p>Description</p>
  <label>
    1.
    2.
    3.
    4.
    5.
    6.
    7.

  </label>   */}


    </div>
  )
}

export default Miami