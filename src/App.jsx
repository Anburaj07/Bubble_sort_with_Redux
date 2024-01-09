import { useState } from "react";
import InputForm from "./components/InputForm";
import styled from "styled-components";
import { useSelector } from "react-redux";
import BubbleSort from "./components/BubbleSort";

function App() {
  const [count, setCount] = useState(0);
  const sortOrder=useSelector((store)=>store.sort.order);
  console.log('sortOrder:', sortOrder)
  return (
    <DIV>
      <InputForm/>
      {sortOrder&& <BubbleSort/>}
    </DIV>
  );
}

export default App;

const DIV=styled.div`
  display: flex;
  justify-content: center;
`