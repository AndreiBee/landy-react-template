import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import PageMeta from "../../components/PageMeta";
import { useLocalizedPath } from "../../common/utils/localize";
import { Container } from "../../components/ui/layout";
import { ButtonLink, ButtonRow } from "../../components/ui/Button";

const { color } = theme;

const Wrap = styled.section`
  padding: clamp(80px, 12vw, 160px) 0;
  text-align: center;
  background: radial-gradient(700px 360px at 50% 0%, rgba(255, 130, 92, 0.14), transparent 65%), ${color.bg};

  > div {
    display: grid;
    justify-items: center;
    gap: 18px;
  }
`;

const Code = styled.p`
  font-size: clamp(5rem, 14vw, 9rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
  background: linear-gradient(135deg, ${color.brand}, ${color.accent});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const NotFound = () => {
  const { t } = useTranslation();
  const lp = useLocalizedPath();

  return (
    <>
      <PageMeta page="notFound" noIndex />
      <Wrap>
        <Container $narrow>
          <Code aria-hidden="true">404</Code>
          <h1>{t("notFoundTitle")}</h1>
          <p>{t("notFoundText")}</p>
          <ButtonRow $center>
            <ButtonLink to={lp("/")} arrow>
              {t("notFoundButton")}
            </ButtonLink>
            <ButtonLink to={lp("/contact")} variant="secondary">
              {t("Contact")}
            </ButtonLink>
          </ButtonRow>
        </Container>
      </Wrap>
    </>
  );
};

export default NotFound;
