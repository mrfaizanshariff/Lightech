'use client';

import { Noto_Kufi_Arabic } from 'next/font/google';
import localFont from 'next/font/local';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

const Bahnschrift = localFont({
    src: '../public/fonts/Bahnschrift.ttf',
    display: 'swap',
  });
  const noto_kufi = Noto_Kufi_Arabic({subsets:['arabic']})

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {}
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Update document direction based on language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    document.body.className = language === 'en' ? Bahnschrift.className: noto_kufi.className
  }, [language]);


  return (
    <LanguageContext.Provider value={{ language, setLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);