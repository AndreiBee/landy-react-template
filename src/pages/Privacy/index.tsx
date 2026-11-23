import { Fragment, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Container, Section, Card } from "../../components/ui/layout";
import Reveal from "../../components/ui/Reveal";
import PageHero from "../../components/sections/PageHero";
import PageMeta from "../../components/PageMeta";
import { getLanguage } from "../../translation";
import PrivacyContent from "../../content/PrivacyPageContent.json";
import CompanyInfo from "../../content/CompanyInfo.json";

type Block = string | { list: string[] };

const { color, radius } = theme;

const Article = styled(Card)`
  max-width: 820px;
  margin: 0 auto;
  padding: clamp(28px, 5vw, 56px);
  border-radius: ${radius.lg};

  > p:first-child {
    font-size: 1.15rem;
    color: ${color.ink};
  }

  h2 {
    font-size: 1.45rem;
    margin: 2.4rem 0 0.8rem;
    padding-top: 2rem;
    border-top: 1px solid ${color.line};
  }

  p,
  li {
    margin-bottom: 0.9rem;
    line-height: 1.75;
  }

  ul {
    padding-left: 1.3rem;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: underline;
    overflow-wrap: anywhere;
  }
`;

const fill = (text: string) =>
  text
    .replace(/\{name\}/g, CompanyInfo.name)
    .replace(/\{ico\}/g, CompanyInfo.ico)
    .replace(/\{email\}/g, CompanyInfo.email);

// Turn email addresses and https:// URLs in plain text into links.
const linkify = (text: string): ReactNode[] =>
  fill(text)
    .split(/([\w.+-]+@[\w-]+(?:\.[\w-]+)+|https:\/\/[^\s,]+[^\s,.])/g)
    .map((part, i) => {
      if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
      const href = part.includes("@") ? `mailto:${part}` : part;
      const external = !part.includes("@");
      return (
        <a
          key={i}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {part}
        </a>
      );
    });

const Privacy = () => {
  const { i18n } = useTranslation();
  const content = PrivacyContent[getLanguage(i18n.language)];

  return (
    <>
      <PageMeta page="privacy" />
      <PageHero eyebrow={content.updated} title={content.title} />
      <Section $tone="tint">
        <Container>
          <Reveal>
            <Article as="article">
              <p>{linkify(content.intro)}</p>
              {content.sections.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  {(section.body as Block[]).map((block, i) =>
                    typeof block === "string" ? (
                      <p key={i}>{linkify(block)}</p>
                    ) : (
                      <ul key={i}>
                        {block.list.map((item) => (
                          <li key={item}>{linkify(item)}</li>
                        ))}
                      </ul>
                    )
                  )}
                </section>
              ))}
            </Article>
          </Reveal>
        </Container>
      </Section>
    </>
  );
};

export default Privacy;
