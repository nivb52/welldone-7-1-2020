import {makeId} from "./UtilServices.js";

export default {
  getCat,
  delCat,
  editOrAdd
};

const dbCat = [
  { _id: "0ewad0", name: "Travel" },
  { _id: "1djaW1", name: "Snowboard" },
  { _id: "2fAcp2", name: "Kitesurf" },
  { _id: "3dl0P3", name: "Hiking" },
  { _id: "4ljfq4", name: "Luxury" },
  { _id: "5dape5", name: "Trending" },
  { _id: "6gXpf6", name: "Most Popular" }
];

async function getCat() {
  const categories = [];
  dbCat.map(c => categories.push(c));
  return categories;
}

async function delCat(id) {
  const index = dbCat.findIndex(c => c._id === id);
  console.log(index);
  
  if (index === -1) return;
  dbCat.splice(index, 1);
  _returnDB();
}

function _editCat(newCat) {
  const idx = dbCat.findIndex(c => c._id === newCat._id);
  dbCat[idx] = newCat; // add to the Virtual DB as well:
}

function _addCat(newCat) {
  const newId = makeId();
  newCat._id = newId;
  dbCat.push(newCat);
}

function editOrAdd(newCat) {
  // return on empty
  if (!newCat) return;

  // toggle between edit and add
  if (newCat._id) _editCat(newCat);
  else _addCat(newCat);
  _returnDB();
}

function _returnDB() {
  // return new array with no connection to original db
  let categories = [...dbCat];
  return categories;
}
