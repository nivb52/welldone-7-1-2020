import React, { useEffect, useState } from "react";
import Cards from "../cmps/common/Cards";
import locService from "../services/LocService";
import catService from "../services/CatsService";
import Select from "../cmps/common/Select";

// TODO :
// .. LOCATION properties: name, address, coordinates, and category.
// show location on the map

export default function Locations({ isCategorryChanged }) {
  const fieldsToView = ["name", "address", "category"];
  const fieldsToEdit = ["name", "address"];

  const [categories, setCategories] = useState([
    { id: null, name: "loading..." }
  ]);
  const [locs, setLocs] = useState([]);
  const [isAsec, setIsAsec] = useState(true);
  const [selectCategoryOption, setSelectCategoryOption] = useState();
  const [filteredBy, setFilteredBy] = useState("all");

  useEffect(() => {
      getLocations();
  }, []);

  useEffect(() => {
    getCategories();
  }, [isCategorryChanged]);

  // service
  const getLocations = async () => {
    setLocs(await locService.getLoc());
    return locs;
  };

  // service
  const getCategories = async () => {
    const cats = await catService.getCat();
    setCategories(cats);
  };

  // service
  const deleteLocation = async id => {
    await locService.delLoc(id);
    getLocations();
  };

  // service
  const editOrAddLocation = async editedLoc => {
    const newLoc = { ...editedLoc, category: selectCategoryOption };
    await locService.editOrAdd(newLoc);
    getLocations();
  };

  // service
  const filterBy = e => {
    const { value } = e.target;
    setFilteredBy(value);
    const filteredDb = locService.filterBy(value, "category");
    setLocs(filteredDb);
  };

  // service
  const groupBy = () => {
    locService.sortBy("category");
    getLocations();
  };

  // service
  const sortBy = () => {
    locService.sortBy("name", isAsec);
    setIsAsec(!isAsec);
    getLocations();
  };

  const currentEdit = editCard => {
    // set currect option for the following html select options
    setSelectCategoryOption(editCard.category);
  };

  const changeLocCategory = e => {
    const { value } = e.target;
    // set the select
    setSelectCategoryOption(value);
  };

  return (
    <div className="locations-page">
      <div className="sidebar">
        {categories && categories[0] && (
          <div>
            filter
            <Select
              title=""
              dataList={categories}
              onSelect={filterBy}
              selectedOption={filteredBy}
              valueKey={"name"}
              showKey={"name"}
              optionClass="capitalized"
              getSelectList={getCategories}
            ></Select>
          </div>
        )}
        <button className="btn" onClick={sortBy}>
          sort {isAsec ? "  a - z" : "  z - a"}
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
        inputs={fieldsToView}
        editInputs={fieldsToEdit}
        classInput="mr-bottom-1rem"
        currentEdit={currentEdit}
        showMap={true}
      >
        <Select
          title="category"
          isShowAllOption={false}
          selectedOption={selectCategoryOption}
          dataList={categories}
          onSelect={changeLocCategory}
          valueKey={"name"}
          showKey={"name"}
          optionClass="capitalized"
          getSelectList={getCategories}
        ></Select>
      </Cards>
    </div>
  );
}
