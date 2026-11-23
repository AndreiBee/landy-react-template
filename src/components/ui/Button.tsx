import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import Icon from "./Icon";

const { color, radius } = theme;

export type ButtonVariant = "primary" | "secondary" | "light" | "ghostLight";

const variants = {
  primary: css`
    background: ${color.brand};
    color: #fff;
    box-shadow: 0 10px 24px rgba(24, 33, 109, 0.25);

    &:hover {
      background: ${color.brandSoft};
      color: #fff;
    }
  `,
  secondary: css`
    background: ${color.surface};
    color: ${color.brand};
    border-color: ${color.line};

    &:hover {
      color: ${color.brand};
      border-color: ${color.brand};
    }
  `,
  light: css`
    background: #fff;
    color: ${color.brand};

    &:hover {
      color: ${color.brandDeep};
      background: ${color.tint};
    }
  `,
  ghostLight: css`
    background: rgba(255, 255, 255, 0.06);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.28);

    &:hover {
      color: #fff;
      border-color: #fff;
      background: rgba(255, 255, 255, 0.12);
    }
  `,
};

const base = css<{ $variant: ButtonVariant; $small?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: ${({ $small }) => ($small ? "10px 18px" : "15px 26px")};
  border-radius: ${radius.pill};
  border: 1px solid transparent;
  font-size: ${({ $small }) => ($small ? "0.95rem" : "1rem")};
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.2s ease,
    box-shadow 0.2s ease;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.65;
    cursor: progress;
  }

  ${({ $variant }) => variants[$variant]}
`;

const StyledLink = styled(Link)<{ $variant: ButtonVariant; $small?: boolean }>`
  ${base}
`;
const StyledAnchor = styled.a<{ $variant: ButtonVariant; $small?: boolean }>`
  ${base}
`;
const StyledButton = styled.button<{ $variant: ButtonVariant; $small?: boolean }>`
  ${base}
`;

interface CommonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  small?: boolean;
  arrow?: boolean;
}

const Content = ({ children, arrow }: Pick<CommonProps, "children" | "arrow">) => (
  <>
    <span>{children}</span>
    {arrow && <Icon name="arrowRight" size={18} strokeWidth={2.2} />}
  </>
);

/** Button that navigates inside the site. */
export const ButtonLink = ({
  to,
  children,
  variant = "primary",
  small,
  arrow,
  onClick,
}: CommonProps & { to: string; onClick?: () => void }) => (
  <StyledLink to={to} $variant={variant} $small={small} onClick={onClick}>
    <Content arrow={arrow}>{children}</Content>
  </StyledLink>
);

/** Button that points outside the app (mailto:, external sites). */
export const ButtonAnchor = ({
  href,
  children,
  variant = "primary",
  small,
  arrow,
}: CommonProps & { href: string }) => (
  <StyledAnchor href={href} $variant={variant} $small={small}>
    <Content arrow={arrow}>{children}</Content>
  </StyledAnchor>
);

export const Button = ({
  children,
  variant = "primary",
  small,
  arrow,
  type = "button",
  disabled,
  onClick,
}: CommonProps & { type?: "button" | "submit"; disabled?: boolean; onClick?: () => void }) => (
  <StyledButton type={type} $variant={variant} $small={small} disabled={disabled} onClick={onClick}>
    <Content arrow={arrow}>{children}</Content>
  </StyledButton>
);

export const ButtonRow = styled.div<{ $center?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: ${({ $center }) => ($center ? "center" : "flex-start")};
`;
