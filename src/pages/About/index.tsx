import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import PageMeta from "../../components/PageMeta";
import AboutContent from "../../content/AboutContent.json";
import { getLanguage } from "../../translation";
import { Container, Section, SectionHeader, Eyebrow, Card, Grid, IconBadge } from "../../components/ui/layout";
import Icon, { IconName } from "../../components/ui/Icon";
import Reveal from "../../components/ui/Reveal";
import PageHero from "../../components/sections/PageHero";
import ClientLogos from "../../components/sections/ClientLogos";
import CtaBand from "../../components/sections/CtaBand";

const { color, bp, radius } = theme;

const Story = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: clamp(32px, 6vw, 80px);
  align-items: start;

  ${bp.md} {
    grid-template-columns: 1fr;
  }
`;

const StoryHead = styled.div`
  display: grid;
  gap: 16px;
  position: sticky;
  top: 110px;

  ${bp.md} {
    position: static;
  }
`;

const StoryBody = styled.div`
  display: grid;
  gap: 20px;
  font-size: 1.1rem;
  line-height: 1.8;

  p:first-child {
    font-size: 1.3rem;
    line-height: 1.6;
    color: ${color.ink};
    font-weight: 500;
  }
`;

const ValueCard = styled(Card)`
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

const About = () => {
  const { i18n } = useTranslation();
  const c = AboutContent[getLanguage(i18n.language)];

  return (
    <>
      <PageMeta page="about" />
      <PageHero eyebrow={c.hero.eyebrow} title={c.hero.title} lead={c.hero.lead} />

      <Section>
        <Container>
          <Story>
            <Reveal>
              <StoryHead>
                <Eyebrow>{c.story.eyebrow}</Eyebrow>
                <h2>{c.story.title}</h2>
              </StoryHead>
            </Reveal>
            <Reveal delay={100}>
              <StoryBody>
                {c.story.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </StoryBody>
            </Reveal>
          </Story>
        </Container>
      </Section>

      <Section $tone="tint">
        <Container>
          <Reveal>
            <SectionHeader eyebrow={c.values.eyebrow} title={c.values.title} center />
          </Reveal>
          <Grid $cols={4} $gap="20px">
            {c.values.items.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <ValueCard>
                  <IconBadge>
                    <Icon name={v.icon as IconName} size={24} />
                  </IconBadge>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </ValueCard>
              </Reveal>
            ))}
          </Grid>
        </Container>
      </Section>

      <ClientLogos />
      <CtaBand spaced />
    </>
  );
};

export default About;
