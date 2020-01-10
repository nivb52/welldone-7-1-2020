import React, {useEffect, useState} from "react";
import Crud from "../cmps/crud/";
import catService from "../services/CatService";

export default function Categories({onCategoryChange}) {
  const [cats, setCats] = useState([]);
  
  useEffect( () => {
    getCategories()
    // eslint-disable-next-line
    async function fetchData() {
    const categories = await catService.getCat()
      setCats(categories);
    }
  }, []);

  //   let isAjaxing = false;
  
  const getCategories = async () => {
    setCats(await catService.getCat());
    return cats;
  };

  const deleteCategory = async id => {
    await catService.delCat(id);
    onCategoryChange()
    getCategories()
  };
  

  const editOrAddCategory = async editedCat => {
    await catService.editOrAdd(editedCat);
    onCategoryChange()
    getCategories()
  };
  return (
    <>
      <Crud
        cards={cats}
        deleteCard={deleteCategory}
        editOrAddCards={editOrAddCategory}
        title = "Categories"
      ></Crud>
    </>
  );
}
