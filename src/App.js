import React, { Suspense } from 'react'
import { useState, useEffect } from 'react'
import CircleLoader from "react-spinners/CircleLoader";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import "./App.css"
import "./styles/Spinner.css"





const translationsEn = {welcome:"Welcome!!",
changed:"Hello and come to paris"



}
const translationsFr = {welcome:"Bievenue!!",
changed:"Je Pie Di Va sonx paris"}


i18n
.use (initReactI18next)
.init({
  resources:{
    en:{translation:translationsEn},
    fr:{translation:translationsFr},
  },
  lng:"en",
  fallbackLng:"en",
  interpolation:{
    escapeValue:false},
});

const App = () => {
  const { t } = useTranslation();

const onChange = (event) =>{
  i18n.changeLanguage(event.target.value);
}





const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
setLoading(false)
    },3000)
 },[])
  return (
    <Suspense fallback="Loading...">
    <div className='App'>

{/* spinner */}
{
    loading?
    <CircleLoader
    className='Spinner'
    color="hsla(195, 67%, 53%, 1)"
    cssOverride={{}}
    size={160}
    speedMultiplier={1}
  />
    :
  
<div>

<div className='a'>
  <div className='logo'></div>
<select className='selectflags'  name='language' onChange={onChange}>
<option value="en">English </option>

<option value="fr">French</option>




</select>

{/* <img className='img111' src={Img1}></img> */}

  <h1>{t('welcome')}</h1>
  <h2>{t('changed')}</h2>
  
</div>






</div>




}
    </div>
    </Suspense>
  )
}

export default App
