import styled from "styled-components";

export const BlogBlockWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center; /* Horizontální zarovnání */
  justify-content: center; /* Vertikální zarovnání */

  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled("img")`
  max-width: 20rem;
  max-height: 20rem;
  border-radius: 8px;
  margin-bottom: 16px;
  display: block;

  /* Media query pro menší obrazovky */
  @media (max-width: 768px) {
    max-width: 15rem; /* Zmenší maximální šířku obrázku na menších obrazovkách */
    max-height: 15rem; /* Zmenší maximální výšku obrázku */
  }

  @media (max-width: 480px) {
    max-width: 12rem; /* Ještě menší obrázek pro velmi malé obrazovky */
    max-height: 12rem;
  }
`;

export const Title = styled("h2")`
  font-size: 1.5rem;
  margin-bottom: 8px;
  margin-left: 20px;
`;

export const Description = styled("p")`
  font-size: 1rem;
  margin-bottom: 16px;
  margin-left: 20px;
  color: #555;
`;

export const TagsWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled("span")`
  display: inline-block;
  background-color: #f0f0f0;
  padding: 4px 8px;
  margin: 4px;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #333;
`;

export const FullContent = styled("div")`
  margin: 16px 0;
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
  animation: slideDown 0.3s ease-in-out;

  text-align: left; /* Zarovná text vlevo */
  max-width: 800px; /* Nastaví maximální šířku obsahu */
  width: 100%; /* Zajistí, že zabere celou dostupnou šířku */
  margin-left: auto; /* Přidá prostor na levé straně */
  margin-right: auto; /* Přidá prostor na pravé straně */

  @keyframes slideDown {
    from {
      max-height: 0;
      opacity: 0;
    }
    to {
      max-height: 100vh;
      opacity: 1;
    }
  }
`;

export const ToggleButton = styled("button")`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 8px;

  &:hover {
    background: #0056b3;
  }
`;

export const SectionWrapper = styled("div")`
  margin-bottom: 20px;
  margin-left: 20px;
`;

export const SectionTitle = styled("h3")`
  font-size: 1.5rem; /* Zmenší velikost písma */
  margin-bottom: 10px;
  // color: #333;
  font-weight: bold;
`;

export const List = styled("ul")`
  padding-left: 20px;
  list-style-type: disc; /* Předměty v seznamu budou mít tečky */
`;

export const ListItem = styled("li")`
  font-size: 1rem;
  line-height: 1.6; /* Zvýší čitelnost textu */
  color: #555;
  margin-bottom: 5px; /* Přidá mezery mezi položkami */
`;