import type { TFunction } from "i18next";
export interface ContactProps {
  title: string;
  content: string;
  email: string;
  in_number: string;
  acc_number: string;
  qr_payment_image: string;
  id: string;
  t: TFunction;
}

export interface ValidationTypeProps {
  type: string;
}
