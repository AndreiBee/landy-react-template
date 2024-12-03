import { lazy } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Helmet } from "react-helmet"; // Import Helmet
import BlogContent from "../../content/BlogPageContent.json";

const Container = lazy(() => import("../../common/Container"));
const BlogBlock = lazy(() => import("../../components/BlogBlock"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const BlogWrapper = styled.div`
  padding: 32px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 24px;
  text-align: center;
`;

const Blog = () => {
  const { i18n } = useTranslation(); // Hook for translations
  const currentLanguage = i18n.language as "en" | "cs"; // Assert language type explicitly

  const articles = BlogContent[currentLanguage];

  return (
    <>
    {/* Přidání Helmet pro SEO */}
    <Helmet>
    <title>{`Blog | ${currentLanguage === "en" ? "Our Articles" : "Naše články"}`}</title>
    <meta
      name="description"
      content={
        currentLanguage === "en"
          ? "Read our articles and learn more about our services."
          : "Přečtěte si naše články a zjistěte více o našich službách."
      }
    />
    </Helmet> 
    <Container>
      <ScrollToTop />
      <BlogWrapper>
          <Title>Blog</Title>
        {articles.map((article, index) => (
          <BlogBlock
            key={article.id}
            index={index} // Předáme index
            title={article.title}
            description={article.description}
            fullContent={article.fullContent}
            tags={article.tags}
            image={article.image}
          />
        ))}
      </BlogWrapper>
    </Container>
    </>
  );
};

export default Blog;
