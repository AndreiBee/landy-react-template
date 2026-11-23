import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Container from "../../common/Container";
import PageMeta from "../../components/PageMeta";

const Wrapper = styled.section`
  text-align: center;
  padding: 6rem 0;

  @media only screen and (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const HomeLink = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 13px 24px;
  border-radius: 4px;
  background: #2e186a;
  color: #fff;
  font-weight: 700;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    color: #fff;
    background: rgb(255, 130, 92);
  }
`;

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageMeta page="notFound" noIndex />
      <Container>
        <Wrapper>
          <h1>404</h1>
          <h2>{t("notFoundTitle")}</h2>
          <p>{t("notFoundText")}</p>
          <HomeLink to="/">{t("notFoundButton")}</HomeLink>
        </Wrapper>
      </Container>
    </>
  );
};

export default NotFound;
