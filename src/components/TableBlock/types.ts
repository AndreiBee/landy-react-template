import { TFunction } from "react-i18next";
export interface TableBlockProps {
  icon: string;
  title: string;
  columns?: string[];
  rows?: { [key: string]: string }[];
  priceNote: string;
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
