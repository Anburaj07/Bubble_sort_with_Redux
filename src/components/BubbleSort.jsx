import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const BubbleSort = () => {
  const sortInput = useSelector((store) => store.sort);
  let originalArray = sortInput.array;
  let order = sortInput.order;
  const [indArray,setIndArray]=useState([]);
  const bubbleSort = (arr, order) => {
    let steps = [];
    let newArray = [...arr]; // Create a shallow copy of the array

    let n = newArray.length;
    for (let i = 0; i < n - 1; i++) {
      let flag = 0;
      for (let j = 0; j < n - i - 1; j++) {
        if (
          (order === "asc" && newArray[j] > newArray[j + 1]) ||
          (order === "desc" && newArray[j] < newArray[j + 1])
        ) {
          flag = 1;
          setIndArray((prev)=>[...prev,j])
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
  console.log(indArray,'indArray');
  return (
    <DIV>
      <h2>Stpes for BubbleSort</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ paddingRight: "15px" }}>Step 0</p>
        {originalArray.map((el, ind) => (
          <BOX key={ind} swap={originalArray[indArray[0]]==el}>
            {el}
          </BOX>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {steps.map((step, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "center" }}>
            <p style={{ paddingRight: "15px" }}>Step {index + 1}</p>{" "}
            {step.map((num, ind) => (
              <BOX
                key={ind}
                swap={originalArray[indArray[index+1]]==num}
              >
                {num}
              </BOX>
            ))}
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
  background-color: #077979;
  border-radius: 10px;
  padding: 2%;
  h2 {
    color: #580348;
  }
  p {
    color: #15043c;
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
  background-color: ${(props) => (props.swap ? "#ff5722" : "#bc20b7")};
`;
