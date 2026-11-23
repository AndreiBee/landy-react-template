import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import CompanyInfo from "../../content/CompanyInfo.json";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLocalizedPath } from "../../common/utils/localize";
import { Container } from "../ui/layout";
import Icon from "../ui/Icon";

const { color, bp } = theme;

const Wrap = styled.footer`
  background: ${color.brandDeep};
  color: rgba(255, 255, 255, 0.7);
  padding: 72px 0 32px;
  font-size: 0.95rem;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);

  ${bp.md} {
    grid-template-columns: 1fr 1fr;
  }

  ${bp.sm} {
    grid-template-columns: 1fr;
  }
`;

const BrandCol = styled.div`
  display: grid;
  gap: 18px;
  align-content: start;

  img {
    width: 130px;
    height: auto;
    /* the logo is navy; show it white on the dark footer */
    filter: brightness(0) invert(1);
  }

  p {
    max-width: 300px;
    line-height: 1.6;
  }
`;

const Social = styled.div`
  display: flex;
  gap: 10px;

  a {
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    color: #fff;
    background: rgba(255, 255, 255, 0.08);
    transition: background 0.2s ease;
  }

  a:hover {
    color: #fff;
    background: ${color.accent};
  }
`;

const Col = styled.div`
  display: grid;
  gap: 12px;
  align-content: start;

  h3 {
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 6px;
  }

  a {
    color: rgba(255, 255, 255, 0.75);
    width: fit-content;
  }

  a:hover {
    color: #fff;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
  padding-top: 28px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);

  a {
    color: rgba(255, 255, 255, 0.7);
  }

  a:hover {
    color: #fff;
  }
`;

const Footer = () => {
  const { t } = useTranslation();
  const lp = useLocalizedPath();
  const year = new Date().getFullYear();

  return (
    <Wrap>
      <Container>
        <Top>
          <BrandCol>
            <Link to={lp("/")} aria-label={t("homeAria")}>
              <img src="/img/svg/logo-opt.svg" alt="Arvion" width="130" height="35" loading="lazy" />
            </Link>
            <p>{t("footerTagline")}</p>
            <Social>
              <a href="https://www.linkedin.com/company/arvioncz" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Icon name="linkedin" size={20} />
              </a>
              <a href="https://www.facebook.com/arvioncz/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Icon name="facebook" size={20} />
              </a>
            </Social>
          </BrandCol>

          <Col>
            <h3>{t("Company")}</h3>
            <Link to={`${lp("/")}#services`}>{t("Services")}</Link>
            <Link to={lp("/about")}>{t("About")}</Link>
            <Link to={lp("/career")}>{t("Career")}</Link>
            <Link to={lp("/blog")}>{t("Blog")}</Link>
          </Col>

          <Col>
            <h3>{t("Contact")}</h3>
            <a href={`mailto:${CompanyInfo.email}`}>{CompanyInfo.email}</a>
            <Link to={lp("/contact")}>{t("contactFormLink")}</Link>
            <span>
              {t("AddressLine1")}, {t("AddressLine2")}
            </span>
          </Col>

          <Col>
            <h3>{t("Language")}</h3>
            <LanguageSwitcher gap="12px" edge="0" />
          </Col>
        </Top>

        <Bottom>
          <span>
            © {year} {CompanyInfo.name} · {t("IN")} {CompanyInfo.ico}
          </span>
          <Link to={lp("/privacy")}>{t("Privacy Policy")}</Link>
        </Bottom>
      </Container>
    </Wrap>
  );
};

export default Footer;
