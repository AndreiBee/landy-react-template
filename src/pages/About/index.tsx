import { lazy } from "react";
import { useTranslation } from "react-i18next";
import PageMeta from "../../components/PageMeta";
import { getLanguage } from "../../translation";
import AboutContent from "../../content/AboutPageContent.json";

const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const About = () => {
  const { i18n } = useTranslation(); // Hook to use translations
  const currentLanguage = getLanguage(i18n.language);

  return (
    <>
    <PageMeta page="about" />
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="left"
        title={AboutContent[currentLanguage].title1}
        content={AboutContent[currentLanguage].text1}
        withButtons={false}
        icon="teamwork.png"
        id="firstSection"
      />
      <ContentBlock
        direction="right"
        title={AboutContent[currentLanguage].title2}
        content={AboutContent[currentLanguage].text2}
        withButtons={false}
        icon="investment-opt.png"
        id="secondSection"
      />
      <ContentBlock
        direction="left"
        title={AboutContent[currentLanguage].title3}
        content={AboutContent[currentLanguage].text3}
        button={AboutContent[currentLanguage].button}
        withButtons={true}
        icon="target-opt.png"
        id="thirdSection"
      />
    </Container> 
    </>
  );
};

export default About;
