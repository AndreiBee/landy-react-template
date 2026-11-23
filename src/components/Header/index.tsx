import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import LanguageSwitcher from "../LanguageSwitcher";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LogoAndNavBarDiv,
  CustomLink,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    // const scrollTo = (id: string) => {
    //   const element = document.getElementById(id) as HTMLDivElement;
    //   element.scrollIntoView({
    //     behavior: "smooth",
    //   });
    //   setVisibility(false);
    // };

    const handleLinkClick = () => {
      setVisibility(false); // Zavře menu
    };
    return (
      <>
        <CustomLink to="/about" onClick={handleLinkClick}>
          <Span>{t("About")}</Span>
        </CustomLink>

        {/* <CustomLink to="/price" onClick={handleLinkClick}>
          <Span>{t("Price List")}</Span>
        </CustomLink> */}

        <CustomLink to="/career" onClick={handleLinkClick}>
          <Span>{t("Career")}</Span>
        </CustomLink>

        <CustomLink to="/blog" onClick={handleLinkClick}>
          <Span>{t("Blog")}</Span>
        </CustomLink>

        <CustomNavLinkSmall to="/contact" onClick={handleLinkClick}>
          <Span>
            <Button>{t("Contact")}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection id="site-header">
      <Container>
        <Row justify="space-between">
          <LogoAndNavBarDiv>
            <LogoContainer to="/" aria-label="homepage">
              <SvgIcon src="logo-opt.svg" width="101px" height="64px" />
            </LogoContainer>
            <LanguageSwitcher />
          </LogoAndNavBarDiv>
            <NotHidden>
              <MenuItem />
            </NotHidden>
            <Burger
              role="button"
              tabIndex={0}
              aria-label="Menu"
              aria-expanded={visible}
              onClick={toggleButton}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggleButton();
                }
              }}
            >
              <Outline />
            </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
