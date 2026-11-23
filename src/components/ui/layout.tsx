import { ReactNode } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

const { color, width, bp, radius } = theme;

export const Container = styled.div<{ $narrow?: boolean }>`
  width: 100%;
  max-width: ${({ $narrow }) => ($narrow ? width.narrow : width.container)};
  margin: 0 auto;
  padding: 0 28px;

  ${bp.sm} {
    padding: 0 18px;
  }
`;

type Tone = "light" | "tint" | "dark";

const toneStyles = {
  light: css`
    background: ${color.surface};
  `,
  tint: css`
    background: ${color.bg};
  `,
  dark: css`
    background: radial-gradient(1200px 500px at 85% -10%, rgba(255, 130, 92, 0.22), transparent 60%),
      linear-gradient(160deg, ${color.brand} 0%, ${color.brandDeep} 100%);
    color: rgba(255, 255, 255, 0.78);

    h2,
    h3 {
      color: #fff;
    }
  `,
};

export const Section = styled.section<{ $tone?: Tone; $tight?: boolean }>`
  position: relative;
  padding: ${({ $tight }) => ($tight ? "clamp(48px, 6vw, 72px)" : "clamp(72px, 9vw, 120px)")} 0;
  ${({ $tone = "light" }) => toneStyles[$tone]}
`;

export const Eyebrow = styled.span<{ $onDark?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ $onDark }) => ($onDark ? color.accent : color.accentText)};

  &::before {
    content: "";
    width: 18px;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
  }
`;

const HeaderWrap = styled.div<{ $center?: boolean }>`
  display: grid;
  gap: 16px;
  max-width: ${({ $center }) => ($center ? "720px" : "640px")};
  margin: ${({ $center }) => ($center ? "0 auto 56px" : "0 0 48px")};
  text-align: ${({ $center }) => ($center ? "center" : "left")};
  justify-items: ${({ $center }) => ($center ? "center" : "start")};
`;

export const Lead = styled.p<{ $onDark?: boolean }>`
  font-size: 1.15rem;
  line-height: 1.7;
  color: ${({ $onDark }) => ($onDark ? "rgba(255,255,255,0.78)" : color.text)};
`;

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  onDark?: boolean;
  as?: "h1" | "h2";
}

export const SectionHeader = ({ eyebrow, title, lead, center, onDark, as = "h2" }: SectionHeaderProps) => {
  const Heading = as;
  return (
    <HeaderWrap $center={center}>
      {eyebrow && <Eyebrow $onDark={onDark}>{eyebrow}</Eyebrow>}
      <Heading>{title}</Heading>
      {lead && <Lead $onDark={onDark}>{lead}</Lead>}
    </HeaderWrap>
  );
};

export const Card = styled.div`
  background: ${color.surface};
  border: 1px solid ${color.line};
  border-radius: ${radius.lg};
  box-shadow: ${theme.shadow.sm};
`;

export const Grid = styled.div<{ $cols?: number; $gap?: string }>`
  display: grid;
  grid-template-columns: repeat(${({ $cols = 3 }) => $cols}, minmax(0, 1fr));
  gap: ${({ $gap = "24px" }) => $gap};

  ${bp.lg} {
    grid-template-columns: repeat(${({ $cols = 3 }) => Math.min($cols, 2)}, minmax(0, 1fr));
  }

  ${bp.sm} {
    grid-template-columns: minmax(0, 1fr);
  }
`;

/** Rounded square holding an icon. */
export const IconBadge = styled.span<{ $onDark?: boolean }>`
  display: inline-grid;
  place-items: center;
  width: 52px;
  height: 52px;
  flex: none;
  border-radius: 14px;
  color: ${({ $onDark }) => ($onDark ? "#fff" : color.brand)};
  background: ${({ $onDark }) =>
    $onDark ? "rgba(255,255,255,0.1)" : `linear-gradient(135deg, ${color.tint}, #fff)`};
  border: 1px solid ${({ $onDark }) => ($onDark ? "rgba(255,255,255,0.14)" : color.line)};
`;
