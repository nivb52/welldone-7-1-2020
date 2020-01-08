import React, { useState } from "react";
import Categories from "./views/Categories";
import ToogleBar from "./cmps/ToogleBar";
import "./style/layout.css";

function App() {
  const [toggleCategories, setToggleCategories] = useState(true);
  const handleClick = () => {
    const toggle = !toggleCategories;
    setToggleCategories(toggle);
  };

  return (
    <div className="App">
      <header></header>
      
      <main>
        {toggleCategories && <Categories />}
        {/* {!toggleCategories && <Categories />} */}
      </main>
      
      <footer>
        <ToogleBar handleClick={handleClick} />
      </footer>
    </div>
  );
}

export default App;
