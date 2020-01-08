import React from "react";
import Cards from "../cmps/common/Cards";
import catService from "../services/CatsService";

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
        title = "Categories"
      ></Cards>
    </>
  );
}
