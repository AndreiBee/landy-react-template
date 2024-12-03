import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer, PhoneLink, EmailLink, AddressLine } from "./styles";

const Contact = ({ title, content, phone, email, in_number, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="top">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
            <Row style={{ margin: "10px"}} justify="space-between">
              <PhoneLink href={`tel:${phone}`}>{t(phone)}</PhoneLink>
            </Row>
            <Row style={{ margin: "10px"}} justify="space-between">
              <EmailLink href={`mailto:${email}`}>{t(email)}</EmailLink>
            </Row>
            <Row style={{ margin: "10px"}} justify="space-between">
              <AddressLine>
                {t("AddressLine1")}, {t("AddressLine2")}
              </AddressLine>
            </Row>
            <Row style={{ margin: "10px"}} justify="space-between">
              <AddressLine>
                {t("IN")}: {in_number}
              </AddressLine>
            </Row>
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Mobile Phone"
                  value={values.phone || ""}
                  onChange={handleChange}
                />
                <ValidationType type="phone" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">{t("Submit")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
