import { makeId } from "./UtilServices.js";

export default {
  getLoc,
  delLoc,
  editOrAdd
};
let db
const data = [
  {
    _id: "0ewad0",
    address: "address",
    name: "Brazil",
    cords: { lat: 35.5451, lon: 37.5425 },
    category: "Travel"
  },
  {
    _id: "1djaW1",
    address: "address",
    name: "Austria",
    cords: { lat: 35.5451, lon: 37.5425 },
    category: "Snowboard"
  },
  {
    _id: "2fAcp2",
    address: "address",
    name: "Portugal",
    cords: { lat: 35.5451, lon: 37.5425 },
    category: "Kitesurf"
  },
  {
    _id: "3dl0P3",
    address: "address",
    name: "Greece",
    cords: { lat: 35.5451, lon: 37.5425 },
    category: "Most Popular"
  },
  {
    _id: "4ljfq4",
    address: "address",
    name: "Israel",
    cords: { lat: 35.5451, lon: 37.5425 },
    category: "Most Popular"
  },
  {
    _id: "5dape5",
    address: "address",
    name: "Spain",
    cords: { lat: 35.5451, lon: 37.5425 },
    category: "Trending"
  },
  {
    _id: "6gXpf6",
    address: "address",
    name: "France",
    cords: { lat: 35.5451, lon: 37.5425 },
    category: "Most Popular"
  }
];
const isLocalStorageOn = false;
const localStorageKey = "locations";


async function getLoc() {
  if (isLocalStorageOn) {
    const loadCat = localStorage.getItem(localStorageKey);
    if (loadCat) db = [...loadCat];
  } else if (!db) db = [...data]
  return _returnDB();
}

async function delLoc(id) {
  const index = db.findIndex(c => c._id === id);
  if (index === -1) return;
  db.splice(index, 1);
  _returnDB();
}

function _editLoc(newLoc) {
  const idx = db.findIndex(c => c._id === newLoc._id);
  db[idx] = newLoc; // add to the Virtual DB as well:
}

function _addLoc(newLoc) {
  const newId = makeId();
  newLoc._id = newId;
  db.push(newLoc);
}

function editOrAdd(newLoc) {
  // return on empty
  if (!newLoc) return;

  // toggle between edit and add
  if (newLoc._id) _editLoc(newLoc);
  else _addLoc(newLoc);
  _returnDB();
}

function _returnDB() {
  // SAVE TO LOCAL STORAGE :
  let locations = db.map(c => c);
  if (isLocalStorageOn) {
    localStorage.setItem(localStorageKey, locations)
  }
  // return new array with no connection to original db
  return locations;
}
