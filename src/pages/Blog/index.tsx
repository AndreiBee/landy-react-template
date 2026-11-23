import { lazy } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import PageMeta from "../../components/PageMeta";
import { getLanguage } from "../../translation";
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
  const currentLanguage = getLanguage(i18n.language);

  const articles = BlogContent[currentLanguage];

  return (
    <>
    <PageMeta page="blog" />
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
