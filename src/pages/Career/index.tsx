import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import PageMeta from "../../components/PageMeta";
import CareerContent from "../../content/CareerContent.json";
import CompanyInfo from "../../content/CompanyInfo.json";
import { getLanguage } from "../../translation";
import { Container, Section, SectionHeader, Card, Grid, IconBadge } from "../../components/ui/layout";
import { ButtonAnchor } from "../../components/ui/Button";
import Icon, { IconName } from "../../components/ui/Icon";
import Reveal from "../../components/ui/Reveal";
import PageHero from "../../components/sections/PageHero";

const { color, bp, radius, shadow } = theme;

const PerkCard = styled(Card)`
  height: 100%;
  display: grid;
  gap: 14px;
  align-content: start;
  padding: 28px;
  border-radius: ${radius.md};

  h3 {
    font-size: 1.1rem;
  }

  p {
    font-size: 0.97rem;
  }
`;

const Positions = styled.div`
  display: grid;
  gap: 24px;
`;

const Position = styled(Card)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(24px, 4vw, 56px);
  padding: clamp(28px, 4vw, 44px);
  transition: box-shadow 0.25s ease;

  &:hover {
    box-shadow: ${shadow.md};
  }

  ${bp.md} {
    grid-template-columns: 1fr;
  }
`;

const PositionHead = styled.div`
  display: grid;
  gap: 14px;
  align-content: start;

  h3 {
    font-size: 1.6rem;
  }
`;

const Tag = styled.span`
  width: fit-content;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${color.brand};
  background: ${color.tint};
`;

const Requirements = styled.div`
  padding: 24px 26px;
  border-radius: ${radius.md};
  background: ${color.bg};

  h4 {
    font-size: 0.8rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${color.muted};
    margin-bottom: 14px;
  }

  ul {
    list-style: none;
    display: grid;
    gap: 10px;
  }

  li {
    display: flex;
    gap: 10px;
    font-size: 0.97rem;
    color: ${color.ink};
  }

  svg {
    flex: none;
    margin-top: 4px;
    color: ${color.accentDeep};
  }
`;

const Apply = styled.div`
  display: grid;
  justify-items: center;
  gap: 16px;
  text-align: center;
  max-width: 620px;
  margin: 0 auto;
`;

const Career = () => {
  const { i18n } = useTranslation();
  const c = CareerContent[getLanguage(i18n.language)];
  const mailto = `mailto:${CompanyInfo.email}?subject=${encodeURIComponent(c.apply.subject)}`;

  return (
    <>
      <PageMeta page="career" />
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={c.hero.title}
        lead={c.hero.lead}
        actions={
          <ButtonAnchor href="#positions" arrow>
            {c.positions.title}
          </ButtonAnchor>
        }
      />

      <Section>
        <Container>
          <Reveal>
            <SectionHeader eyebrow={c.perks.eyebrow} title={c.perks.title} />
          </Reveal>
          <Grid $cols={4} $gap="20px">
            {c.perks.items.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 80}>
                <PerkCard>
                  <IconBadge>
                    <Icon name={perk.icon as IconName} size={24} />
                  </IconBadge>
                  <h3>{perk.title}</h3>
                  <p>{perk.text}</p>
                </PerkCard>
              </Reveal>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section $tone="tint" id="positions">
        <Container>
          <Reveal>
            <SectionHeader eyebrow={c.positions.eyebrow} title={c.positions.title} />
          </Reveal>
          <Positions>
            {c.positions.items.map((position) => (
              <Reveal key={position.title}>
                <Position>
                  <PositionHead>
                    <Tag>{c.positions.tag}</Tag>
                    <h3>{position.title}</h3>
                    <p>{position.summary}</p>
                    <div>
                      <ButtonAnchor href={`${mailto}%20%E2%80%93%20${encodeURIComponent(position.title)}`} small arrow>
                        {c.apply.button}
                      </ButtonAnchor>
                    </div>
                  </PositionHead>
                  <Requirements>
                    <h4>{c.positions.requirementsLabel}</h4>
                    <ul>
                      {position.requirements.map((req) => (
                        <li key={req}>
                          <Icon name="check" size={16} strokeWidth={2.4} />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </Requirements>
                </Position>
              </Reveal>
            ))}
          </Positions>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <Apply>
              <h2>{c.apply.title}</h2>
              <p>{c.apply.text}</p>
              <ButtonAnchor href={mailto} arrow>
                {c.apply.button}
              </ButtonAnchor>
            </Apply>
          </Reveal>
        </Container>
      </Section>
    </>
  );
};

export default Career;
