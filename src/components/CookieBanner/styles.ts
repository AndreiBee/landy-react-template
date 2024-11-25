import styled from "styled-components";

export const CookieBannerContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 1rem;
  max-width: 300px;
  z-index: 1000;
`;

export const Message = styled.p`
  color: #333;
  font-size: 14px;
  margin: 0;
  line-height: 1.5;
`;

export const AcceptButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

export const RejectButton = styled.button`
  margin-top: 1rem;
  margin-left: 10px;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #f44336;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }
`;
