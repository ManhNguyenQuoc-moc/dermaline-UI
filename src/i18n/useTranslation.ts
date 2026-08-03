import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { en } from './locales/en';
import { kr } from './locales/kr';
import { vie } from './locales/vie';

export type LanguageType = 'EN' | 'KR' | 'VIE';

interface LanguageState {
  lang: LanguageType;
  setLang: (lang: LanguageType) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      lang: 'EN',
      setLang: (lang: LanguageType) => set({ lang }),
    }),
    {
      name: 'dermaline_language_store',
    }
  )
);

const dictionaries = {
  EN: en,
  KR: kr,
  VIE: vie,
};

export function useTranslation() {
  const { lang, setLang } = useLanguageStore();
  const t = dictionaries[lang] || dictionaries.EN;

  return {
    t,
    lang,
    setLang,
  };
}
