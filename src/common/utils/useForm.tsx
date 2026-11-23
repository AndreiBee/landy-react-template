import { useState } from "react";
import i18n from "../../translation";

interface IValues {
  name: string;
  phone: string;
  email: string;
  message: string;
  _gotcha: string;
}

const initialValues: IValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
  _gotcha: "",
};

/** Result of the last submit, shown as a message next to the form. */
export type FormStatus = "idle" | "success" | "error" | "network";

const FORMSPREE_URL = "https://formspree.io/f/myzypwqy";

export const useForm = (validate: { (values: IValues): Partial<IValues> }) => {
  const [formState, setFormState] = useState<{
    values: IValues;
    errors: Partial<IValues>;
  }>({
    values: { ...initialValues },
    errors: {},
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    const values = formState.values;
    const errors = validate(values);
    setFormState((prevState) => ({ ...prevState, errors }));

    if (Object.values(errors).some((error) => error)) {
      return;
    }

    // Bots fill the hidden "_gotcha" field; pretend success and drop it.
    if (values._gotcha) {
      setFormState({ values: { ...initialValues }, errors: {} });
      setStatus("success");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          message: values.message.trim(),
          language: i18n.language,
          _replyto: values.email.trim(),
          _subject: `arvion.cz – ${values.name.trim()}`,
        }),
      });

      if (!response.ok) {
        setStatus("error");
      } else {
        setFormState({ values: { ...initialValues }, errors: {} });
        setStatus("success");
      }
    } catch (error) {
      setStatus("network");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (status !== "idle") setStatus("idle");
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: "",
      },
    }));
  };

  return {
    handleChange,
    handleSubmit,
    submitting,
    status,
    values: formState.values,
    errors: formState.errors,
  };
};
