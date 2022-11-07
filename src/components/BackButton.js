import styled from "styled-components";
import { navigate } from "gatsby";
import * as React from "react";

export const Button = styled.button`
  color: #1890ff;
  background-color: rgb(10, 13, 20);
  padding: 10px 20px;
  border-radius: 5px;
  border-color: rgb(10, 13, 20);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;

export const BackButton = () => {
  return (
    <Button onClick={() => navigate("/")}>&#10094;&nbsp;&nbsp;Go back</Button>
  );
};
