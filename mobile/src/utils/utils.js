import {Platform, NativeModules} from 'react-native';

export  const getLanguageByDevice = () => {
    return Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale // Adquire o idioma no device iOS
      : NativeModules.I18nManager.localeIdentifier // Adquire o idioma no device Android
}

const normalizeTranslate = {
    en_US: {format: 'USD', currency: 'USD'},
    pt_BR: {format: 'pt-BR', currency: 'BRL'},
    
    en: {format: 'USD', currency: 'USD'},
    pt_US: {format: 'pt-BR', currency: 'BRL'},
};

export const currencyFormatting = (value) =>{
    const language  = getLanguageByDevice();    
    let languageFormat = normalizeTranslate[language];    
    if(languageFormat == undefined){        
        languageFormat =   normalizeTranslate['en'];       
    }               
    return Intl.NumberFormat(languageFormat.format, { style: 'currency', currency: languageFormat.currency }).format(value);    
}