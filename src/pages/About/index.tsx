import { lazy } from "react";
import { useTranslation } from "react-i18next";
import AboutContent from "../../content/AboutPageContent.json";

const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const About = () => {
  const { i18n } = useTranslation(); // Hook to use translations
  const currentLanguage = i18n.language as "en" | "cs"; // Assert the language type explicitly

  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="left"
        title={AboutContent[currentLanguage].title1}
        content={AboutContent[currentLanguage].text1}
        withButtons={false}
        icon="teamwork.svg"
        id="firstSection"
      />
      <ContentBlock
        direction="right"
        title={AboutContent[currentLanguage].title2}
        content={AboutContent[currentLanguage].text2}
        withButtons={false}
        icon="investment-opt.svg"
        id="secondSection"
      />
      <ContentBlock
        direction="left"
        title={AboutContent[currentLanguage].title3}
        content={AboutContent[currentLanguage].text3}
        withButtons={false}
        icon="target-opt.svg"
        id="thirdSection"
      />
    </Container> 
  );
};

export default About;
