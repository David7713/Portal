import React, { Suspense } from 'react'
import { useState, useEffect } from 'react'
import CircleLoader from "react-spinners/CircleLoader";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
//component Imports///
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import Miami from './components/Miami';
import Newyork from './components/Newyork';
import Contact from './components/Contact';
import About from './components/About';
import Baltimore from './components/Baltimore';
import Error from './components/Error';
//style Imports///
import "./App.css"
import "./styles/Spinner.css"
import "./styles/LanguageSwitcher.css"
import "./styles/Navigation.css"
import "./styles/Carousel.css"
import "./styles/Miami.css"
import "./styles/Baltimore.css"
import "./styles/Newyork.css"
import "./styles/About.css"
import "./styles/Contact.css"
import "./styles/Error.css"








//consts//
const translationsEn = {welcome:"",
changed:"Hello and come to paris",
about:"About"


}
const translationsFr = {welcome:"Bievenue!!",
changed:"Je Pie Di Va sonx paris",
about:"Abuti"
}


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
    },1000)
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
  //// SPINNER ENDS
<div>

<div className='main'>
  {/* <div className='logo'></div> */}
{/* Language Switcher Start */}
<select className='languageSwitcher'  name='language' onChange={onChange}>
<option value="en">ENG</option>
<option value="fr">ARM</option>
<option value="fr">RUS</option>
</select>

  {/* <h1>{t('welcome')}</h1>
  <h2>{t('changed')}</h2> */}




{/* Routers */}
  <Router>
    <Routes>
   
      <Route path='home' element={<App></App>}></Route>
      <Route path='/' element={<Navigation></Navigation>}></Route>
      <Route path='miami' element={<Miami></Miami>}></Route>
      <Route path='newyork' element={<Newyork></Newyork>}></Route>
      <Route path='baltimore' element={<Baltimore></Baltimore>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='contact' element={<Contact></Contact>}></Route>

      <Route path="*" element={<Error></Error>}></Route>
    </Routes>
  </Router>
{/* 
 Bone */}
  <Carousel></Carousel>
  <Miami></Miami>
  <Newyork></Newyork>
  <Baltimore></Baltimore>
  <About></About> 
  <Contact></Contact>

  
</div>

</div>










}


    </div>
    </Suspense>
  )
}

export default App
