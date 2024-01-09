import { useState } from "react";
import InputForm from "./components/InputForm";
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <DIV>
      <InputForm/>
    </DIV>
  );
}

export default App;

const DIV=styled.div`
  display: flex;
  justify-content: center;
`