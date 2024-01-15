import InputForm from "./components/InputForm";
import { useSelector } from "react-redux";
import BubbleSort from "./components/BubbleSort";

function App() {
  const sortArray=useSelector((store)=>store.sortArray.array)
  const sortOrder=useSelector((store)=>store.sortOrder.order)
  // console.log('sortArray:', sortArray)
  // console.log('sortOrder:', sortOrder)
  return (
    <div>
      <InputForm/>
      {sortOrder&& <BubbleSort/>}
    </div>
  );
}

export default App;