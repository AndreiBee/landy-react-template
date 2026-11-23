import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { theme } from "../../styles/theme";
import PageMeta from "../../components/PageMeta";
import HomeContent from "../../content/HomeContent.json";
import BlogContent from "../../content/BlogPageContent.json";
import { getLanguage } from "../../translation";
import { useLocalizedPath } from "../../common/utils/localize";
import { Container, Section, SectionHeader, Eyebrow, Lead, Card, Grid, IconBadge } from "../../components/ui/layout";
import { ButtonLink, ButtonRow } from "../../components/ui/Button";
import Icon, { IconName } from "../../components/ui/Icon";
import Reveal from "../../components/ui/Reveal";
import ClientLogos from "../../components/sections/ClientLogos";
import CtaBand from "../../components/sections/CtaBand";

const { color, bp, radius, shadow } = theme;

/* ---------- Hero ---------- */

const Hero = styled.section`
  position: relative;
  overflow: hidden;
  padding: clamp(56px, 8vw, 104px) 0 clamp(64px, 8vw, 112px);
  background: radial-gradient(900px 500px at 100% 0%, rgba(255, 130, 92, 0.18), transparent 60%),
    radial-gradient(800px 500px at 0% 100%, rgba(47, 58, 160, 0.14), transparent 60%), ${color.bg};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(24, 33, 109, 0.09) 1px, transparent 1px);
    background-size: 22px 22px;
    mask-image: radial-gradient(ellipse at 70% 40%, rgba(0, 0, 0, 0.8), transparent 70%);
    pointer-events: none;
  }
`;

const HeroGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: clamp(40px, 6vw, 80px);

  ${bp.md} {
    grid-template-columns: 1fr;
  }
`;

const HeroText = styled.div`
  display: grid;
  gap: 24px;
  justify-items: start;
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const Visual = styled.div`
  position: relative;
  padding: 28px 8px 36px;

  ${bp.md} {
    max-width: 520px;
  }
`;

const CodeWindow = styled.div`
  position: relative;
  border-radius: ${radius.lg};
  background: linear-gradient(160deg, #1b2470, ${color.brandDeep});
  box-shadow: ${shadow.lg}, inset 0 1px 0 rgba(255, 255, 255, 0.08);
  overflow: hidden;
  transform: rotate(-1.5deg);
`;

const WindowBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  span {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.18);
  }

  span:first-child {
    background: ${color.accent};
  }

  small {
    margin-left: 10px;
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.45);
    font-family: ui-monospace, "SFMono-Regular", Consolas, monospace;
  }
`;

const Code = styled.pre`
  margin: 0;
  padding: 22px 24px 28px;
  font-family: ui-monospace, "SFMono-Regular", Consolas, monospace;
  font-size: clamp(0.8rem, 1.3vw, 0.95rem);
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.82);
  white-space: pre-wrap;

  .k {
    color: #ff9e80;
  }
  .f {
    color: #9fb0ff;
  }
  .s {
    color: #8ee3b5;
  }
  .c {
    color: rgba(255, 255, 255, 0.35);
  }
`;

const Badge = styled.div<{ $pos: "top" | "bottom"; $delay: number }>`
  position: absolute;
  ${({ $pos }) => ($pos === "top" ? "top: 0; right: -6px;" : "bottom: 0; left: -10px;")}
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 14px;
  background: #fff;
  box-shadow: ${shadow.md};
  font-size: 0.9rem;
  font-weight: 700;
  color: ${color.ink};
  animation: ${float} 6s ease-in-out ${({ $delay }) => $delay}s infinite;

  svg {
    color: ${color.accentDeep};
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }

  ${bp.sm} {
    font-size: 0.8rem;
    padding: 10px 12px;
  }
`;

/* ---------- Services ---------- */

const ServiceCard = styled(Card)`
  height: 100%;
  display: grid;
  gap: 16px;
  align-content: start;
  padding: 32px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadow.md};
    border-color: rgba(24, 33, 109, 0.18);
  }

  p {
    color: ${color.text};
  }
`;

const Points = styled.ul`
  list-style: none;
  display: grid;
  gap: 8px;
  margin-top: 4px;
  padding-top: 16px;
  border-top: 1px dashed ${color.line};

  li {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    font-size: 0.95rem;
    color: ${color.ink};
  }

  svg {
    flex: none;
    margin-top: 4px;
    color: ${color.accentDeep};
  }
`;

/* ---------- Process ---------- */

const Steps = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  counter-reset: step;

  ${bp.lg} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${bp.sm} {
    grid-template-columns: 1fr;
  }
`;

const Step = styled.li`
  position: relative;
  display: grid;
  gap: 10px;
  align-content: start;
  height: 100%;
  padding: 28px 24px;
  border-radius: ${radius.md};
  background: #fff;
  border: 1px solid ${color.line};
  counter-increment: step;

  &::before {
    content: counter(step, decimal-leading-zero);
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: ${color.accentText};
  }

  h3 {
    font-size: 1.15rem;
  }

  p {
    font-size: 0.97rem;
  }
`;

/* ---------- Why ---------- */

const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: clamp(40px, 6vw, 80px);
  align-items: center;

  ${bp.md} {
    grid-template-columns: 1fr;
  }
`;

const WhyText = styled.div`
  display: grid;
  gap: 20px;
  justify-items: start;
