import styled from "styled-components";

const Button = styled.button`
  background-color: cornflowerblue;
  color: white;
  padding: 12px 20px;
  border-radius: 4px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  transition: opacity 0.2s;
  will-change: opacity;

  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
