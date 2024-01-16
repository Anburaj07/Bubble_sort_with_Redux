import React from "react";
import styled from "styled-components";

const Element = ({ val, isColorToChange }) => {
  const height = val >= 0 ? val * 5 : val * 5;
  return (
    <BOX height={height} col={isColorToChange.toString()} as="div">
      {val}
    </BOX>
  );
};

export default Element;

const BOX = styled.div`
  height: ${(props) => `${props.height}px`};
  width: 40px;
  border: 1px solid white;
  background-color: ${(props) => (props.col==="true" ? "#f53f3f" : "#481da4")};
  color: white;
  text-align: center;
  padding: 5px;
`;
