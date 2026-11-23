import { Fragment, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import Container from "../../common/Container";
import PageMeta from "../../components/PageMeta";
import { getLanguage } from "../../translation";
import PrivacyContent from "../../content/PrivacyPageContent.json";
import CompanyInfo from "../../content/CompanyInfo.json";

type Block = string | { list: string[] };

const Article = styled.article`
  max-width: 760px;
  margin: 0 auto;
  padding: 4rem 0 5rem;

  h1 {
    font-size: 44px;
    margin-bottom: 0.5rem;

    @media only screen and (max-width: 414px) {
      font-size: 32px;
    }
  }

  h2 {
    font-size: 26px;
    margin: 2.5rem 0 0.75rem;
  }

  p,
  li {
    font-size: 17px;
    line-height: 1.6;
  }

  ul {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    color: #18216d;
  }

  a {
    text-decoration: underline;
    overflow-wrap: anywhere;
  }
`;

const Updated = styled.p`
  && {
    font-size: 14px;
    opacity: 0.7;
    margin-bottom: 2rem;
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
      <Container>
        <Article>
          <h1>{content.title}</h1>
          <Updated>{content.updated}</Updated>
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
      </Container>
    </>
  );
};

export default Privacy;
