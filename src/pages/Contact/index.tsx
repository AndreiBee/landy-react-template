import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import PageMeta from "../../components/PageMeta";
import ContactContent from "../../content/ContactContent.json";
import CompanyInfo from "../../content/CompanyInfo.json";
import { getLanguage } from "../../translation";
import { Container, Section, Card, IconBadge } from "../../components/ui/layout";
import Icon from "../../components/ui/Icon";
import Reveal from "../../components/ui/Reveal";
import PageHero from "../../components/sections/PageHero";
import ContactForm from "../../components/ContactForm";

const { color, bp, radius } = theme;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 28px;
  align-items: start;

  ${bp.md} {
    grid-template-columns: 1fr;
  }
`;

const FormCard = styled(Card)`
  padding: clamp(28px, 4vw, 44px);

  h2 {
    font-size: 1.7rem;
    margin-bottom: 8px;
  }

  > p {
    margin-bottom: 28px;
    color: ${color.muted};
  }
`;

const Side = styled.div`
  display: grid;
  gap: 20px;
`;

const InfoCard = styled(Card)`
  padding: 28px;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

const InfoList = styled.ul`
  list-style: none;
  display: grid;
  gap: 18px;
  margin: 0;

  li {
    display: flex;
    gap: 14px;
    align-items: center;
  }

  .label {
    display: block;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${color.muted};
  }

  .value {
    display: block;
    margin-top: 2px;
    font-weight: 650;
    color: ${color.ink};
    word-break: break-word;
  }
`;

const Payment = styled.details`
  border-radius: ${radius.lg};
  border: 1px solid ${color.line};
  background: ${color.bg};

  summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    padding: 20px 24px;
    font-weight: 700;
    color: ${color.ink};
    cursor: pointer;
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary svg {
    transition: transform 0.2s ease;
  }

  &[open] summary svg:last-child {
    transform: rotate(180deg);
  }

  > div {
    display: grid;
    gap: 16px;
    justify-items: start;
    padding: 0 24px 24px;
  }

  img {
    width: 180px;
    height: auto;
    border-radius: 12px;
    background: #fff;
    padding: 8px;
    border: 1px solid ${color.line};
  }
`;

const SummaryLabel = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Contact = () => {
  const { t, i18n } = useTranslation();
  const c = ContactContent[getLanguage(i18n.language)];

  return (
    <>
      <PageMeta page="contact" />
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} lead={c.hero.lead} />

      <Section $tone="tint">
        <Container>
          <Layout>
            <Reveal>
              <FormCard>
                <h2>{c.formTitle}</h2>
                <p>{c.formLead}</p>
                <ContactForm id="contact" />
              </FormCard>
            </Reveal>

            <Reveal delay={120}>
              <Side>
                <InfoCard>
                  <h2>{c.infoTitle}</h2>
                  <InfoList>
                    <li>
                      <IconBadge>
                        <Icon name="mail" />
                      </IconBadge>
                      <span>
                        <span className="label">{c.emailLabel}</span>
                        <span className="value">
                          <a href={`mailto:${CompanyInfo.email}`}>{CompanyInfo.email}</a>
                        </span>
                      </span>
                    </li>
                    <li>
                      <IconBadge>
                        <Icon name="pin" />
                      </IconBadge>
                      <span>
                        <span className="label">{c.locationLabel}</span>
                        <span className="value">
                          {t("AddressLine1")}, {t("AddressLine2")}
                        </span>
                      </span>
                    </li>
                    <li>
                      <IconBadge>
                        <Icon name="building" />
                      </IconBadge>
                      <span>
                        <span className="label">{c.idLabel}</span>
                        <span className="value">{CompanyInfo.ico}</span>
                      </span>
                    </li>
                  </InfoList>
                </InfoCard>

                <Payment>
                  <summary>
                    <SummaryLabel>
                      <Icon name="card" size={20} />
                      {c.payment.title}
                    </SummaryLabel>
                    <Icon name="chevronDown" size={20} />
                  </summary>
                  <div>
                    <p>
                      {c.payment.accountLabel}: <strong>{c.payment.account}</strong>
                    </p>
                    <img src={c.payment.qr} alt={t("qrPaymentAlt")} loading="lazy" width="180" height="180" />
                  </div>
                </Payment>
              </Side>
            </Reveal>
          </Layout>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
