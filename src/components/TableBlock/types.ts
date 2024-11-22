import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  columns?: string[];
  rows?: { [key: string]: string }[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
