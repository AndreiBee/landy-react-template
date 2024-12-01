import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import {
  BlogBlockWrapper,
  Image,
  Title,
  Description,
  TagsWrapper,
  Tag,
  FullContent,
  ToggleButton,
  SectionWrapper,
  SectionTitle,
  List,
  ListItem
} from "./styles";
import { BlogBlockProps } from "./types";
import { withTranslation } from "react-i18next";

const BlogBlock = ({ title, description, tags, image, fullContent, index, t }: BlogBlockProps) => {
  const [isExpanded, setIsExpanded] = useState(false); // Stav pro otevření článku
  const slideDirection = index % 2 === 0 ? "left" : "right";

  const handleToggle = () => setIsExpanded(!isExpanded); // Přepnutí stavu

  return (
    <Slide direction={slideDirection} triggerOnce>
      <BlogBlockWrapper>
        <Image src={image} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        {isExpanded && (
        <FullContent>
          {/* Iterace přes fullContent */}
          {Object.entries(fullContent).map(([key, value], idx) => (
            <div key={idx}>
              <SectionWrapper>
                <SectionTitle>{key}</SectionTitle>
                <List>
                  {value && value.map((item, itemIdx) => (
                      <ListItem key={itemIdx}>{item}</ListItem>
                    ))}
                </List>
              </SectionWrapper>
            </div>
          ))}
        </FullContent>
      )}
        {/* {isExpanded && 
        <FullContent>
          {fullContent}
          </FullContent>
        } Plný obsah */}
        <ToggleButton onClick={handleToggle}>
          {isExpanded ? t("Hide") : t("Show More")} {/* Tlačítko */}
        </ToggleButton>
        <TagsWrapper>
          {tags.map((tag, idx) => (
            <Tag key={idx}>#{tag}</Tag>
          ))}
        </TagsWrapper>
      </BlogBlockWrapper>
    </Slide>
  );
};

export default withTranslation()(BlogBlock);
