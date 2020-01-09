import React, { useState } from "react";
import Categories from "./views/Categories";
import Locations from "./views/Locations";
import ToogleBar from "./cmps/ToogleBar";

import "./style/layout.css";

function App() {
  const [toggleCategories, setToggleCategories] = useState(false);
  //true meaning show categoreis on load

  const handleClick = btnClicked => {
    if (toggleCategories === btnClicked) return;
    const toggle = !toggleCategories;
    setToggleCategories(toggle);
  };

  const [isCategorryChanged, setIsCategorryChanged] = useState([]);
  const onCategoryChange = () => {
    setIsCategorryChanged([Math.random()]);
  };

  return (
    <div className="App">
      <header></header>

      <main>
        {toggleCategories && <Categories onCategoryChange={onCategoryChange} />}
        {!toggleCategories && (
          <Locations isCategorryChanged={isCategorryChanged} />
        )}
      </main>

      <footer>
        <ToogleBar handleClick={handleClick}>
          {["Categories", "Locations"]}
        </ToogleBar>
      </footer>
    </div>
  );
}

export default App;
