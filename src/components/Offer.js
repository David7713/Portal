import React from 'react'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { MdOutlineTravelExplore} from 'react-icons/md';

import { BsBookmarkHeart} from 'react-icons/bs';
import { GiCutDiamond} from 'react-icons/gi';
import { TbBeach} from 'react-icons/tb';
const Offer = () => {
    const { t } = useTranslation();
  return (
    <div className='Offer' data-aos="zoom-in">
    

         


<div className='Ouroffers'>
        <div className='Ouroffer4'> 
            <p className='Ouroffer4Text1'> {t('Offerbestservice')}<GiCutDiamond className='icondiamond'></GiCutDiamond></p>
                <p className='Ouroffer4Text2'> {t('Offerbestservice2')}</p>
                        <div className='moreInfoAboutUs'>{t('Moreinfo')}</div>
    
    
          </div>  


    <div className='Ouroffer1'><div className='divIcon'><MdOutlineTravelExplore></MdOutlineTravelExplore></div>
        <p className='Ouroffer1Text1'>{t('Besttour')} </p>
             <p className='Ouroffer1Text2'> {t('Safeholidays')} </p>
     </div>



    <div className='Ouroffer2'> <div className='divIcon'><BsBookmarkHeart></BsBookmarkHeart></div>
         <p className='Ouroffer2Text1'> {t('Easybooking')}</p>
                <p className='Ouroffer2Text2'>{t('Tickets')} </p>
                
    </div>
        



    <div className='Ouroffer3'> <div className='divIcon' ><TbBeach></TbBeach></div>
        <p className='Ouroffer3Text1'> {t('Excellentrest')}</p>
            <p className='Ouroffer3Text2'> {t('Withus')}</p>
    </div>


 </div>




<div className='Numberanimation'></div>

    </div>
  )
}

export default Offer