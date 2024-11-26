import { Row, Col } from "antd";
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
  MinPara,
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
                            onClick={() => scrollTo(item.scrollToSection ? item.scrollToSection : "contact")}
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <div>
                <ServiceWrapper>
                  <Content>{t("Requirements")}</Content>
                  <Row justify="space-between">
                    {typeof requirements === "object" &&
                      requirements.map(
                        (requirement, id) => {
                          return (
                            <Col key={id} span={11} style={{ textAlign: "center" }}>
                              <MinTitle>{t(requirement)}</MinTitle>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
                <ServiceWrapper>
                  <Content>{t("WeOffer")}</Content>
                  <Row justify="space-between">
                    {typeof offer === "object" &&
                      offer.map(
                        (text, id) => {
                          return (
                            <Col key={id} span={11} style={{ textAlign: "center" }}>
                              <MinTitle>{t(text)}</MinTitle>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
                </div>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(PositionBlock);
