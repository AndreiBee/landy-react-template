import { TFunction } from "react-i18next";
export interface PositionBlockProps {
  icon: string;
  title: string;
  content: string;
  requirements: string[];
  offer: string[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
        scrollToSection: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
  withButtons: boolean;
}
