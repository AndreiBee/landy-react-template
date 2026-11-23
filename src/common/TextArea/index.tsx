import { withTranslation } from "react-i18next";
import { StyledTextArea, StyledContainer, Label } from "./styles";
import { InputProps } from "../types";

const TextArea = ({
  name,
  placeholder,
  onChange,
  t,
  value,
  invalid,
  errorId,
}: InputProps) => (
  <StyledContainer>
    <Label htmlFor={name}>{t(name)}</Label>
    <StyledTextArea
      placeholder={t(placeholder)}
      id={name}
      name={name}
      value={value}
      maxLength={5000}
      aria-invalid={invalid || undefined}
      aria-describedby={errorId}
      onChange={onChange}
    />
  </StyledContainer>
);

export default withTranslation()(TextArea);
