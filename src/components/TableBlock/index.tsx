import { Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { SvgIcon } from "../../common/SvgIcon";
import {
  Para,
  ContentSection,
  ContentWrapper,
  StyledRow,
  TableContainer,
  StyledTable,
  TableHead,
  TableBody
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  columns,
  rows,
  priceNote,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  // Map column names to row keys
const columnKeyMap = {
    [t("Služba")]: "service",
    [t("Cena bez smlouvy [Kč/h]")]: "priceWithoutContract",
    [t("Cena při uzavření smlouvy [Kč/h]")]: "priceWithContract",
    [t("Service")]: "service",
    [t("Price Without Contract [USD/h]")]: "priceWithoutContract",
    [t("Price With Contract [USD/h]")]: "priceWithContract",
  };

  // const scrollTo = (id: string) => {
  //   const element = document.getElementById(id) as HTMLDivElement;
  //   element.scrollIntoView({
  //     behavior: "smooth",
  //   });
  // };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={10} md={10} sm={16} xs={16}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={14} md={14} sm={24} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              {/* Render the table if columns and rows are provided */}
              {columns && rows && (
                <TableContainer>
                  <StyledTable>
                    <TableHead>
                      <tr>
                        {columns.map((col, index) => (
                          <th key={index}>{t(col)}</th>
                        ))}
                      </tr>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {columns.map((col, colIndex) => (
                            <td key={colIndex}>{row[columnKeyMap[t(col)]]}</td>
                          ))}
                        </tr>
                      ))}
                    </TableBody>
                  </StyledTable>
                </TableContainer>
              )}
              <Para>
                {t(priceNote)}
              </Para>
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
