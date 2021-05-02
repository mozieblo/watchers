import setAppLang from './index';

describe('Translations', () => {
    it('should set language to en by default', () => {
        const language = '';
        expect(setAppLang(language)).toEqual('en');
    });

    it('should change language to pl if browser language is set to pl', () => {
        expect(setAppLang('pl')).toEqual('pl');
    });
});
