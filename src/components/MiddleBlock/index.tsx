import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection, ButtonWrapper, ContentWrapper, ImageWrapper } from "./styles";
import { SvgIcon } from "../../common/SvgIcon";

interface MiddleBlockProps {
  title: string;
  section?: {
    link: string;
    icon: string;
    title: string;
  }[];
  t: TFunction;
}

const MiddleBlock = ({ title, section, t }: MiddleBlockProps) => {
  // const scrollTo = (id: string) => {
  //   const element = document.getElementById(id) as HTMLDivElement;
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };
  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
            </Col>
            <Col lg={24} md={24} sm={24} xs={24}>
              <ButtonWrapper>
                {Array.isArray(section) &&
                  section.map((item, id) => (
                      <ImageWrapper
                        onClick={() => window.open(item.link, "_blank")}
                      >
                    <div key={id}>
                      {/* Clickable image */}
                      <SvgIcon src={item.icon} width="100%" height="100%" />
                    </div>
                      </ImageWrapper>
                ))}
              </ButtonWrapper>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
