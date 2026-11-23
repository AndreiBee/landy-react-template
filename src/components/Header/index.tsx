import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLocalizedPath, stripLanguage } from "../../common/utils/localize";
import { Container } from "../ui/layout";
import { ButtonLink } from "../ui/Button";
import Icon from "../ui/Icon";

const { color, bp, shadow } = theme;

const Bar = styled.header<{ $scrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, ${({ $scrolled }) => ($scrolled ? 0.86 : 0.98)});
  backdrop-filter: saturate(160%) blur(14px);
  -webkit-backdrop-filter: saturate(160%) blur(14px);
  border-bottom: 1px solid ${({ $scrolled }) => ($scrolled ? color.line : "transparent")};
  transition: border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
  ${({ $scrolled }) =>
    $scrolled &&
    css`
      box-shadow: 0 6px 24px rgba(20, 26, 61, 0.06);
    `}
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  height: 76px;
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: auto;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 6px;

  ${bp.md} {
    display: none;
  }
`;

const NavItem = styled(Link)<{ $active: boolean }>`
  position: relative;
  padding: 10px 14px;
  border-radius: 999px;
  font-size: 0.98rem;
  font-weight: 600;
  color: ${({ $active }) => ($active ? color.brand : color.text)};
  background: ${({ $active }) => ($active ? color.tint : "transparent")};

  &:hover {
    color: ${color.brand};
    background: ${color.tint};
  }
`;

const DesktopCta = styled.div`
  margin-left: 10px;
`;

const Lang = styled.div``;

const MenuButton = styled.button`
  display: none;
  place-items: center;
  width: 46px;
  height: 46px;
  border: 1px solid ${color.line};
  border-radius: 12px;
  background: #fff;
  color: ${color.brand};
  cursor: pointer;

  ${bp.md} {
    display: grid;
  }
`;

const Panel = styled.div<{ $open: boolean }>`
  display: none;

  ${bp.md} {
    display: block;
    position: fixed;
    inset: 76px 0 0 0;
    z-index: 49;
    padding: 24px 18px 32px;
    background: #fff;
    overflow-y: auto;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    transform: translateY(${({ $open }) => ($open ? "0" : "-8px")});
    transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
    box-shadow: ${shadow.md};
  }
`;

const PanelLinks = styled.nav`
  display: grid;
  gap: 4px;
  margin-bottom: 24px;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 12px;
    border-bottom: 1px solid ${color.line};
    font-size: 1.15rem;
    font-weight: 650;
    color: ${color.ink};
  }
`;

const PanelFooter = styled.div`
  display: grid;
  gap: 20px;
  justify-items: start;
`;

const Header = () => {
  const { t } = useTranslation();
  const lp = useLocalizedPath();
  const { pathname, hash } = useLocation();
  const current = stripLanguage(pathname);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { to: `${lp("/")}#services`, label: t("Services"), active: current === "/" && hash === "#services" },
    { to: lp("/about"), label: t("About"), active: current === "/about" },
    { to: lp("/career"), label: t("Career"), active: current === "/career" },
    { to: lp("/blog"), label: t("Blog"), active: current === "/blog" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation and with Escape; lock page scroll while open.
  useEffect(() => setOpen(false), [pathname, hash]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
    <Bar $scrolled={scrolled || open}>
      <Container>
        <Inner>
          <Brand>
            <Logo to={lp("/")} aria-label={t("homeAria")}>
              <img src="/img/svg/logo-opt.svg" alt="Arvion" width="120" height="32" />
            </Logo>
            <Lang>
              <LanguageSwitcher gap="8px" edge="0" />
            </Lang>
          </Brand>

          <Nav aria-label={t("mainNav")}>
            {links.map((link) => (
              <NavItem key={link.to} to={link.to} $active={link.active} aria-current={link.active ? "page" : undefined}>
                {link.label}
              </NavItem>
            ))}
            <DesktopCta>
              <ButtonLink to={lp("/contact")} small>
                {t("Contact")}
              </ButtonLink>
            </DesktopCta>
          </Nav>

          <MenuButton
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("closeMenu") : t("openMenu")}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} />
          </MenuButton>
        </Inner>
      </Container>
    </Bar>

      {/* Sibling of the header, not a child: the header's backdrop-filter would
          otherwise make this fixed panel position itself inside the header. */}
      <Panel id="mobile-menu" $open={open} aria-hidden={!open}>
        <PanelLinks aria-label={t("mainNav")}>
          {links.map((link) => (
            <Link key={link.to} to={link.to} tabIndex={open ? 0 : -1}>
              {link.label}
              <Icon name="arrowRight" size={18} />
            </Link>
          ))}
        </PanelLinks>
        <PanelFooter>
          <ButtonLink to={lp("/contact")} arrow>
            {t("Contact")}
          </ButtonLink>
        </PanelFooter>
      </Panel>
    </>
  );
};

export default Header;
