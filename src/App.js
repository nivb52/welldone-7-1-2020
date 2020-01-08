import React, { useState } from "react";
import Categories from "./views/Categories";
import Locations from "./views/Locations";
import ToogleBar from "./cmps/ToogleBar";

import "./style/layout.css";

function App() {
  const [toggleCategories, setToggleCategories] = useState(true);
  
  const handleClick = (btnClicked) => {
    if (toggleCategories === btnClicked) return 
    const toggle = !toggleCategories;
    setToggleCategories(toggle);
  };

  return (
    <div className="App">
      <header></header>
      
      <main>
        {toggleCategories && <Categories />}
        {!toggleCategories && <Locations />}
      </main>
      
      <footer>
        <ToogleBar handleClick={handleClick} > 
          {['Categories', 'Locations']}
         </ToogleBar>
      </footer>
    </div>
  );
}

export default App;
