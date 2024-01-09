import React, { useState } from "react";
import styled from "styled-components";

const InputForm = () => {
  const [array, setArray] = useState("");
  const [order, setOrder] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const arrayInput = array.split(",").map((num) => parseInt(num, 10));

    console.log(arrayInput, order);
  };
  return (
    <DIV>
      <form onSubmit={handleSearch}>
        <h1>Bubble sorting</h1>
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
  form {
    display: flex;
    flex-direction: column;
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
