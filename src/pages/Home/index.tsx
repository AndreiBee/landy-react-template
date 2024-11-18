import { lazy } from "react";
import { useTranslation } from "react-i18next";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  const { t, i18n } = useTranslation(); // Hook to use translations
  const currentLanguage = i18n.language as "en" | "cs"; // Assert the language type explicitly

  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent[currentLanguage].title}
        content={IntroContent[currentLanguage].text}
        button={IntroContent[currentLanguage].button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent[currentLanguage].title}
        content={MiddleBlockContent[currentLanguage].text}
        button={MiddleBlockContent[currentLanguage].button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent[currentLanguage].title}
        content={AboutContent[currentLanguage].text}
        section={AboutContent[currentLanguage].section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent[currentLanguage].title}
        content={MissionContent[currentLanguage].text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={ProductContent[currentLanguage].title}
        content={ProductContent[currentLanguage].text}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent[currentLanguage].title}
        content={ContactContent[currentLanguage].text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
