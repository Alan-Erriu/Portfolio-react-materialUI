import { IntlProvider } from "react-intl";
import { useState, createContext } from "react";
import enUS from "../laguages/en-US.json";
import esMX from "../laguages/es-MX.json";

const LanguagesContext = createContext();

const LanguagesProvider = ({ children }) => {
  const [locale, setlocale] = useState("es-MX");
  const [message, setmessage] = useState(esMX);
const changeLangToEs =()=>{
    setlocale("es-MX")
    setmessage(esMX)
    

}
const changeLangToEn =()=>{
    setlocale("en-US")
    setmessage(enUS)
   

}

  return (
    <IntlProvider locale={locale} messages={message}>
      <LanguagesContext.Provider value={{changeLangToEs,changeLangToEn}}>{children}</LanguagesContext.Provider>
    </IntlProvider>
  );
};


export {LanguagesContext,LanguagesProvider } ;

