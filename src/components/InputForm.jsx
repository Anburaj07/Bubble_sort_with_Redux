import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSortingArray } from "../redux/slices/sortArraySlice";
import { setSortingOrder } from "../redux/slices/sortOrderSlice";

const InputForm = () => {
  const [array, setArray] = useState("");
  const [order, setOrder] = useState("");
  const dispatch = useDispatch();

  const bubbleSort = async (arr, order) => {
    let newArray = [...arr]; // shallow copy of the array
    let sortedIndex = [];
    let n = newArray.length;

    for (let i = 0; i < n - 1; i++) {
      let flag = 0;
      for (let j = 0; j < n - i - 1; j++) {
        if (
          (order === "asc" && newArray[j] > newArray[j + 1]) ||
          (order === "desc" && newArray[j] < newArray[j + 1])
        ) {
          flag = 1;
          let temp = newArray[j];
          newArray[j] = newArray[j + 1];
          newArray[j + 1] = temp;

          sortedIndex = [j, j + 1];
          dispatch(setSortingArray({ array: [...newArray], sortedIndex }));
          dispatch(setSortingOrder(order));

          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
      if (!flag) {
        sortedIndex = [-1, -1];
        dispatch(setSortingArray({ array: [...newArray], sortedIndex }));
        dispatch(setSortingOrder(order));

        await new Promise((resolve) => setTimeout(resolve, 1000));
        break;
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const arrayInput = array.split(",").map((num) => parseInt(num, 10));

    //Input Validation
    if (arrayInput.length <= 1) {
      alert("Please enter atleast two numbers!");
      return;
    }

    bubbleSort(arrayInput, order);
  };

  return (
    <DIV>
      <form onSubmit={handleSearch}>
        <h2>Bubble sorting</h2>
        <div>
          <label>Input Array</label>
          <input
            type="text"
            value={array}
            placeholder="Enter Array of numbers"
            onChange={(e) => setArray(e.target.value)}
          />
        </div>
        <div>
          <label>Sorting Order</label>
          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="">Select Sorting Order</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div>
          <button type="submit">Sort now!</button>
        </div>
      </form>
    </DIV>
  );
};

export default InputForm;

const DIV = styled.div`
  width: 35%;
  margin: auto;
  margin-top: 50px;
  text-align: center;
  form {
    display: flex;
    flex-direction: column;
    padding: 30px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    gap: 20px;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    input,
    select {
      background-color: transparent;
      color: black;
      padding: 4px;
      border: 0.5px solid black;
      border-radius: 4px;
    }
  }
`;
