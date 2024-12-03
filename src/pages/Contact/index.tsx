import { lazy } from "react";
import { useTranslation } from "react-i18next";
import ContactPageContent from "../../content/ContactPageContent.json";
import ContactFormContent from "../../content/HomePageContactContent.json";

const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContactForm = lazy(() => import("../../components/ContactForm"));

const Contact = () => {
  const { i18n } = useTranslation(); // Hook to use translations
  const currentLanguage = i18n.language as "en" | "cs"; // Assert the language type explicitly

  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="left"
        title={ContactPageContent[currentLanguage].title1}
        content={ContactPageContent[currentLanguage].text1}
        withButtons={false}
        icon="contact.svg"
        id="firstSection"
      />
      <ContentBlock
        direction="right"
        title={""}
        content={ContactPageContent[currentLanguage].text2}
        withButtons={false}
        icon="support.svg"
        id="secondSection"
      />
      <ContentBlock
        direction="left"
        title={""}
        content={ContactPageContent[currentLanguage].text3}
        withButtons={false}
        icon="contact_form-opt.svg"
        id="secondSection"
      />
      <ContactForm
        title={ContactFormContent[currentLanguage].title}
        content={ContactFormContent[currentLanguage].text}
        phone={ContactFormContent[currentLanguage].phone}
        email={ContactFormContent[currentLanguage].email}
        in_number={ContactFormContent[currentLanguage].in_number}
        id="contact"
      />
     
    </Container> 
  );
};

export default Contact;
