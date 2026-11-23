import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import CompanyInfo from "../../content/CompanyInfo.json";
import { useLocalizedPath } from "../../common/utils/localize";
import { Container } from "../ui/layout";
import { ButtonLink, ButtonRow } from "../ui/Button";
import Reveal from "../ui/Reveal";

const { color, radius, bp } = theme;

const Wrap = styled.section<{ $spaced?: boolean }>`
  padding: ${({ $spaced }) => ($spaced ? "clamp(72px, 9vw, 112px)" : "0")} 0 clamp(72px, 9vw, 112px);
  background: ${color.surface};
`;

const Panel = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.4fr auto;
  align-items: center;
  gap: 32px;
  padding: clamp(36px, 5vw, 64px);
  border-radius: ${radius.lg};
  color: rgba(255, 255, 255, 0.8);
  background: radial-gradient(600px 300px at 100% 0%, rgba(255, 130, 92, 0.35), transparent 60%),
    radial-gradient(500px 300px at 0% 100%, rgba(79, 91, 213, 0.4), transparent 60%),
    linear-gradient(135deg, ${color.brand}, ${color.brandDeep});
  box-shadow: ${theme.shadow.lg};

  h2 {
    color: #fff;
    margin-bottom: 12px;
  }

  ${bp.md} {
    grid-template-columns: 1fr;
  }
`;

const Mail = styled.p`
  margin-top: 14px;
  font-size: 0.95rem;

  a {
    color: #fff;
    font-weight: 600;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  a:hover {
    color: ${color.accent};
    border-color: ${color.accent};
  }
`;

/** Closing "start a project" panel. `spaced` adds top padding when the previous section has none. */
const CtaBand = ({ spaced }: { spaced?: boolean }) => {
  const { t } = useTranslation();
  const lp = useLocalizedPath();

  return (
    <Wrap $spaced={spaced}>
      <Container>
        <Reveal>
          <Panel>
            <div>
              <h2>{t("ctaTitle")}</h2>
              <p>{t("ctaText")}</p>
              <Mail>
                {t("ctaEmailPrefix")} <a href={`mailto:${CompanyInfo.email}`}>{CompanyInfo.email}</a>
              </Mail>
            </div>
            <ButtonRow>
              <ButtonLink to={lp("/contact")} variant="light" arrow>
                {t("ctaButton")}
              </ButtonLink>
            </ButtonRow>
          </Panel>
        </Reveal>
      </Container>
    </Wrap>
  );
};

export default CtaBand;
