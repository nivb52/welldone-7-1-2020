import { makeId } from "./UtilServices.js";

export default {
  getLoc,
  delLoc,
  editOrAdd,
  sortBy,
  filterBy
};
let db;
const data = [
  {
    _id: "0ewad0",
    address: "address",
    name: "Brazil",
    coords: { lat: 35.5451, lon: 37.5425 },
    category: "Travel"
  },
  {
    _id: "1djaW1",
    address: "address",
    name: "Austria",
    coords: { lat: 35.5451, lon: 37.5425 },
    category: "Snowboard"
  },
  {
    _id: "2fAcp2",
    address: "address",
    name: "Portugal",
    coords: { lat: 35.5451, lon: 37.5425 },
    category: "Kitesurf"
  },
  {
    _id: "3dl0P3",
    address: "address",
    name: "Greece",
    coords: { lat: 35.5451, lon: 37.5425 },
    category: "Most Popular"
  },
  {
    _id: "4ljfq4",
    address: "address",
    name: "Israel",
    coords: { lat: 35.5451, lon: 37.5425 },
    category: "Most Popular"
  },
  {
    _id: "5XjNq5",
    address: "address",
    name: "Dubai",
    coords: { lat: 35.5451, lon: 37.5425 },
    category: "Luxury"
  },
  {
    _id: "6dape6",
    address: "address",
    name: "Spain",
    coords: { lat: 35.5451, lon: 37.5425 },
    category: "Trending"
  },
  {
    _id: "723de7",
    address: "address",
    name: "China",
    coords: { lat: 35.5451, lon: 37.5425 },
    category: "Hiking"
  },
  {
    _id: "8Y3de8",
    address: "address",
    name: "Timbaktu",
    coords: { lat: 35.5451, lon: 37.5425 },
    category: "Hiking"
  },
  {
    _id: "9gXpf9",
    address: "address",
    name: "France",
    coords: { lat: 35.5451, lon: 37.5425 },
    category: "Most Popular"
  }
];
const isLocalStorageOn = false;
const localStorageKey = "locations";

async function getLoc() {
  if (isLocalStorageOn) {
    const loadCat = localStorage.getItem(localStorageKey);
    if (loadCat) db = [...loadCat];
  } else if (!db) db = [...data];
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

function _returnDB(newDb = db) {
  // SAVE TO LOCAL STORAGE :
  let locations = newDb.map(c => c);
  if (isLocalStorageOn) {
    localStorage.setItem(localStorageKey, locations);
  }
  // return new array with no connection to original db
  return locations;
}

function sortBy(key, isAsec = true) {
  const keyType = typeof db[0][key] || typeof data[0][key]
  if (keyType === "string") {
    if (isAsec) db.sort((a, b) => a[key].localeCompare(b[key]));
    else db.sort((a, b) => b[key].localeCompare(a[key]));
  } else db.sort();
}


function filterBy(value, key = 'category') {
  if (!value) return
  if (value === 'all') return _returnDB()
  const filteredDb = db.filter(item => item[key] === value)
  return filteredDb
}