import React, { useEffect, useState } from "react";
import Cards from "../cmps/common/Cards";
import locService from "../services/LocService";

// TODO :
// .. LOCATION properties: name, address, coordinates, and category.
// ADD LOCATION -> must associate with category
// show location on the map
// sort, group and filter location
// manage location same as categories

export default function Locations() {
  useEffect(() => {
    getLocations();
  }, []);
  //   useEffect(() => {}, locs);

  //   let isAjaxingForCards = false;
  const [locs, setLocs] = useState([]);

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

  const filterBy = () => {
    console.log("filter");
  };
  const groupBy = () => {
    console.log("group");
  };
  const sortBy = () => {
    locService.sortBy("name");
    getLocations();
  };

  return (
    <div className="locations-page">
      <div className="sidebar">
        <button className="btn" onClick={filterBy}>
          filter
        </button>
        <button className="btn" onClick={sortBy}>
          sort
        </button>
        <button className="btn" onClick={groupBy}>
          group
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
