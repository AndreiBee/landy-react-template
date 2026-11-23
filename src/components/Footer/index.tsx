import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLocalizedPath } from "../../common/utils/localize";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  // Empty,
  FooterContainer,
  Language,
  Label,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
  label: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const lp = useLocalizedPath();
  const SocialLink = ({ href, src, label }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={label}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              {/* <Large to="/">{t("Tell us everything")}</Large> */}
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:arvioncz@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={10} md={10} sm={12} xs={12}>
              {/* <Empty /> */}
              <Language>{t("Address")}</Language>
              <Para>{t("AddressLine1")}</Para>
              <Para>{t("AddressLine2")}</Para>
            </Col>
            {/* <Col lg={8} md={8} sm={12} xs={12}> */}
              {/* <Title>{t("Policy")}</Title> */}
              {/* <Large to="/">{t("Application Security")}</Large> */}
              {/* <Large to="/">{t("Software Principles")}</Large> */}
            {/* </Col> */}
            {/* <Col lg={6} md={6} sm={12} xs={12}> */}
              {/* <Empty /> */}
              {/* <Large to="/">{t("Support Center")}</Large> */}
              {/* <Large to="/">{t("Customer Support")}</Large> */}
            {/* </Col> */}
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              {/* <Large to="/">{t("About")}</Large> */}
              {/* <Large to="/price">{t("Price List")}</Large> */}
              <Large to={lp("/career")}>{t("Career")}</Large>
              <Large to={lp("/contact")}>{t("Contact")}</Large>
              <Large to={lp("/about")}>{t("About")}</Large>
              <Large to={lp("/blog")}>{t("Blog")}</Large>
              <Large to={lp("/privacy")} style={{ textTransform: "none" }}>
                {t("Privacy Policy")}
              </Large>
              {/* <Large to="/">{t("Press")}</Large> */}
              {/* <Large to="/">{t("Careers & Culture")}</Large> */}
            </Col>
            <Col lg={10} md={10} sm={12} xs={12}>
              <Label as="div">{t("Language")}</Label>
              <LanguageSwitcher gap="25px" edge="0" />
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between" // Rozdělí logo a sociální sítě na opačné strany
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            {/* Logo vlevo */}
            <Col style={{
              // display: "flex", // Nastaví flexbox
              // flexDirection: "column", // Zarovná prvky vertikálně
              // justifyContent: "center", // Vertikální zarovnání na střed
              // alignItems: "flex-start", // Horizontální zarovnání doleva (volitelné)
            }}>
              <NavLink to={lp("/")}>
                <LogoContainer>
                  <SvgIcon
                    src="logo-opt.svg"
                    aria-label="homepage"
                    width="70%"
                    height="auto"
                  />
                </LogoContainer>
              </NavLink>
            </Col>

            {/* Sociální sítě vpravo */}
            <Col style={{ textAlign: "right" }}>
              <FooterContainer>
                <SocialLink
                  href="https://www.linkedin.com/company/arvioncz"
                  src="linkedin.svg"
                  label="LinkedIn"
                />
                <SocialLink
                  href="https://www.facebook.com/arvioncz/"
                  src="facebook.svg"
                  label="Facebook"
                />
              </FooterContainer>
            </Col>
          </Row>
 
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
