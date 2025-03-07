import i18n from 'roddeh-i18n';

import en from './locales/en';
import es from './locales/es';

// TODO: eventually get the language from the user I guess?
const USER_LANGUAGE = "es";

const LOCALES = {
  en: en,
  es: es,
}

const I18N = (() => {
  i18n.translator.add({
    values: LOCALES[USER_LANGUAGE],
  });

  return i18n;
})();

export default I18N;