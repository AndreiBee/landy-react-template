import { Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { PositionBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  StyledTitle,
  StyledList,
  StyledListItem,
  // MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const PositionBlock = ({
  icon,
  title,
  content,
  requirements,
  offer,
  button,
  t,
  id,
  direction,
  withButtons,
}: PositionBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <SvgIcon src={icon} width="70%" height="auto" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>

              <div>
                <ServiceWrapper>
                  <StyledTitle>{t("Requirements")}</StyledTitle>
                  <StyledList>
                    {Array.isArray(requirements) &&
                      requirements.map((requirement, id) => (
                        <StyledListItem key={id}>
                          <MinTitle>{t(requirement)}</MinTitle>
                        </StyledListItem>
                      ))}
                  </StyledList>
                </ServiceWrapper>
                <ServiceWrapper>
                  <StyledTitle>{t("WeOffer")}</StyledTitle>
                  <StyledList>
                    {Array.isArray(offer) &&
                      offer.map((text, id) => (
                        <StyledListItem key={id}>
                          <MinTitle>{t(text)}</MinTitle>
                        </StyledListItem>
                      ))}
                  </StyledList>
                </ServiceWrapper>
              </div>
              {withButtons === true ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                          scrollToSection?: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            onClick={() => {
                              if (item.scrollToSection && item.scrollToSection.includes("/")) {
                                  window.location.href = item.scrollToSection; // Přesměruje na stránku za lomítkem
                                } else {
                                  scrollTo(item.scrollToSection ? item.scrollToSection : "contact"); // Posune stránku
                                }
                            }}
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : {}}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(PositionBlock);
