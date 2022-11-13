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
Duration:"DURATION",
Groupsize:"Group Size",
Accommondation:"Accommondation",
Bestperiod:"Best Period",
Startend:"Start/End",
Sevendaysmiami:"8Days/7Nights",
Hotelmiami:"Hotel",
Summermiami:"Summer",
Yerevanmiami:"Yerevan/Yerevan",
Descriptionbtn:"Description",
Maindescriptionmiami:"Welcome to Miami since the 1920s, Miami Beach has been synonymous with irony and unexpected sunshine. 12 blocks long and 12 blocks wide, South Beach is the perfect place to stroll.With boutiques, restaurants, bars, clubs, museums and, of course, sandy beaches, you will never be bored.",
Priceincludes:"Price Includes",
Hotelmiami:"Hotel:Crystal Beach Suites Miami",
Airtickets:"Airtickets",
Excrusions:"Excursions",
Transfer:"Transfer: Airport - Hotel - Airport",
Food:"Breakfast , Lunch, Dinner",
Insurance:"Insurance",
Offerbestservice:"We offer best service",
Offerbestservice2:"We always make our customer happy by providing as many choices as possible",
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
Happyface:"Happy Face",

// NEWYORK
Tourtonewyork:"TOUR TO NEW YORK",
Pricenewyork:"Price 3.000 USD",
Sevendaysnewyork:"7Days/6 Nights",
Hotelnewyork:" The Plaza Hotel  ",
Summernewyork:"Summer/Winter",
Yerevannewyork:"Yerevan/Yerevan",
Maindescriptionnewyork:"New York is a city of diversity and dynamism. It is also a city of politics, economy and culture. It is even described as the economic and cultural capital of the world, and New York City is one of the most populous cities in the United States.",
Hotelnewyork:"The Plaza Hotel",
// ABOUTUS

Aboutus:"About Us",
Webelieve:" WE BELIEVE TRAVEL IS A FORCE FOR GOOD",
Established:"Established in 2015,PORTAL  is a rapidly growing tour agency organizing full-service tours to United States Of America We are a team of enthusiastic professionals that believes in having a good time while doing what we love and we do love what we do. In 2021 we were recognized as the Best Travel Company according to Armenian Tourism award",
Advantages:"Our Advantages",
Diectandopen:"Direct and Open Communication",
Speed:"Speed",
Teamwork:"Teamwork",
Flexibility:"Flexibility and willingness to accept change",
Recognizing :"Recognizing and learning from mistakes",
Risk:"Risk-taking",
Quality:"Quality care",

