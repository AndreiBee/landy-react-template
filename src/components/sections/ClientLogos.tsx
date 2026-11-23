import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import clients from "../../content/Clients.json";
import { Container } from "../ui/layout";
import Reveal from "../ui/Reveal";

const { color, bp } = theme;

const Wrap = styled.section`
  padding: 48px 0 56px;
  background: ${color.surface};
  border-bottom: 1px solid ${color.line};
`;

const Title = styled.p`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: ${color.muted};
  margin-bottom: 28px;
`;

const Row = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  align-items: center;

  ${bp.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const LogoLink = styled.a`
  display: grid;
  place-items: center;
  height: 88px;
  padding: 14px 22px;
  border-radius: 16px;
  border: 1px solid transparent;
  transition: border-color 0.25s ease, background 0.25s ease;

  img {
    max-height: 56px;
    width: auto;
    object-fit: contain;
    filter: grayscale(1);
    opacity: 0.6;
    transition: filter 0.25s ease, opacity 0.25s ease;
  }

  &:hover,
  &:focus-visible {
    border-color: ${color.line};
    background: ${color.bg};

    img {
      filter: none;
      opacity: 1;
    }
  }
`;

const ClientLogos = () => {
  const { t } = useTranslation();
  return (
    <Wrap aria-labelledby="clients-title">
      <Container>
        <Reveal>
          <Title id="clients-title">{t("clientsTitle")}</Title>
          <Row>
            {clients.map((client) => (
              <li key={client.name}>
                <LogoLink href={client.link} target="_blank" rel="noopener noreferrer" title={client.name}>
                  <img src={`/img/svg/${client.logo}`} alt={client.name} loading="lazy" />
                </LogoLink>
              </li>
            ))}
          </Row>
        </Reveal>
      </Container>
    </Wrap>
  );
};

export default ClientLogos;
