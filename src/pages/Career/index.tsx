import { lazy } from "react";
import { useTranslation } from "react-i18next";
import CareerPageContent from "../../content/CareerPageContent.json";
// import MiddleBlockContent from "../../content/MiddleBlockContent.json";
// import AboutContent from "../../content/AboutContent.json";
// import MissionContent from "../../content/MissionContent.json";
// import ProductContent from "../../content/ProductContent.json";
// import ContactContent from "../../content/ContactContent.json";

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
        withButtons={false}
        icon="programmer.svg"
        id="firstSection"
      />
      <PositionBlock
        direction="right"
        title={CareerPageContent[currentLanguage].title2}
        content={CareerPageContent[currentLanguage].text2}
        requirements={CareerPageContent[currentLanguage].requirements2}
        offer={CareerPageContent[currentLanguage].offer2}
        withButtons={false}
        icon="project_manager.svg"
        id="secondSection"
      />
      {/* <MiddleBlock
        title={MiddleBlockContent[currentLanguage].title}
        section={MiddleBlockContent[currentLanguage].section}
      /> */}
      {/* <ContentBlock
        direction="left"
        title={MissionContent[currentLanguage].title}
        content={MissionContent[currentLanguage].text}
        section={MissionContent[currentLanguage].section}
        icon="programmer-working-with-team.svg"
        id="mission"
      /> */}
      {/* <ContentBlock
        direction="left"
        title={ProductContent[currentLanguage].title}
        content={ProductContent[currentLanguage].text}
        icon="waving.svg"
        id="product"
      /> */}
      {/* <Contact
        title={ContactContent[currentLanguage].title}
        content={ContactContent[currentLanguage].text}
        phone={ContactContent[currentLanguage].phone}
        email={ContactContent[currentLanguage].email}
        id="contact"
      />
      */}
    </Container> 
  );
};

export default Career;
