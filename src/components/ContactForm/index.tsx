import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { useLocalizedPath } from "../../common/utils/localize";
import { Button } from "../ui/Button";
import Icon from "../ui/Icon";

const { color, radius, bp } = theme;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  ${bp.sm} {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div<{ $full?: boolean }>`
  display: grid;
  gap: 8px;
  ${({ $full }) =>
    $full &&
    css`
      grid-column: 1 / -1;
    `}

  label {
    font-size: 0.92rem;
    font-weight: 650;
    color: ${color.ink};
  }

  label small {
    font-weight: 500;
    color: ${color.muted};
  }
`;

const inputStyles = css`
  width: 100%;
  padding: 14px 16px;
  border-radius: ${radius.sm};
  border: 1px solid ${color.line};
  background: ${color.bg};
  font-size: 1rem;
  line-height: 1.5;
  color: ${color.ink};
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #a3a8c0;
  }

  &:hover {
    border-color: #cfd4e6;
  }

  &:focus {
    outline: none;
    background: #fff;
    border-color: ${color.brand};
    box-shadow: 0 0 0 4px rgba(24, 33, 109, 0.1);
  }

  &[aria-invalid="true"] {
    border-color: ${color.danger};
    background: #fff;
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const TextArea = styled.textarea`
  ${inputStyles}
  min-height: 170px;
  resize: vertical;
`;

const Error = styled.span`
  min-height: 1.2em;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${color.danger};
`;

const HoneyPot = styled.div`
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

const Footer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const Note = styled.p`
  max-width: 340px;
  font-size: 0.85rem;
  line-height: 1.5;
  color: ${color.muted};

  a {
    text-decoration: underline;
  }
`;

const Status = styled.div<{ $ok: boolean }>`
  grid-column: 1 / -1;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 16px 18px;
  border-radius: ${radius.sm};
  font-size: 0.97rem;
  color: ${({ $ok }) => ($ok ? "#145c3c" : "#8a241d")};
  background: ${({ $ok }) => ($ok ? "#e7f6ee" : "#fdecea")};
  border: 1px solid ${({ $ok }) => ($ok ? "#bfe6d1" : "#f6c6c1")};

  strong {
    display: block;
    color: inherit;
  }

  svg {
    flex: none;
    margin-top: 2px;
  }
`;

type FieldName = "name" | "email" | "phone" | "message";

const ContactForm = ({ id = "contact-form" }: { id?: string }) => {
  const { t } = useTranslation();
  const lp = useLocalizedPath();
  const { values, errors, handleChange, handleSubmit, submitting, status } = useForm(validate);

  const errorId = (field: FieldName) => `${id}-${field}-error`;
  const fieldProps = (field: FieldName) => ({
    id: `${id}-${field}`,
    name: field,
    value: values[field],
    onChange: handleChange,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errorId(field),
  });
  const ErrorText = ({ field }: { field: FieldName }) => (
    <Error id={errorId(field)}>{errors[field] ? t(errors[field] as string) : ""}</Error>
  );

  const statusText = {
    success: { title: t("formSuccessTitle"), text: t("formSuccessSent") },
    error: { title: t("formErrorTitle"), text: t("formErrorSend") },
    network: { title: t("formErrorTitle"), text: t("formErrorNetwork") },
  } as const;

  return (
    <Form id={id} noValidate onSubmit={handleSubmit} aria-busy={submitting}>
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

      <Field>
        <label htmlFor={`${id}-name`}>{t("name")}</label>
        <Input type="text" autoComplete="name" maxLength={200} placeholder={t("Your Name")} {...fieldProps("name")} />
        <ErrorText field="name" />
      </Field>

      <Field>
        <label htmlFor={`${id}-email`}>{t("email")}</label>
        <Input type="email" autoComplete="email" maxLength={200} placeholder={t("Your Email")} {...fieldProps("email")} />
        <ErrorText field="email" />
      </Field>

      <Field $full>
        <label htmlFor={`${id}-phone`}>{t("phone")}</label>
        <Input type="tel" autoComplete="tel" maxLength={40} placeholder={t("Your Mobile Phone")} {...fieldProps("phone")} />
        <ErrorText field="phone" />
      </Field>

      <Field $full>
        <label htmlFor={`${id}-message`}>{t("message")}</label>
        <TextArea maxLength={5000} placeholder={t("Your Message")} {...fieldProps("message")} />
        <ErrorText field="message" />
      </Field>

      <div role="status" aria-live="polite" style={{ gridColumn: "1 / -1", display: status === "idle" ? "none" : "block" }}>
        {status !== "idle" && (
          <Status $ok={status === "success"}>
            <Icon name={status === "success" ? "check" : "lifebuoy"} size={20} strokeWidth={2.2} />
            <div>
              <strong>{statusText[status].title}</strong>
              {statusText[status].text}
            </div>
          </Status>
        )}
      </div>

      <Footer>
        <Note>
          {t("formPrivacyNote")} <Link to={lp("/privacy")}>{t("Privacy Policy")}</Link>
        </Note>
        <Button type="submit" disabled={submitting} arrow={!submitting}>
          {submitting ? t("Sending") : t("Submit")}
        </Button>
      </Footer>
    </Form>
  );
};

export default ContactForm;
