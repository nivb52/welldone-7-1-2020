import React from "react";
import Cards from "../cmps/common/Cards";
import catService from "../services/CatsService";

// TODO :
// .. LOCATION properties: name, address, coordinates, and category.
// ADD LOCATION -> must associate with category
// show location on the map
// sort group and filter location
// manage location same as categories

export default function Cats() {
  const deleteCategory = async id => {
    await catService.delCat(id);
  };
  const getCategories = async () => {
    const cats = await catService.getCat();
    return cats;
  };

  const editOrAddCategory = async editedCat => {
    await catService.editOrAdd(editedCat);
  };
  return (
    <>
      <Cards
        getCards={getCategories}
        deleteCard={deleteCategory}
        editOrAddCards={editOrAddCategory}
        title = "Locations"
      ></Cards>
    </>
  );
}
