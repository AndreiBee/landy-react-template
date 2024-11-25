import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
  justify-content: center; /* Zarovnání obsahu na střed */
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: auto;
  // max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }

  @media screen and (min-width: 765px) {
    padding-right: 4rem;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

/* Table Styling */
export const TableContainer = styled("div")`
  overflow-x: auto;
  margin-top: 20px;
`;

export const StyledTable = styled("table")`
  border-collapse: collapse;
  margin: 25px auto;
  font-size: 12px;
  font-family: "Arial", sans-serif;
  width: 100%;
  text-align: left;
  border: 1px solid #ddd;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TableHead = styled("thead")`
  background-color: #f4f4f4;
  color: #333;
  font-weight: bold;

  th {
    padding: 12px 15px;
  }
`;

export const TableBody = styled("tbody")`
  tr {
    border-bottom: 1px solid #ddd;

    &:nth-of-type(even) {
      background-color: #f9f9f9;
    }

    &:hover {
      background-color: #f1f1f1;
      cursor: pointer;
    }
  }

  td {
    padding: 12px 15px;
  }

  // tr:last-of-type {
  //   border-bottom: 2px solid #009879;
  // }
`;
