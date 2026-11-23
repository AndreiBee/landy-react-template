import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({
  name,
  placeholder,
  onChange,
  t,
  type = "text",
  value,
  autoComplete,
  invalid,
  errorId,
}: InputProps) => (
  <Container>
    <Label htmlFor={name}>{t(name)}</Label>
    <StyledInput
      type={type}
      placeholder={t(placeholder)}
      name={name}
      id={name}
      value={value}
      autoComplete={autoComplete}
      maxLength={200}
      aria-invalid={invalid || undefined}
      aria-describedby={errorId}
      onChange={onChange}
    />
  </Container>
);

export default withTranslation()(Input);
