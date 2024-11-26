import React, { useState } from "react";
import Cookies from "js-cookie";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
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
      <SvgIcon src="cookies.svg" width="80px" height="80px"/>
      <Message>{t("cookieBannerMsg")}</Message>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <AcceptButton onClick={handleAccept}>{t("cookieBannerAcceptBtn")}</AcceptButton>
        <RejectButton onClick={handleReject}>{t("cookieBannerRejectBtn")}</RejectButton>
      </div>
    </CookieBannerContainer>
  );
};

export default withTranslation()(CookieBanner);
