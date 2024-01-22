import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Element from "./Element";

const BubbleSort = () => {
  const sortArray = useSelector((store) => store.sortArray.array);
  const sortedIndex = useSelector((store) => store.sortArray.sortedIndex);

  return (
    <DIV>
      {sortArray?.map((el, ind) => {
        let isColorToChange = sortedIndex.includes(ind);
        return <Element key={ind} val={el} isColorToChange={isColorToChange} />;
      })}
    </DIV>
  );
};

export default BubbleSort;

const DIV = styled.div`
  width: 40%;
  margin: auto;
  margin-top: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  margin-bottom: 50px;
`;
