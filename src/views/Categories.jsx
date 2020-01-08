import React, { useState, useEffect } from "react";
import Toolbar from "../cmps/Toolbar";
import catService from "../services/CatsService";
import List from "../cmps/common/List";

const Categories = () => {
  let isAjaxingForCats = false;

  const [categories, setCategories] = useState([]);
  const [selectCat, setSelectCat] = useState();
  const [editCat, setEditCat] = useState();
  const [viewCat, setViewCat] = useState();
  const [nameInput, setNameInput] = useState(editCat);

  const loadCats = async () => {
    isAjaxingForCats = true;
    const cats = await catService.getCat();
    setCategories(cats);
    isAjaxingForCats = false;
  };

  useEffect(() => {
    loadCats();
  }, []);

  const handleCatChoose = id => {
    setSelectCat(id);
  };

  const _findCat = id => {
    return categories.find(c => c._id === id);
  };

  const catEdit = id => {
    const foundCat = _findCat(id);
    setEditCat(foundCat);
  };

  const catAdd = newCat => {
    setEditCat({});
    console.log("catAdd");
  };

  const catView = id => {
    const foundCat = _findCat(id);
    setViewCat(foundCat);
  };

  const handleInput = e => {
    setNameInput(e.target.value);
  };

  const catDelete = async id => {
    isAjaxingForCats = [true];
    await catService.delCat(id);
    loadCats();
    unSelect();
    isAjaxingForCats = [false];
  };

  const handleSave = async () => {
    const editedCat = { ...editCat, name: nameInput };
    await catService.editOrAdd(editedCat);
    setEditCat(null);
    loadCats();
  };
  const isHighlited = (c) => {
    return selectCat ? (c._id === selectCat ? "highlight" : "") : ""
  }
  const unSelect = () => {
    setSelectCat();
    setEditCat();
    setViewCat();
  };

  return (
    <div className="categories">
      <Toolbar
        catId={selectCat}
        edit={catEdit}
        view={catView}
        add={catAdd}
        del={catDelete}
        back={unSelect}
      />
      {categories[0] &&
        !editCat &&
        !viewCat &&
        <List list={categories} handleClick={handleCatChoose} classCondition={isHighlited}/>
        }

      {viewCat && (
        <div className="view-categories">
          <span>{viewCat.name}</span>
        </div>
      )}

      {editCat && (
        <div className="edit-categories">
          <input placeholder={editCat.name} onChange={handleInput} />
          <button  className="btn" onClick={handleSave}>save</button>
        </div>
      )}
    </div>
  );
};

export default Categories;
