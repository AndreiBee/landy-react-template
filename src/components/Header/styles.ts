import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const CustomLink = styled(Link)`
  font-size: 1.2rem;
  color: #18216d;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
    align-self: center; /* Vertically center the Burger in the flex container */
    margin: 0px 0px 0px 50px; /* Add horizontal margins */
    cursor: pointer;
  }

  display: none;

  svg {
    fill: #2e186a;
    // vertical-align: middle;
    cursor: pointer;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  width: 120px;
  font-size: 1.2rem;
  color: #18216d;
  transition: color 0.2s ease-in;
  // margin: 0; /* Reset margin */
  // padding: 0; /* Reset padding */
  // display: flex;
  align-items: center; /* Vertikální zarovnání uvnitř tlačítka */
  justify-content: center; /* Horizontální zarovnání */
  margin: 0.5rem 0rem 0.5rem 1rem;
  // margin: 0;
  // margin: 0.9rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  // justify-content: center;

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;

export const LanguageSwitch = styled("div")`
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  margin: 10px;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  align-items: center;
  width: 85px;
`;

export const LanguageAndNavBarDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  // flex-wrap: wrap;
  // width: 200px;
  // height: 200px;
`;