import i18n from "roddeh-i18n";

import en from "./locales/en";
import es from "./locales/es";

// TODO: eventually get the language from the user I guess?
const USER_LANGUAGE = "es";

const LOCALES = {
  en: en,
  es: es,
};

const flattenObject: any = (obj: any, prefix: string, res: any) => {
  res ||= {};
  Object.keys(obj).forEach((key) => {
    const newKey = `${prefix ? `${prefix}_` : ""}${key}`;
    const val = obj[key];

    if (typeof val == "object") {
      flattenObject(val, newKey, res);
    } else {
      res[newKey] = val;
    }
  });

  return res;
};

const I18N = (() => {
  i18n.translator.add({
    values: flattenObject(LOCALES[USER_LANGUAGE], ""),
  });

  // TODO: pass an object to i18n to use formatting
  return (key: string) => i18n(key.replace(/\./g, "_"));
})();

export default I18N;
