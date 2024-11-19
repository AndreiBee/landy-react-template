import { TFunction } from "react-i18next";
export interface ContactProps {
  title: string;
  content: string;
  section?: {
    content: string;
  }[];
  id: string;
  t: TFunction;
}

export interface ValidationTypeProps {
  type: string;
}
