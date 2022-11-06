import React, { Suspense } from 'react'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"



///////resources///
const translationsEng = {
Miami:"Miami",
Newyork:"New York",
Baltimore:"Baltimore",
About:"About",
Contact:"Contact",
exploretext1:"Explore a new world",
exploretext2:"No matter where in the world you want to go, we can help you get there",
exploretext3:"Explore",
Tourtomiami:"TOUR TO MIAMI",
Pricemiami:"Price 1.500 USD",
Durationmiami:"DURATION",
Groupsizemiami:"Group Size",
Accommondationmiami:"Accommondation",
Bestperiodmiami:"Best Period",
Startendmiami:"Start/End",
Sevendaysmiami:"8Days/7Nights",
Hotelmiami:"Hotel",
Summermiami:"Summer",
Yerevanmiami:"Yerevan/Yerevan",
Descriptionmiami:"Decription",
Maindescriptionmiami:"Welcome to Miami since the 1920s, Miami Beach has been synonymous with irony and unexpected sunshine. 12 blocks long and 12 blocks wide, South Beach is the perfect place to stroll.With boutiques, restaurants, bars, clubs, museums and, of course, sandy beaches, you will never be bored.",
Priceincludesmiami:"Price Includes",
Hotelmiami:"Hotel:Crystal Beach Suites Miami",
Airticketsmiami:"Airtickets",
Excrusionsmiami:"Excursions",
Transfermiami:"Transfer: Airport - Hotel - Airport",
Foodmiami:"Breakfast , Lunch, Dinner",
Insurancemiami:"Insurance",
Offerbestservice:"We offer best service",
Offerbestservice2:"We always make our customer happy by providing as many choicces as possible",
Moreinfo:"More Info",
Besttour:"Best Tour Guide",
Safeholidays:"Safe holidays with assured stays clean cabs and 24/7 support.Make plan for long weekends with our best services.",
Easybooking:"Easy Booking",
Tickets:"With an easy and fast ticket purchases .Best deals and offers in the industry.",
Excellentrest:"Excellent Rest",
Withus:"With us your rest will be mysterious and wonderful",
Customers:"Customers",
Experience:"Year Exp",
Partners:"Partners",
Tours:"Tours",
Happyface:"Happy Face"
}