//Baltimore
Tourtobaltimore:"TOUR TO BALTIMORE",
Pricebaltimore:"Price՝2.500 USD",
Sevendaysbaltimore:"7days/6 Night",
Hotelbaltimore:" Wingate by Wyndham  ",
Summerbaltimore:"Summer/Winter",
Yerevanbaltimore:"Yerevan/Yerevan",
Maindescriptionbaltimore:"Hotels, restaurants, attractions and other businesses across Baltimore are coming together to show the world that Charm City is committed to supporting and embracing diversity, equity and inclusion, and fostering a welcoming environment for ALL travelers, no matter who they are or where they come from.",


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
Duration:"ՏԵՎՈՂՈՒԹՅՈՒՆԸ",
Groupsize:"ՔԱՆԱԿԸ",
Accommondation:"Բնակության Վայր",
Bestperiod:"ԼԱՎ ՍԵԶՈՆ",
Startend:"ՍԿԻԶԲ/ԱՎԱՐՏ",
Sevendaysmiami:"8օր/7գիշեր",
Hotelmiami:"ՀՅՈՒՐԱՆՈՑ",
Summermiami:"ԱՄԱՌ",
Yerevanmiami:"Երևան/Երևան",
Descriptionbtn:"Նկարագիր",
Maindescriptionmiami:"Բարի գալուստ Մայամի 1920-ականներից ի վեր, Miami Beach-ը հոմանիշ է եղել զվարճանքի և արևի: 12 բլոկ երկարությամբ և 12 բլոկների լայնությամբ Հարավային լողափը կատարյալ վայր է զբոսանքի համար: Բուտիկների, ռեստորանների, բարերի, ակումբների, թանգարանների և, իհարկե, ավազոտ լողափերի հետ դուք երբեք չեք ձանձրանա:",
Priceincludes:"Գինը Ներառում է",
Hotelmiami:"Հյուրանոց:Crystal Beach Suites Miami",
Airtickets:"Ավիատոմսեր",
Excrusions:"Էքսկուրսիաներ",
Transfer:"Տրանսֆեր՝ Օդանավակայան – Հյուրանոց – Օդանավակայան",
Food:"Նախաճաշ, ճաշ, ընթրիք",
Insurance:"Ապահովագրություն",
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
Happyface:"Ուրախ Դեմքեր",
// NEWYORK
Tourtonewyork:"ՏՈՒՐ ԴԵՊԻ ՆՅՈՒ-ՅՈՐՔ",
Pricenewyork:"Գինը՝3.000 USD",
Sevendaysnewyork:"7Оր/6 Գիշեր",
Hotelnewyork:" The Plaza Hotel  ",
Summernewyork:"Ամառ/Ձմեռ",
Yerevannewyork:"Երևան/Երևան",
Maindescriptionnewyork:"Նյու Յորքը բազմազանության և դինամիկայի քաղաք է: Այն նաև քաղաքականության, տնտեսության և մշակույթի քաղաք է: Այն նույնիսկ նկարագրվում է որպես աշխարհի տնտեսական և մշակութային մայրաքաղաք, իսկ Նյու Յորքը ԱՄՆ-ի ամենախիտ բնակեցված քաղաքներից մեկն է։",
  // About
Aboutus:"Մեր Մասին",
Webelieve:"ՄԵՆՔ ՀԱՎԱՏՈՒՄ ԵՆՔ, ՃԱՄՓՈՐԴՈՒԹՅՈՒՆԸ ՈՒԺ Է",
Established:"PORTAL-ը հիմնադրվել է 2015 թվականին, արագ զարգացող տուրիստական գործակալություն է, որը կազմակերպում է ամբողջական սպասարկման շրջագայություններ դեպի Ամերիկայի Միացյալ Նահանգներ Մենք խանդավառ մասնագետների թիմ ենք, որը հավատում է լավ ժամանակ անցկացնելուն՝ անելով այն, ինչ սիրում ենք, և մենք իսկապես սիրում ենք այն, ինչ անում ենք: 2021 թվականին մենք ճանաչվել ենք «Լավագույն տուրիստական ընկերություն» հայկական զբոսաշրջության մրցանակի համաձայն։",
Advantages:"Մեր առավելությունները",
Diectandopen:"Ուղղակի և բաց հաղորդակցություն",
Speed:"Արագություն",
Teamwork:"Թիմային աշխատանք",
Flexibility:"Ճկունություն և փոփոխություն ընդունելու պատրաստակամություն",
Recognizing :"Սխալների ճանաչում և սովորում",
Risk:"Ռիսկի ընդունում",
Quality:"Որակյալ խնամք",

