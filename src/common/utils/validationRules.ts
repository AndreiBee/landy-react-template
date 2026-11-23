import { validateProps } from "../../common/types";

// Returns translation keys; the form translates them when it shows them.
export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  const name = (values.name || "").trim();
  const email = (values.email || "").trim();
  const phone = (values.phone || "").trim();
  const message = (values.message || "").trim();

  if (!name) {
    errors.name = "errorNameRequired";
  }
  if (!email) {
    errors.email = "errorEmailRequired";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    errors.email = "errorEmailInvalid";
  }
  // Phone is optional, but if given it must look like a phone number
  // (digits with optional +, spaces, dashes, dots and brackets).
  if (phone && !/^\+?[\d\s().-]{6,20}$/.test(phone)) {
    errors.phone = "errorPhoneInvalid";
  }
  if (!message) {
    errors.message = "errorMessageRequired";
  }
  return errors;
}
