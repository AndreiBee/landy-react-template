import { ReactNode } from "react";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Container, Eyebrow, Lead } from "../ui/layout";
import Reveal from "../ui/Reveal";

const { color } = theme;

const Wrap = styled.section`
  position: relative;
  overflow: hidden;
  padding: clamp(64px, 9vw, 112px) 0 clamp(56px, 7vw, 88px);
  background: radial-gradient(900px 420px at 90% -20%, rgba(255, 130, 92, 0.16), transparent 65%),
    radial-gradient(700px 400px at -10% 120%, rgba(47, 58, 160, 0.12), transparent 60%), ${color.bg};
  border-bottom: 1px solid ${color.line};

  /* faint dot grid */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(24, 33, 109, 0.08) 1px, transparent 1px);
    background-size: 22px 22px;
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.7), transparent 85%);
    pointer-events: none;
  }
`;

const Inner = styled.div`
  position: relative;
  display: grid;
  gap: 20px;
  max-width: 780px;

  h1 {
    font-size: clamp(2.2rem, 4.6vw, 3.4rem);
  }
`;

const Actions = styled.div`
  margin-top: 12px;
`;

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode;
}

const PageHero = ({ eyebrow, title, lead, actions }: PageHeroProps) => (
  <Wrap>
    <Container>
      <Reveal>
        <Inner>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1>{title}</h1>
          {lead && <Lead>{lead}</Lead>}
          {actions && <Actions>{actions}</Actions>}
        </Inner>
      </Reveal>
    </Container>
  </Wrap>
);

export default PageHero;