//Baltimore
Tourtobaltimore:"ՏՈՒՐ ԴԵՊԻ ԲԱԼԹԻՄՈՐ",
Pricebaltimore:"Գինը՝2.500 USD",
Sevendaysbaltimore:"7Оր/6 Գիշեր",
Hotelbaltimore:" Wingate by Wyndham  ",
Summerbaltimore:"Ամառ/Ձմեռ",
Yerevanbaltimore:"Երևան/Երևան",
Maindescriptionbaltimore:"Հյուրանոցները, ռեստորանները, տեսարժան վայրերը և այլ բիզնեսները Բալթիմորում հավաքվում են՝ ցույց տալու աշխարհին, որ Charm City-ն հավատարիմ է բազմազանությանը, հավասարությանը և ընդգրկմանը աջակցելուն և ընդգրկելուն և խրախուսելու հյուրընկալ միջավայր ԲՈԼՈՐ ճանապարհորդների համար՝ անկախ նրանից, թե ովքեր են նրանք և որտեղիցեն նրանք գալիս",

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
  Duration:"ДЛИ́ТЕЛЬНОСТЬ",
  Pricemiami:"Цена: 1.500 USD",
  Groupsize:"КОЛ.ЧЕЛОВЕК",
  Accommondation:"ПРОЖИВАНИЕ",
  Bestperiod:"ЛУЧШИЙ ПЕРИОД",
  Startend:"НАЧАЛО/КОНЕЦ",
  Sevendaysmiami:"8 дней/7 ночей",
  Hotelmiami:"ОТЕЛЬ",
  Summermiami:"Лето",
  Yerevanmiami:"Ереван/Ереван",
  Descriptionbtn:"Описание",
  Maindescriptionmiami:"Добро пожаловать в Майами с 1920-х годов, Майами-Бич был синонимом иронии и неожиданного солнечного света. 12 кварталов в длину и 12 кварталов в ширину, Саут-Бич — идеальное место для прогулок. С бутиками, ресторанами, барами, клубами, музеями и, конечно же, песчаными пляжами вам никогда не будет скучно.",
  Priceincludes:"Цена включает",
  Hotelmiami:"Отель:Crystal Beach Suites Miami",
  Airtickets:"Авиабилеты",
  Excrusions:"Экскурсии",
  Transfer:"Трансфер: Аэропорт - Отель - Аэропорт",
  Food:"Завтрак, Обед, Ужин",
  Insurance:"Страхование",
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
  Happyface:"Счастливое лицо",
  // NEWYORK
  Tourtonewyork:"ТУР В НЬЮ-ЙОРК",
  Pricenewyork:"Цена:3.000 USD",
  Sevendaysnewyork:"7 дней/6 ночей",
  Hotelnewyork:" The Plaza Hotel  ",
  Summernewyork:"Лето/Зима",
  Yerevannewyork:"Ереван/Ереван",
  Maindescriptionnewyork:"Нью-Йорк — город разнообразия и динамичности. Это также город политики, экономики и культуры. Его даже называют экономической и культурной столицей мира, а Нью-Йорк — одним из самых густонаселенных городов США.",

  // About
  Aboutus:"О нас",
  Webelieve:"МЫ ВЕРИМ, ЧТО ПУТЕШЕСТВИЯ - ЭТО СИЛА ДОБРА",
  Established:"PORTAL, основанная в 2015 году, является быстрорастущим туристическим агентством, организующим туры с полным спектром услуг в Соединенные Штаты Америки  Мы команда увлеченных профессионалов, которые верят в то, что хорошо проводят время, занимаясь любимым делом, и мы действительно любим то, что делаем. В 2021 году мы были признаны лучшей туристической компанией по версии Армянской туристической премии.",
  Advantages:"Наши преимущества",
  Diectandopen:"Прямое и открытое общение",
  Speed:"Скорость",
  Teamwork:"Командная работа",
  Flexibility:"Гибкость и готовность к изменениям",
  Recognizing :"Признание и обучение на ошибках",
  Risk:"Рисковать",
  Quality:"Качественный уход",

 //Baltimore
  Tourtobaltimore:"ТУР В БАЛТИМОР",
Pricebaltimore:"Цена:2.500 USD",
Sevendaysbaltimore:"7 дней/6 ночей",
Hotelbaltimore:" Wingate by Wyndham ",
Summerbaltimore:"Лето/Зима",
Yerevanbaltimore:"Ереван/Ереван",
Maindescriptionbaltimore:"Отели, рестораны, аттракционы и другие предприятия по всему Балтимору собираются вместе, чтобы показать миру, что Charm City стремится поддерживать и принимать разнообразие, справедливость и инклюзивность, а также создавать благоприятную среду для ВСЕХ путешественников, независимо от того, кто они и откуда они. из.",
  
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
          <Link to='/'><div className='logoNavigation'>. </div></Link>
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
