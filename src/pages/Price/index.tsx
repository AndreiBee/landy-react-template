import { lazy } from "react";
import { useTranslation } from "react-i18next";
import PriceContent from "../../content/PricePageContent.json";

const Container = lazy(() => import("../../common/Container"));
const TableBlock = lazy(() => import("../../components/TableBlock"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Price = () => {
  const { i18n } = useTranslation(); // Hook to use translations
  const currentLanguage = i18n.language as "en" | "cs"; // Assert the language type explicitly

  return (
    <Container>
      <ScrollToTop />
      <TableBlock
        direction="right"
        title={PriceContent[currentLanguage].title}
        columns={PriceContent[currentLanguage].columns}
        rows={PriceContent[currentLanguage].rows}
        priceNote={PriceContent[currentLanguage].priceNote}
        icon="payment-opt.svg"
        id="priceTable"
      />
    </Container> 
  );
};

export default Price;
