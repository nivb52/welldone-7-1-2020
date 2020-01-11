import React, { useEffect, useState, Suspense } from "react";
import Crud from "../cmps/crud";
import locService from "../services/LocService";
import catService from "../services/CatService";
import Select from "../cmps/common/Select";
// import Map from "../cmps/map/";

const Map = React.lazy(() => import("../cmps/map/"));

//For Crud component :
const fieldsToView = ["name", "address", "category"];
const fieldsToEdit = ["name", "address"];

// ==================
// Location component:
export default function Locations({ isCategorryChanged }) {
  const [categories, setCategories] = useState([
    { _id: 0, name: "loading..." }
  ]);

  const [locs, setLocs] = useState([]);
  const [isAsec, setIsAsec] = useState(true);
  const [filteredBy, setFilteredBy] = useState("all");
  const [isEditMode, setIsEditMode] = useState(false);
  // current card state (on emited changed)
  const [selectCategoryOption, setSelectCategoryOption] = useState();
  const [currentCoords, setCurrentCoords] = useState();
  const [currentAddress, setCurrentAddress] = useState();

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
    if (!isEditMode) return;
    const coords = currentCoords ? currentCoords : editedLoc.coords;
    const address = currentAddress ? currentAddress : editedLoc.address;
    const newLoc = {
      ...editedLoc,
      address,
      coords,
      category: selectCategoryOption
    };

    console.log('edited ! ');
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
    const onEditing = editedLoc && editedLoc._id ? true : false;
    setIsEditMode(onEditing);
    if (!onEditing) return;

    // set currect option for the following html select options
    if (editedLoc.category) setSelectCategoryOption(editedLoc.category);

    // set currect coords
    if (editedLoc.coords) editCoords(editedLoc.coords);
  };

  const editCoords = ({ latitude, longitude }) => {
    // const coords = { longitude, latitude };
    setCurrentCoords([longitude, latitude]);
  };

  const editAddress = ({ text , place_name}) => {
    const  address  = text || place_name;
    setCurrentAddress(address);
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
          <Suspense fallback={<div>Loading...</div>}>
            <Map
              coords={currentCoords}
              isEditable={true}
              editCoords={editCoords}
              editAddressByGeocoder={editAddress}
            />
          </Suspense>
        )}
      </Crud>
    </div>
  );
}
