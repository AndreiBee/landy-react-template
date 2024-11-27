import { lazy } from "react";
import { useTranslation } from "react-i18next";
import PriceContent from "../../content/PricePageContent.json";
// import MiddleBlockContent from "../../content/MiddleBlockContent.json";
// import AboutContent from "../../content/AboutContent.json";
// import MissionContent from "../../content/MissionContent.json";
// import ProductContent from "../../content/ProductContent.json";
// import ContactContent from "../../content/ContactContent.json";

// const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const TableBlock = lazy(() => import("../../components/TableBlock"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
// const Contact = lazy(() => import("../../components/ContactForm"));

const Price = () => {
  const { i18n } = useTranslation(); // Hook to use translations
  const currentLanguage = i18n.language as "en" | "cs"; // Assert the language type explicitly

  return (
    <Container>
      <ScrollToTop />
      <TableBlock
        direction="right"
        title={PriceContent[currentLanguage].title}
        columns={PriceContent[currentLanguage].columns}
        rows={PriceContent[currentLanguage].rows}
        priceNote={PriceContent[currentLanguage].priceNote}
        icon="payment-opt.svg"
        id="priceTable"
      />
      {/* <ContentBlock
        direction="left"
        title={AboutContent[currentLanguage].title}
        content={AboutContent[currentLanguage].text}
        section={AboutContent[currentLanguage].section}
        icon="programmer-working-on-computer.svg"
        id="about"
      /> */}
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

export default Price;
