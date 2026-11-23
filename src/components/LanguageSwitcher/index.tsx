import { useTranslation } from "react-i18next";
import { getLanguage, Language, setLanguage } from "../../translation";
import { SwitchGroup, SwitchButton } from "./styles";

const OPTIONS: { lang: Language; flag: string; label: string }[] = [
  { lang: "cs", flag: "czech-republic.svg", label: "Čeština" },
  { lang: "en", flag: "united-states.svg", label: "English" },
];

interface LanguageSwitcherProps {
  gap?: string;
  edge?: string;
}

const LanguageSwitcher = ({ gap = "20px", edge = "10px" }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();
  const current = getLanguage(i18n.language);

  return (
    <SwitchGroup role="group" aria-label={t("Language")} $gap={gap} $edge={edge}>
      {OPTIONS.map(({ lang, flag, label }) => (
        <SwitchButton
          key={lang}
          type="button"
          lang={lang}
          aria-label={label}
          aria-pressed={current === lang}
          title={label}
          onClick={() => setLanguage(lang)}
        >
          <img src={`/img/svg/${flag}`} alt="" width="30" height="30" />
        </SwitchButton>
      ))}
    </SwitchGroup>
  );
};

export default LanguageSwitcher;
