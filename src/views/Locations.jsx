import React from "react";
import Cards from "../cmps/common/Cards";
import locService from "../services/LocService";

// TODO :
// .. LOCATION properties: name, address, coordinates, and category.
// ADD LOCATION -> must associate with category
// show location on the map
// sort group and filter location
// manage location same as categories

export default function Cats() {
  const deleteLocation = async id => {
    await locService.delLoc(id);
  };
  const getLocations = async () => {
    const cats = await locService.getLoc();
    return cats;
  };

  const editOrAddLocation = async editedCat => {
    await locService.editOrAdd(editedCat);
  };
  return (
    <>
      <Cards
        getCards={getLocations}
        deleteCard={deleteLocation}
        editOrAddCards={editOrAddLocation}
        title = "Locations"
      ></Cards>
    </>
  );
}
