import { TFunction } from "react-i18next";
export interface ContactProps {
  title: string;
  content: string;
  phone: string;
  email: string;
  in_number: string;
  id: string;
  t: TFunction;
}

export interface ValidationTypeProps {
  type: string;
}
