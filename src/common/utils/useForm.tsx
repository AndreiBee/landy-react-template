import { useState } from "react";
import { notification } from "antd";
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

  const t = (key: string) => i18n.t(key);

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
        notification.error({
          message: t("formErrorTitle"),
          description: t("formErrorSend"),
        });
      } else {
        setFormState({ values: { ...initialValues }, errors: {} });
        notification.success({
          message: t("formSuccessTitle"),
          description: t("formSuccessSent"),
        });
      }
    } catch (error) {
      notification.error({
        message: t("formErrorTitle"),
        description: t("formErrorNetwork"),
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
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
    values: formState.values,
    errors: formState.errors,
  };
};
