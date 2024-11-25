import React, { useState } from "react";
import Cookies from "js-cookie";
import { withTranslation } from "react-i18next";
import {
  CookieBannerContainer,
  Message,
  AcceptButton,
  RejectButton,
} from "./styles";

const CookieBanner = ({ t }: { t: (key: string) => string }) => {
  const [isVisible, setIsVisible] = useState(!Cookies.get("cookiesAccepted"));

  const handleAccept = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 30 });
    setIsVisible(false);
  };

  const handleReject = () => {
    Cookies.set("cookiesAccepted", "false", { expires: 30 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <CookieBannerContainer>
      <Message>{t("cookieBannerMsg")}</Message>
      <div>
        <AcceptButton onClick={handleAccept}>{t("cookieBannerAcceptBtn")}</AcceptButton>
        <RejectButton onClick={handleReject}>{t("cookieBannerRejectBtn")}</RejectButton>
      </div>
    </CookieBannerContainer>
  );
};

export default withTranslation()(CookieBanner);
