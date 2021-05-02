import en from './locale/en.json';
import pl from './locale/pl.json';
import { Json } from '../types/translations/translations';

export const messages: Json = {
    en,
    pl
};

const language = navigator.language.split(/[-_]/)[0];

export const appLang: string = setAppLang(language);

function setAppLang(language: string): string {
    switch (language) {
        case 'pl':
            return 'pl';
        default:
            return 'en';
    }
}

export default setAppLang;
