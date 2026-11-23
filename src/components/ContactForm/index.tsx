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
import { ContactContainer, FormGroup, Span, ButtonContainer, PhoneLink, EmailLink, AddressLine, Image, HoneyPot } from "./styles";

const Contact = ({ title, content, phone, email, in_number, acc_number, qr_payment_image, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit, submitting } = useForm(validate);

  const errorId = (type: string) => `${id}-${type}-error`;
  const hasError = (type: keyof typeof errors) => Boolean(errors[type]);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const errorKey = errors[type as keyof typeof errors];
    return (
      <Span id={errorId(type)} role="alert">
        {errorKey ? t(errorKey) : ""}
      </Span>
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="top">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
            <Row style={{ margin: "10px"}} justify="space-between">
              <PhoneLink href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</PhoneLink>
            </Row>
            <Row style={{ margin: "10px"}} justify="space-between">
              <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
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
            <Row style={{ margin: "10px"}} justify="space-between">
              <AddressLine>
                {t("Account Number")}: {acc_number}
              </AddressLine>
            </Row>
            <Row style={{ margin: "10px"}} justify="space-between">
              <Image src={qr_payment_image} alt={t("qrPaymentAlt")} loading="lazy" />
            </Row>
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup noValidate onSubmit={handleSubmit} aria-busy={submitting}>
              {/* Honeypot for spam bots: hidden from people and screen readers. */}
              <HoneyPot aria-hidden="true">
                <label htmlFor={`${id}-gotcha`}>Leave this field empty</label>
                <input
                  type="text"
                  id={`${id}-gotcha`}
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values._gotcha}
                  onChange={handleChange}
                />
              </HoneyPot>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  autoComplete="name"
                  value={values.name}
                  invalid={hasError("name")}
                  errorId={errorId("name")}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  autoComplete="email"
                  value={values.email}
                  invalid={hasError("email")}
                  errorId={errorId("email")}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Your Mobile Phone"
                  autoComplete="tel"
                  value={values.phone}
                  invalid={hasError("phone")}
                  errorId={errorId("phone")}
                  onChange={handleChange}
                />
                <ValidationType type="phone" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message}
                  name="message"
                  invalid={hasError("message")}
                  errorId={errorId("message")}
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit" disabled={submitting}>
                  {submitting ? t("Sending") : t("Submit")}
                </Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
