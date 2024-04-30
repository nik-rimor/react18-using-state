import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("Button was clicked");
  };
  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <p>Animals to Show: </p>
    </div>
  );
}

export default App;
