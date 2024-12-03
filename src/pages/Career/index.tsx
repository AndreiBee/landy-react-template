import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet"; // Import Helmet
import CareerPageContent from "../../content/CareerPageContent.json";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const PositionBlock = lazy(() => import("../../components/PositionBlock"));

const Career = () => {
  const { i18n } = useTranslation(); // Hook to use translations
  const currentLanguage = i18n.language as "en" | "cs"; // Assert the language type explicitly

  return (
    <>
    <Helmet>
      <title>{`Career | ${
        currentLanguage === "en" ? "Join Our Team" : "Přidejte se k nám"
      }`}</title>
      <meta
        name="description"
        content={
          currentLanguage === "en"
            ? "Explore career opportunities and join our growing team."
            : "Prozkoumejte pracovní příležitosti a připojte se k našemu týmu."
        }
      />
    </Helmet>
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
    </>
  );
};

export default Career;
