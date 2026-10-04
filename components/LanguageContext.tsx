"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "zh" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLang: (l: Language) => void;
  t: (zh: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "zh",
  toggleLang: () => {},
  setLang: () => {},
  t: (zh: string) => zh,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("zh");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("site_lang") as Language;
      if (saved === "zh" || saved === "en") {
        setLangState(saved);
      }
    } catch (e) {
      // Ignore localStorage error
    }
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    try {
      localStorage.setItem("site_lang", l);
    } catch (e) {}
  };

  const toggleLang = () => {
    const next = lang === "zh" ? "en" : "zh";
    setLang(next);
  };

  const t = (zh: string, en: string) => {
    return lang === "zh" ? zh : en;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
