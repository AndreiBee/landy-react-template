import { lazy } from "react";
import { useTranslation } from "react-i18next";
import PageMeta from "../../components/PageMeta";
import { getLanguage } from "../../translation";
import PriceContent from "../../content/PricePageContent.json";

const Container = lazy(() => import("../../common/Container"));
const TableBlock = lazy(() => import("../../components/TableBlock"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Price = () => {
  const { i18n } = useTranslation(); // Hook to use translations
  const currentLanguage = getLanguage(i18n.language);

  return (
    <>
    {/* Price list is hidden from navigation, so keep it out of search results. */}
    <PageMeta page="price" noIndex />
    <Container>
      <ScrollToTop />
      <TableBlock
        direction="right"
        title={PriceContent[currentLanguage].title}
        columns={PriceContent[currentLanguage].columns}
        rows={PriceContent[currentLanguage].rows}
        priceNote={PriceContent[currentLanguage].priceNote}
        icon="payment-opt.png"
        id="priceTable"
      />
    </Container> 
    </>
  );
};

export default Price;
