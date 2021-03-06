import { makeId, localStor } from "./UtilServices.js";
import {isLocalStorageOn} from './config';

export default {
  getCat,
  delCat,
  editOrAdd
};

let db;
const data = [
  { _id: "0ewad0", name: "Travel" },
  { _id: "1djaW1", name: "Snowboard" },
  { _id: "2fAcp2", name: "Kitesurf" },
  { _id: "3dl0P3", name: "Hiking" },
  { _id: "4ljfq4", name: "Luxury" },
  { _id: "5dape5", name: "Trending" },
  { _id: "6gXpf6", name: "Most Popular" }
];

const localStorageKey = "categories";

async function getCat() {
  if (isLocalStorageOn) {
    const loadedDB = localStor(localStorageKey);
    if (loadedDB) db = [...loadedDB];
    else db = [...data];
  } else if(!db) db = [...data];
  return _returnDB();
}


function _returnDB() {
  // return new array with no connection to original db
  let categories = db.map(c => c);
  // SAVE TO LOCAL STORAGE :
  if (isLocalStorageOn) {
    localStor(localStorageKey,categories)
  }
  return categories;
}

//==========================
//CRUD
async function delCat(id) {
  const index = db.findIndex(c => c._id === id);
  if (index === -1) return;
  db.splice(index, 1);
  _returnDB();
}

function _editCat(newCat) {
  const idx = db.findIndex(c => c._id === newCat._id);
  db[idx] = newCat; // add to the Virtual DB as well:
}

function _addCat(newCat) {
  const newId = makeId();
  newCat._id = newId;
  db.push(newCat);
}

function editOrAdd(newCat) {
  // return on empty
  if (!newCat) return;

  // toggle between edit and add
  if (newCat._id) _editCat(newCat);
  else _addCat(newCat);
  _returnDB();
}

