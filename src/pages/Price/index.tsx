import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import PageMeta from "../../components/PageMeta";
import PriceContent from "../../content/PricePageContent.json";
import { getLanguage } from "../../translation";
import { Container, Section, Card } from "../../components/ui/layout";
import Reveal from "../../components/ui/Reveal";
import PageHero from "../../components/sections/PageHero";
import CtaBand from "../../components/sections/CtaBand";

const { color } = theme;

const TableCard = styled(Card)`
  overflow-x: auto;
  max-width: 900px;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 520px;

  th,
  td {
    padding: 18px 24px;
    text-align: left;
    border-bottom: 1px solid ${color.line};
  }

  th {
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${color.muted};
    background: ${color.bg};
  }

  td {
    color: ${color.ink};
    font-weight: 600;
  }

  td:not(:first-child),
  th:not(:first-child) {
    text-align: right;
  }

  tr:last-child td {
    border-bottom: 0;
  }
`;

const Note = styled.p`
  max-width: 900px;
  margin: 16px auto 0;
  font-size: 0.9rem;
  color: ${color.muted};
`;

// Not linked from the navigation and marked noindex (see pages.json).
const Price = () => {
  const { i18n } = useTranslation();
  const c = PriceContent[getLanguage(i18n.language)];

  return (
    <>
      <PageMeta page="price" noIndex />
      <PageHero title={c.title} />
      <Section $tone="tint">
        <Container>
          <Reveal>
            <TableCard>
              <Table>
                <thead>
                  <tr>
                    {c.columns.map((col) => (
                      <th key={col} scope="col">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.rows.map((row) => (
                    <tr key={row.service}>
                      <td>{row.service}</td>
                      <td>{row.priceWithoutContract}</td>
                      <td>{row.priceWithContract}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableCard>
            <Note>{c.priceNote}</Note>
          </Reveal>
        </Container>
      </Section>
      <CtaBand spaced />
    </>
  );
};

export default Price;
