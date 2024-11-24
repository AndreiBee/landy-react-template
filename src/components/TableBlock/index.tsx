import { Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  ContentWrapper,
  // ServiceWrapper,
  // MinTitle,
  // MinPara,
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
  t,
  id,
  direction,
}: ContentBlockProps) => {
  // Map column names to row keys
  const columnKeyMap: { [key: string]: string } = {
    "Služba": "service",
    "Cena bez smlouvy": "priceWithoutContract",
    "Cena při uzavření smlouvy": "priceWithContract",
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
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
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
                            <td key={colIndex}>{row[columnKeyMap[col]]}</td>
                          ))}
                        </tr>
                      ))}
                    </TableBody>
                  </StyledTable>
                </TableContainer>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
