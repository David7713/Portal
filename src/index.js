import React , { Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 {/* <Suspense fallback="Loading..."> */}
    <App />
    {/* </Suspense> */}
  </React.StrictMode>
);
