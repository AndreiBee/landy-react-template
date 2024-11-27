import { lazy } from "react";
import { useTranslation } from "react-i18next";
import CareerPageContent from "../../content/CareerPageContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const PositionBlock = lazy(() => import("../../components/PositionBlock"));

const Career = () => {
  const { i18n } = useTranslation(); // Hook to use translations
  const currentLanguage = i18n.language as "en" | "cs"; // Assert the language type explicitly

  return (
    <Container>
      <ScrollToTop />
      <PositionBlock
        direction="left"
        title={CareerPageContent[currentLanguage].title1}
        content={CareerPageContent[currentLanguage].text1}
        requirements={CareerPageContent[currentLanguage].requirements1}
        offer={CareerPageContent[currentLanguage].offer1}
        button={CareerPageContent[currentLanguage].button}
        withButtons={true}
        icon="programmer.svg"
        id="firstSection"
      />
      <PositionBlock
        direction="right"
        title={CareerPageContent[currentLanguage].title2}
        content={CareerPageContent[currentLanguage].text2}
        requirements={CareerPageContent[currentLanguage].requirements2}
        offer={CareerPageContent[currentLanguage].offer2}
        button={CareerPageContent[currentLanguage].button}
        withButtons={true}
        icon="project_manager.svg"
        id="secondSection"
      />
    </Container> 
  );
};

export default Career;
