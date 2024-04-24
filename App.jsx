import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";

function App() {

    const [value,setValue]=useState(false)

  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={()=>setValue(!value)}>{value?"Show Fictional book":"Show Non-Fictional book"}</button>

      <div data-testid="conditional-container">
        {/* Render either Fiction or NonFiction Based on the Condition */}
        {value?"<Nonfiction/>":"<Fiction/>"}
      </div>
    </div>
  );
}

export default App;
