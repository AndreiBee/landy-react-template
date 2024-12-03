import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet"; // Import Helmet
import AboutContent from "../../content/AboutPageContent.json";

const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const About = () => {
  const { i18n } = useTranslation(); // Hook to use translations
  const currentLanguage = i18n.language as "en" | "cs"; // Assert the language type explicitly

  return (
    <>
    <Helmet>
      <title>{`About | ${
        currentLanguage === "en" ? "About Us" : "O nás"
      }`}</title>
      <meta
        name="description"
        content={
          currentLanguage === "en"
            ? "Learn more about our company and team."
            : "Zjistěte více o naší společnosti a týmu."
        }
      />
    </Helmet>
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
        button={AboutContent[currentLanguage].button}
        withButtons={true}
        icon="target-opt.svg"
        id="thirdSection"
      />
    </Container> 
    </>
  );
};

export default About;
