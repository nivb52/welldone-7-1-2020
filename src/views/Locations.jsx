import React, { useEffect, useState } from "react";
import Crud from "../cmps/crud";
import locService from "../services/LocService";
import catService from "../services/CatService";
import Select from "../cmps/common/Select";
import Map from "../cmps/map/";
// import SearchableMap from "../cmps/map/SearchableMap";
// import debounce from "lodash.debounce";

// TODO :
// .. LOCATION properties: name, address, coordinates, and category.

export default function Locations({ isCategorryChanged }) {
  const fieldsToView = ["name", "address", "category"];
  const fieldsToEdit = ["name", "address"];

  const [categories, setCategories] = useState([
    { id: null, name: "loading..." }
  ]);
  const [locs, setLocs] = useState([]);
  const [isAsec, setIsAsec] = useState(true);
  const [filteredBy, setFilteredBy] = useState("all");
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectCategoryOption, setSelectCategoryOption] = useState();
  const [locCoords, setLocCoords] = useState();

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
    const coords = locCoords ? locCoords : editedLoc.coords;
    console.log(coords);
    const newLoc = { ...editedLoc, coords, category: selectCategoryOption };
    await locService.editOrAdd(newLoc);
    setIsEditMode();
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

  const doOnSelect = editedLoc => {
    // toogle sidebar
    const onEditing = editedLoc ? true : false;
    setIsEditMode(onEditing);
    if (!editedLoc) return;
    
    // If there is an Location Item :
    console.log("editedLoc", editedLoc);
    const currCoords = editedLoc.coords ? editedLoc : [];

    // set currect coords
    if (editedLoc.coords) editedLoc.coords = locCoords;

    // set currect option for the following html select options
    if (editedLoc.category) setSelectCategoryOption(editedLoc.category);
  };

  const editCoords = ({ latitude, longitude }) => {
    // const coords = { longitude, latitude };
    setLocCoords([longitude, latitude]);
  };

  const changeLocCategory = e => {
    const { value } = e.target;
    // set the select
    setSelectCategoryOption(value);
  };

  return (
    <div className="locations-page">
      {isEditMode && <div></div>}
      {!isEditMode && (
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
      )}
      <Crud
        title="Locations"
        cards={locs}
        deleteCard={deleteLocation}
        editOrAddCards={editOrAddLocation}
        inputs={fieldsToView}
        editInputs={fieldsToEdit}
        classInput="mr-bottom-1rem"
        doOnSelect={doOnSelect}
        showMap={true}
      >
        {/* children */}
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
        {isEditMode && (
          <Map coords={locCoords} isEditable={true} editCoords={editCoords} />
        )}
      </Crud>
    </div>
  );
}
