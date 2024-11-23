import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  columns?: {}[];
  rows?: {
    service: string;
    priceWithoutContract: string;
    priceWithContract: string;
  }[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
