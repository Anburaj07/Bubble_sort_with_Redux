import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Element from "./Element";

const BubbleSort = () => {
  const sortArray = useSelector((store) => store.sortArray.array);
  const obj = useSelector((store) => store.sortArray.obj);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let intervalID = setInterval(() => {
      setIndex((prev) => {
        if (!sortArray[prev + 1]) {
          clearInterval(intervalID);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);
  console.log(index);
  return (
    <DIV>
      {sortArray[index]?.map((el, ind) => {
        let coloredIndex = obj[index];
        let isColorToChange = coloredIndex.includes(ind);
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
