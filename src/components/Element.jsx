import React from "react";
import styled from "styled-components";

const Element = ({ val, isColorToChange }) => {
  return (
    <BOX value={val} col={isColorToChange}>
      {val}
    </BOX>
  );
};

export default Element;

const BOX = styled.div`
  height: ${(props) => `${props.value*5}px`};
  width: 40px;
  border: 1px solid white;
  background-color: ${(props) => (props.col ? "#f53f3f" : "#481da4")};
  color: white;
  text-align: center;
  padding: 5px;
`;
