import React, {useEffect, useState} from "react";
import Cards from "../cmps/common/Cards";
import catService from "../services/CatsService";

export default function Categories() {
  
  useEffect(() => {
    getCategories();
  }, []);

  //   let isAjaxingForCards = false;
  const [cats, setCats] = useState([]);
  
  const getCategories = async () => {
    setCats(await catService.getCat());
    return cats;
  };

  const deleteCategory = async id => {
    await catService.delCat(id);
    getCategories()
  };
  

  const editOrAddCategory = async editedCat => {
    await catService.editOrAdd(editedCat);
    getCategories()
  };
  return (
    <>
      <Cards
        cards={cats}
        deleteCard={deleteCategory}
        editOrAddCards={editOrAddCategory}
        title = "Categories"
      ></Cards>
    </>
  );
}
