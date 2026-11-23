import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import PageMeta from "../../components/PageMeta";
import BlogContent from "../../content/BlogPageContent.json";
import { getLanguage } from "../../translation";
import { Container, Section, Card } from "../../components/ui/layout";
import Icon from "../../components/ui/Icon";
import Reveal from "../../components/ui/Reveal";
import PageHero from "../../components/sections/PageHero";
import CtaBand from "../../components/sections/CtaBand";

const { color, bp, radius } = theme;

const List = styled.div`
  display: grid;
  gap: 28px;
`;

const Article = styled(Card)`
  overflow: hidden;
  scroll-margin-top: 100px;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;

  ${bp.md} {
    grid-template-columns: 1fr;
  }
`;

const Cover = styled.div`
  background: linear-gradient(135deg, ${color.tint}, #fff);
  display: grid;
  place-items: center;
  padding: 24px;

  img {
    width: 100%;
    max-height: 220px;
    object-fit: contain;
  }
`;

const Body = styled.div`
  display: grid;
  gap: 14px;
  align-content: center;
  padding: clamp(24px, 4vw, 40px);

  h2 {
    font-size: clamp(1.35rem, 2.4vw, 1.75rem);
  }
`;

const Tags = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  li {
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 0.78rem;
    font-weight: 650;
    color: ${color.brand};
    background: ${color.tint};
  }
`;

const Toggle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  margin-top: 4px;
  padding: 0;
  border: 0;
  background: none;
  font-weight: 700;
  color: ${color.brand};
  cursor: pointer;

  svg {
    transition: transform 0.2s ease;
  }

  &[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }

  &:hover {
    color: ${color.accentText};
  }
`;

const Full = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  padding: 0 clamp(24px, 4vw, 40px) clamp(24px, 4vw, 40px);

  ${bp.md} {
    grid-template-columns: 1fr;
  }
`;

const Part = styled.section`
  padding: 22px 24px;
  border-radius: ${radius.md};
  background: ${color.bg};

  h3 {
    font-size: 1.05rem;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    display: grid;
    gap: 8px;
  }

  li {
    display: flex;
    gap: 10px;
    font-size: 0.97rem;
  }

  svg {
    flex: none;
    margin-top: 5px;
    color: ${color.accentDeep};
  }
`;

const Blog = () => {
  const { t, i18n } = useTranslation();
  const lang = getLanguage(i18n.language);
  const articles = BlogContent[lang];
  const { hash } = useLocation();
  const [open, setOpen] = useState<Record<number, boolean>>({});

  // Opening /blog#article-2 (e.g. from the home page) expands that article.
  useEffect(() => {
    const match = hash.match(/^#article-(\d+)$/);
    if (match) setOpen((prev) => ({ ...prev, [Number(match[1])]: true }));
  }, [hash]);

  return (
    <>
      <PageMeta page="blog" />
      <PageHero eyebrow="Blog" title={t("blogTitle")} lead={t("blogLead")} />

      <Section $tone="tint">
        <Container>
          <List>
            {articles.map((article) => {
              const isOpen = Boolean(open[article.id]);
              const panelId = `article-${article.id}-content`;
              return (
                <Reveal key={article.id}>
                  <Article as="article" id={`article-${article.id}`}>
                    <Top>
                      <Cover>
                        <img src={article.image} alt="" loading="lazy" />
                      </Cover>
                      <Body>
                        <Tags aria-label={t("tags")}>
                          {article.tags.slice(0, 3).map((tag) => (
                            <li key={tag}>#{tag}</li>
                          ))}
                        </Tags>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <Toggle
                          type="button"
                          aria-expanded={isOpen}
                          aria-controls={panelId}
                          onClick={() => setOpen((prev) => ({ ...prev, [article.id]: !isOpen }))}
                        >
                          {isOpen ? t("Hide") : t("readArticle")}
                          <Icon name="chevronDown" size={18} strokeWidth={2.2} />
                        </Toggle>
                      </Body>
                    </Top>
                    {isOpen && (
                      <Full id={panelId}>
                        {Object.entries(article.fullContent).map(([heading, items]) => (
                          <Part key={heading}>
                            <h3>{heading}</h3>
                            <ul>
                              {(items as string[]).map((item) => (
                                <li key={item}>
                                  <Icon name="check" size={15} strokeWidth={2.4} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </Part>
                        ))}
                      </Full>
                    )}
                  </Article>
                </Reveal>
              );
            })}
          </List>
        </Container>
      </Section>
      <CtaBand spaced />
    </>
  );
};

export default Blog;
