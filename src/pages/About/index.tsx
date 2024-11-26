import { lazy } from "react";
import { useTranslation } from "react-i18next";
import AboutContent from "../../content/AboutPageContent.json";
// import MiddleBlockContent from "../../content/MiddleBlockContent.json";
// import AboutContent from "../../content/AboutContent.json";
// import MissionContent from "../../content/MissionContent.json";
// import ProductContent from "../../content/ProductContent.json";
// import ContactContent from "../../content/ContactContent.json";

// const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
// const TableBlock = lazy(() => import("../../components/TableBlock"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
// const Contact = lazy(() => import("../../components/ContactForm"));

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

export default About;