`;

const Feature = styled.div`
  display: grid;
  gap: 16px;
  align-content: start;
  padding: 24px;
  border-radius: ${radius.md};
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;

  h3 {
    font-size: 1.05rem;
    margin-bottom: 4px;
  }

  p {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

/* ---------- Blog teaser ---------- */

const BlogHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 40px;

  > div {
    display: grid;
    gap: 14px;
  }
`;

const ArticleCard = styled(Card)`
  overflow: hidden;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadow.md};
  }

  img {
    width: 100%;
    aspect-ratio: 16 / 8;
    object-fit: contain;
    padding: 20px;
    background: linear-gradient(135deg, ${color.tint}, #fff);
  }

  a {
    display: grid;
    gap: 10px;
    padding: 24px 26px 28px;
    color: inherit;
  }

  h3 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.97rem;
  }
`;

const ReadMore = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  font-weight: 700;
  color: ${color.brand};
`;

const Home = () => {
  const { t, i18n } = useTranslation();
  const lang = getLanguage(i18n.language);
  const lp = useLocalizedPath();
  const c = HomeContent[lang];
  const articles = BlogContent[lang].slice(0, 2);

  return (
    <>
      <PageMeta page="home" />

      <Hero>
        <Container>
          <HeroGrid>
            <Reveal>
              <HeroText>
                <Eyebrow>{c.hero.eyebrow}</Eyebrow>
                <h1>{c.hero.title}</h1>
                <Lead>{c.hero.lead}</Lead>
                <ButtonRow>
                  <ButtonLink to={lp("/contact")} arrow>
                    {c.hero.primary}
                  </ButtonLink>
                  <ButtonLink to={`${lp("/")}#services`} variant="secondary">
                    {c.hero.secondary}
                  </ButtonLink>
                </ButtonRow>
              </HeroText>
            </Reveal>

            <Reveal delay={150}>
              <Visual aria-hidden="true">
                <CodeWindow>
                  <WindowBar>
                    <span />
                    <span />
                    <span />
                    <small>your-project.ts</small>
                  </WindowBar>
                  <Code>
                    <span className="c">{"// built around how you work"}</span>
                    {"\n"}
                    <span className="k">const</span> project = <span className="k">await</span> arvion.
                    <span className="f">build</span>({"{"}
                    {"\n"}  fitsYourProcess: <span className="k">true</span>,{"\n"}  languages: [
                    <span className="s">"en"</span>, <span className="s">"cs"</span>],{"\n"}  support:{" "}
                    <span className="s">"long-term"</span>,{"\n"}
                    {"}"});{"\n\n"}
                    project.<span className="f">launch</span>();{" "}
                    <span className="c">{"// ✓ and we stay with you"}</span>
                  </Code>
                </CodeWindow>
                <Badge $pos="top" $delay={0}>
                  <Icon name="globe" size={20} />
                  {c.hero.badges[0]}
                </Badge>
                <Badge $pos="bottom" $delay={1.5}>
                  <Icon name="shield" size={20} />
                  {c.hero.badges[1]}
                </Badge>
              </Visual>
            </Reveal>
          </HeroGrid>
        </Container>
      </Hero>

      <ClientLogos />

      <Section id="services">
        <Container>
          <Reveal>
            <SectionHeader eyebrow={c.services.eyebrow} title={c.services.title} lead={c.services.lead} />
          </Reveal>
          <Grid $cols={2}>
            {c.services.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 100}>
                <ServiceCard>
                  <IconBadge>
                    <Icon name={item.icon as IconName} size={26} />
                  </IconBadge>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Points>
                    {item.points.map((point) => (
                      <li key={point}>
                        <Icon name="check" size={16} strokeWidth={2.4} />
                        {point}
                      </li>
                    ))}
                  </Points>
                </ServiceCard>
              </Reveal>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section $tone="tint" id="process">
        <Container>
          <Reveal>
            <SectionHeader eyebrow={c.process.eyebrow} title={c.process.title} lead={c.process.lead} center />
          </Reveal>
          <Steps>
            {c.process.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 90}>
                <Step>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </Step>
              </Reveal>
            ))}
          </Steps>
        </Container>
      </Section>

      <Section $tone="dark" id="why">
        <Container>
          <WhyGrid>
            <Reveal>
              <WhyText>
                <Eyebrow $onDark>{c.why.eyebrow}</Eyebrow>
                <h2>{c.why.title}</h2>
                <Lead $onDark>{c.why.text}</Lead>
                <ButtonLink to={lp("/about")} variant="ghostLight" arrow>
                  {c.why.button}
                </ButtonLink>
              </WhyText>
            </Reveal>
            <Grid $cols={2} $gap="16px">
              {c.why.features.map((f, i) => (
                <Reveal key={f.title} delay={i * 80}>
                  <Feature>
                    <IconBadge $onDark>
                      <Icon name={f.icon as IconName} size={24} />
                    </IconBadge>
                    <div>
                      <h3>{f.title}</h3>
                      <p>{f.text}</p>
                    </div>
                  </Feature>
                </Reveal>
              ))}
            </Grid>
          </WhyGrid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <BlogHead>
              <div>
                <Eyebrow>{c.blog.eyebrow}</Eyebrow>
                <h2>{c.blog.title}</h2>
              </div>
              <ButtonLink to={lp("/blog")} variant="secondary" small arrow>
                {c.blog.link}
              </ButtonLink>
            </BlogHead>
          </Reveal>
          <Grid $cols={2}>
            {articles.map((article, i) => (
              <Reveal key={article.id} delay={i * 100}>
                <ArticleCard>
                  <img src={article.image} alt="" loading="lazy" />
                  <Link to={`${lp("/blog")}#article-${article.id}`}>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <ReadMore>
                      {t("readArticle")} <Icon name="arrowRight" size={16} strokeWidth={2.2} />
                    </ReadMore>
                  </Link>
                </ArticleCard>
              </Reveal>
            ))}
          </Grid>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
};

export default Home;