const translationsArm = {
Miami:"Մայամի",
Newyork:"Նյու Յորք",
Baltimore:"Բալթիմոր",
About:"Մեր Մասին",
Contact:"Կապ",
exploretext1:"Բացահայտիր նոր աշխարհ",
exploretext2:"Անկախ նրանից, թե աշխարհի որտեղ եք ուզում գնալ, մենք կարող ենք օգնել ձեզ հասնել այնտեղ",
exploretext3:"Բացահայտիր",
Tourtomiami:"ՏՈՒՐ ԴԵՊԻ ՄԱՅԱՄԻ",
Pricemiami:"Գինը՝ 1.500 USD",
Durationmiami:"ՏԵՎՈՂՈՒԹՅՈՒՆԸ",
Groupsizemiami:"ՔԱՆԱԿԸ",
Accommondationmiami:"Բնակության Վայր",
Bestperiodmiami:"ԼԱՎ ՍԵԶՈՆ",
Startendmiami:"ՍԿԻԶԲ/ԱՎԱՐՏ",
Sevendaysmiami:"8օր/7գիշեր",
Hotelmiami:"ՀՅՈՒՐԱՆՈՑ",
Summermiami:"ԱՄԱՌ",
Yerevanmiami:"Երևան/Երևան",
Descriptionmiami:"Նկարագիր",
Maindescriptionmiami:"Բարի գալուստ Մայամի 1920-ականներից ի վեր, Miami Beach-ը հոմանիշ է եղել զվարճանքի և արևի: 12 բլոկ երկարությամբ և 12 բլոկների լայնությամբ Հարավային լողափը կատարյալ վայր է զբոսանքի համար: Բուտիկների, ռեստորանների, բարերի, ակումբների, թանգարանների և, իհարկե, ավազոտ լողափերի հետ դուք երբեք չեք ձանձրանա:",
Priceincludesmiami:"Գինը Ներառում է",
Hotelmiami:"Հյուրանոց:Crystal Beach Suites Miami",
Airticketsmiami:"Ավիատոմսեր",
Excrusionsmiami:"Էքսկուրսիաներ",
Transfermiami:"Տրանսֆեր՝ Օդանավակայան – Հյուրանոց – Օդանավակայան",
Foodmiami:"Նախաճաշ, ճաշ, ընթրիք",
Insurancemiami:"Ապահովագրություն",
Offerbestservice:"Մենք առաջարկում ենք լավագույն ծառայություն",
Offerbestservice2:"Մենք միշտ ուրախացնում ենք մեր հաճախորդին` ապահովելով հնարավորինս շատ ընտրություն",
Moreinfo:"Ավելին",
Besttour:"Լավագույն էքսկուրսավար",
Safeholidays:"Անվտանգ արձակուրդներ՝ 24/7 աջակցությամբ: Պլանավորեք երկար հանգստյան օրերը մեր լավագույն ծառայություններով.",
Easybooking:"Հեշտ ամրագրում",
Tickets:"Տոմսերի հեշտ և արագ գնումներով: Ոլորտի լավագույն գործարքներն ու առաջարկները.",
Excellentrest:"Գերազանց հանգիստ",
Withus:"Մեզ հետ ձեր հանգիստը կլինի խորհրդավոր և հիասքանչ",
Customers:"Հաճախորդներ",
Experience:"Տարվա Փորձ",
Partners:"Գործընկեր",
Tours:"Տուրեր",
Happyface:"Ուրախ Դեմքեր"


}
const translationsRus = {
  Miami:"Майами",
  Newyork:"Нью-Йорк",
  Baltimore:"Балтимор",
  About:"О Нас",
  Contact:"Кантакт",
  exploretext1:"Исследуйте новый мир",
  exploretext2:"Независимо от того, куда вы хотите отправиться, мы можем помочь вам добраться туда",
  exploretext3:"Исследовать",
  Tourtomiami:"ТУР В МАЙАМИ",
  Pricemiami:"Цена: 1.500 USD",
  Groupsizemiami:"КОЛ.ЧЕЛОВЕК",
  Accommondationmiami:"ПРОЖИВАНИЕ",
  Bestperiodmiami:"ЛУЧШИЙ ПЕРИОД",
  Startendmiami:"НАЧАЛО/КОНЕЦ",
  Sevendaysmiami:"8 дней/7 ночей",
  Hotelmiami:"ОТЕЛЬ",
  Summermiami:"Лето",
  Yerevanmiami:"Ереван/Ереван",
  Descriptionmiami:"Описание",
  Maindescriptionmiami:"Добро пожаловать в Майами с 1920-х годов, Майами-Бич был синонимом иронии и неожиданного солнечного света. 12 кварталов в длину и 12 кварталов в ширину, Саут-Бич — идеальное место для прогулок. С бутиками, ресторанами, барами, клубами, музеями и, конечно же, песчаными пляжами вам никогда не будет скучно.",
  Priceincludesmiami:"Цена включает",
  Hotelmiami:"Отель:Crystal Beach Suites Miami",
  Airticketsmiami:"Авиабилеты",
  Excrusionsmiami:"Экскурсии",
  Transfermiami:"Трансфер: Аэропорт - Отель - Аэропорт",
  Foodmiami:"Завтрак, Обед, Ужин",
  Insurancemiami:"Страхование",
  Offerbestservice:"Мы предлагаем лучший сервис",
  Offerbestservice2:"Мы всегда делаем наших клиентов счастливыми, предоставляя как можно больше вариантов",
  Moreinfo:'Больше',
  Besttour:"Лучший гид",
  Safeholidays:"Безопасный отдых с гарантированным пребыванием, чистыми такси и круглосуточной поддержкой. Составьте план на длинные выходные с нашими лучшими услугами.",
  Easybooking:"Легкое бронирование",
  Tickets:"Благодаря простой и быстрой покупке билетов. Лучшие предложения и предложения в отрасли.",
  Excellentrest:"Отличный отдых",
  Withus:"С нами ваш отдых будет загадочным и прекрасным",
  Customers:"Клиенты",
  Experience:"Год опыта",
  Partners:"Партнер",
  Tours:"Экскурсии",
  Happyface:"Счастливое лицо"
  }


  /////resources ends///
i18n
.use (initReactI18next)
.init({
  resources:{
    en:{translation:translationsEng},
    arm:{translation:translationsArm},
    rus:{translation:translationsRus},
  },
  lng:"en",
  fallbackLng:"en",
  interpolation:{
    escapeValue:false},
});


const onChange = (event) =>{
  i18n.changeLanguage(event.target.value);
}

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <Suspense fallback="Loading...">
   
    <div className='Navigation'>
          <Link to='/'><div className='logoNavigation'> .</div></Link>
          <Link to='/miami'><div  className='miamiNavigation'>  | &nbsp; &nbsp; &nbsp; &nbsp;{t('Miami')}</div></Link>
          <Link to='/newyork'><div  className='newyorkNavigation'>| &nbsp; &nbsp; &nbsp; &nbsp;{t('Newyork')}</div></Link>
          <Link to='/baltimore'><div  className='baltimoreNavigation'>| &nbsp; &nbsp; &nbsp; &nbsp;{t('Baltimore')}</div></Link>
          <Link to='/about'><div  className='aboutNavigation'>| &nbsp; &nbsp; &nbsp; &nbsp;{t('About')}</div></Link>
          <Link to='/contact'><div  className='contactNavigation'>| &nbsp; &nbsp; &nbsp; &nbsp;{t('Contact')}</div></Link>
          <div  className='languageNavigation'>
          <select className='languageSwitcher'  name='language' onChange={onChange}>
          <option value="en">ENG</option>
          <option value="arm">ARM</option>
          <option value="rus">RUS</option>
          </select>
          </div>


  
    </div>
     </Suspense>
    
   
  )
}

export default Navigation
