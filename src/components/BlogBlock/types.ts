import type { TFunction } from "i18next";
export interface BlogBlockProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  fullContent: Partial<Record<string, string[]>>; // Plný text článku
  index: number;
  t: TFunction;
}