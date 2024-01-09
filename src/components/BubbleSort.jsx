import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const BubbleSort = () => {
  const sortInput = useSelector((store) => store.sort);
  let originalArray = sortInput.array;
  let order = sortInput.order;

  const bubbleSort = (arr, order) => {
    let steps = [];
    let newArray = [...arr]; // Create a shallow copy of the array

    let n = newArray.length;
    for (let i = 0; i < n - 1; i++) {
      let flag = 0;
      for (let j = 0; j < n - i - 1; j++) {
        if ((order === "asc" && newArray[j] > newArray[j + 1]) ||
            (order === "desc" && newArray[j] < newArray[j + 1])) {
          flag = 1;
          let temp = newArray[j];
          newArray[j] = newArray[j + 1];
          newArray[j + 1] = temp;
          steps.push([...newArray]); // Save a copy of the current state
        }
      }
      if (!flag) {
        break;
      }
    }

    return steps; // Return the array of steps
  };

  const [steps, setSteps] = useState([]);

  useEffect(() => {
    if (order) {
      const sortedSteps = bubbleSort(originalArray, order);
      setSteps(sortedSteps);
    }
  }, [originalArray, order]);
  console.log(steps)
  return (
    <DIV>
      <h2>Stpes for BubbleSort</h2>
      <div >
        {steps.map((step, index) => (
            <div style={{ display: "flex", justifyContent: "center"}}>
                {step.map((num,ind)=>(<BOX key={ind}>{num}</BOX>))}
            </div>
          
        ))}
      </div>
    </DIV>
  );
};

export default BubbleSort;

const DIV = styled.div`
text-align: center;
  width: 45%;
  margin: auto;
  margin-top: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #64c764;
  border-radius: 10px;
  padding: 2%;
  h2 {
    color: #a31188;
  }

  h1 {
    color: #a35311;
  }
`;

const BOX = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid white;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;