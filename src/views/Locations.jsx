import React, { useEffect, useState } from "react";
import Cards from "../cmps/common/Cards";
import locService from "../services/LocService";
import catService from "../services/CatsService";

// TODO :
// .. LOCATION properties: name, address, coordinates, and category.
// show location on the map
// ADD LOCATION -> must associate with category
// manage location same as categories

export default function Locations() {
  const [categories, setCategories] = useState([
    { id: null, name: "loading..." }
  ]);
  const [locs, setLocs] = useState([]);

  useEffect(async () => {
    getLocations();
    setCategories(await catService.getCat());
  }, []);

  //  let isAjaxing = false;

  const getLocations = async () => {
    setLocs(await locService.getLoc());
    return locs;
  };

  const deleteLocation = async id => {
    await locService.delLoc(id);
    getLocations();
  };

  const editOrAddLocation = async editedCat => {
    await locService.editOrAdd(editedCat);
    getLocations();
  };

  const filterBy = e => {
    const { value } = e.target;
    if (value === 'all') getLocations()
    const filteredDb = locService.filterBy(value, "category");
    setLocs(filteredDb);
  };

  const groupBy = () => {
    locService.sortBy("category");
    getLocations();
  };

  const [isAsec, setIsAsec] = useState(true);
  const sortBy = () => {
    locService.sortBy("name", isAsec);
    setIsAsec(!isAsec);
    getLocations();
  };

  return (
    <div className="locations-page">
      <div className="sidebar">
        {categories && categories[0] && (
          <div>
            filter
            <select className="btn" onChange={filterBy}>
            <option key='all' value='all'> All </option>
              {categories.map(category => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        )}
        <button className="btn" onClick={sortBy}>
          sort {isAsec ? " a - z" : " z    - a"}
        </button>
        <button className="btn" onClick={groupBy}>
          group by category
        </button>
      </div>
      <Cards
        cards={locs}
        deleteCard={deleteLocation}
        editOrAddCards={editOrAddLocation}
        title="Locations"
      ></Cards>
    </div>
  );
}
