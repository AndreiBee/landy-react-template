import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet"; // Import Helmet
import IntroContent from "../../content/HomePageIntroContent.json";
import MiddleBlockContent from "../../content/HomePageMiddleBlockContent.json";
import AboutContent from "../../content/HomePageAboutContent.json";
import MissionContent from "../../content/HomePageMissionContent.json";
import ContactContent from "../../content/HomePageContactContent.json";

const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const Contact = lazy(() => import("../../components/ContactForm"));

const Home = () => {
  const { i18n } = useTranslation(); // Hook to use translations
  const currentLanguage = i18n.language as "en" | "cs"; // Assert the language type explicitly

  return (
    <>
    <Helmet>
      <title>{`Home | ${
        currentLanguage === "en" ? "Welcome to Our Website" : "Vítejte na našem webu"
      }`}</title>
      <meta
        name="description"
        content={
          currentLanguage === "en"
            ? "Discover our services and solutions tailored to your needs."
            : "Objevte naše služby a řešení přizpůsobené vašim potřebám."
        }
      />
    </Helmet>
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent[currentLanguage].title}
        content={IntroContent[currentLanguage].text}
        button={IntroContent[currentLanguage].button}
        withButtons={true}
        icon="team-of-programmers-opt.png"
        id="intro"
      />
      <ContentBlock
        direction="left"
        title={AboutContent[currentLanguage].title}
        content={AboutContent[currentLanguage].text}
        section={AboutContent[currentLanguage].section}
        withButtons={false}
        icon="programmer-working-on-computer-opt.png"
        id="about"
      />

      <ContentBlock
        direction="right"
        title={MissionContent[currentLanguage].title}
        content={MissionContent[currentLanguage].text}
        section={MissionContent[currentLanguage].section}
        withButtons={false}
        icon="programmer-working-with-team-opt.png"
        id="mission"
      />
      <MiddleBlock
        title={MiddleBlockContent[currentLanguage].title}
        section={MiddleBlockContent[currentLanguage].section}
      />
      <Contact
        title={ContactContent[currentLanguage].title}
        content={ContactContent[currentLanguage].text}
        phone={ContactContent[currentLanguage].phone}
        email={ContactContent[currentLanguage].email}
        in_number={ContactContent[currentLanguage].in_number}
        id="contact"
      />
    </Container>
    </>
  );
};

export default Home;
