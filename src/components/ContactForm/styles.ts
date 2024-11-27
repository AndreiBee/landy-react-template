import styled from "styled-components";

export const ContactContainer = styled("div")`
  padding: 5rem 0;
  box-sizing: border-box;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled("form")`
  width: 100%;
  max-width: 520px;
  overflow-x: hidden;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonContainer = styled("div")`
  text-align: end;
  position: relative;
  max-width: 100%; /* Přidání */
  overflow-x: hidden; /* Přidání */

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;

export const PhoneLink = styled.a`
  text-decoration: none;
  // color: blue;
  // font-weight: bold;
  font-size: 20px;
  font-family: "Roboto", sans-serif; /* Set the font style */
  transition: color 0.3s ease;
  word-wrap: break-word; /* Přidání */
  overflow-wrap: break-word; /* Přidání */

  &:hover {
    color: rgb(255, 130, 92);  /* Change color on hover */
  }
`;

export const EmailLink = styled.a`
  text-decoration: none;
  // color: blue;  /* Change the color as needed */
  // font-weight: bold;  /* Set font weight */
  font-size: 20px;  /* Set font size */
  font-family: "Roboto", sans-serif;  /* Set the font family */
  transition: color 0.3s ease;

  &:hover {
    color: rgb(255, 130, 92);  /* Change color on hover */
  }
`;

export const AddressLine = styled.div`
  text-decoration: none;
  // color: rgb(255, 130, 92);  /* Change the color as needed */
  // font-weight: bold;  /* Set font weight */
  font-size: 20px;  /* Set font size */
  font-family: "Roboto", sans-serif;  /* Set the font family */
  transition: color 0.3s ease;
`;