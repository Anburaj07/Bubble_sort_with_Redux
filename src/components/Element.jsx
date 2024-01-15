import React from "react";
import styled from "styled-components";

const Element = ({ val}) => {
  return <BOX value={val}>
    {val}
  </BOX>;
};

export default Element;

const BOX = styled.div`
height: ${(props) => (`${props.value*10}px`)};;
  width: 40px;
  border: 1px solid white;
  color: white;
  background-color: #9e3737;
  text-align: center;
  padding:5px;
`;
