import React from "react";
import { useTranslation } from "react-i18next";
import { MEDFLOW_LANGUAGES } from "../i18n";

export default function LanguageSwitcher({ setForm }) {
  const { i18n, t } = useTranslation();
  const selectedCode = MEDFLOW_LANGUAGES.some(({ code }) => code === i18n.language)
    ? i18n.language
    : "en-IN";

  const handleChange = (event) => {
    const selectedLanguage = MEDFLOW_LANGUAGES.find(
      (language) => language.code === event.target.value
    );

    if (!selectedLanguage) return;

    // Only the static UI language changes here. The readable language name is
    // kept for the established Sarvam STT mapping in the intake flow.
    i18n.changeLanguage(selectedLanguage.code);

    if (setForm) {
      setForm((previous) => ({
        ...previous,
        language: selectedLanguage.name,
      }));
    }
  };

  return (
    <select
      className="language-btn"
      value={selectedCode}
      onChange={handleChange}
      aria-label={t("platform.language")}
    >
      {MEDFLOW_LANGUAGES.map((language) => (
        <option key={language.code} value={language.code}>
          {language.name}
        </option>
      ))}
    </select>
  );
}
