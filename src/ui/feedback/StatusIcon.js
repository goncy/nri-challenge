import React from "react";
import styled, {css} from "styled-components";

const statusStyles = {
  success: css`
    background-color: mediumspringgreen;

    .line-1 {
      transform: rotate(45deg);
      width: 4px;
      margin-right: 8px;
      margin-top: 4px;
    }

    .line-2,
    .line-3 {
      transform: rotate(-45deg);
      margin-left: 3px;
    }
  `,
  error: css`
    background-color: crimson;

    .line-1 {
      transform: rotate(45deg);
    }

    .line-2,
    .line-3 {
      transform: rotate(-45deg);
    }
  `,
  info: css`
    background-color: cornflowerblue;

    .line-1 {
      margin-right: 8px;
      width: 1px;
    }

    .line-2 {
      width: 1px;
    }

    .line-3 {
      margin-left: 8px;
      width: 1px;
    }
  `,
};

const Container = styled.div`
  width: 24px;
  height: 24px;
  background-color: gainsboro;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 50%;
  transition: background-color 0.2s;
  will-change: background-color;

  .line {
    position: absolute;
    width: 12px;
    height: 1px;
    border: 1px solid white;
    background: white;
    border-radius: 2px;
    transition-property: transform, width;
    transition-duration: 0.2s;
    will-change: transform, width;
  }

  ${({status}) => statusStyles[status]};
`;

const StatusIcon = ({status}) => (
  <Container status={status}>
    <div className="line line-1" />
    <div className="line line-2" />
    <div className="line line-3" />
  </Container>
);

export default StatusIcon;
