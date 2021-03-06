import { makeId, localStor } from "./UtilServices";
import { isLocalStorageOn } from "./config";

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
    coords: [43.4416815, -20.4285582],
    category: "Travel"
  },
  {
    _id: "1djaW1",
    address: "address",
    name: "Austria",
    coords: [-33.4416815, -20.4285582],
    category: "Snowboard"
  },
  {
    _id: "2fAcp2",
    address: "address",
    name: "Portugal",
    coords: [11.4416815, 31.4285582],
    category: "Kitesurf"
  },
  {
    _id: "3dl0P3",
    address: "address",
    name: "Greece",
    coords: [22.4416815, 32.4285582],
    category: "Most Popular"
  },
  {
    _id: "4ljfq4",
    address: "address",
    name: "Israel",
    coords: [-32.4416815, 31.4285582],
    category: "Most Popular"
  },
  {
    _id: "5XjNq5",
    address: "address",
    name: "Dubai",
    coords: [-3.4416815, 31.4285582],
    category: "Luxury"
  },
  {
    _id: "6dape6",
    address: "address",
    name: "Spain",
    coords: [-0.2416815, 54.5285582],
    category: "Trending"
  },
  {
    _id: "723de7",
    address: "address",
    name: "China",
    coords: [-0.24234815, 51.5283212],
    category: "Hiking"
  },
  {
    _id: "8Y3de8",
    address: "address",
    name: "Timbaktu",
    coords: [-0.2416815, 51.5285582],
    category: "Hiking"
  },
  {
    _id: "9gXpf9",
    address: "address",
    name: "France",
    coords: [-0.2416815, 51.5285582],
    category: "Most Popular"
  }
];

const localStorageKey = "locations";

async function getLoc() {
  if (!isLocalStorageOn) {
    if (!db) db = [...data];
  } else {
    // LOCAL STORAGE :
    const loadedDB = localStor(localStorageKey) 
    if (loadedDB && loadedDB[0]) db = [...loadedDB];
    else db = data; //on 1st visit get db from local
  }
  return _returnDB(db);
}

function _returnDB(newDb = db) {
  if (newDb) db = newDb
  // SAVE TO LOCAL STORAGE :
  if (isLocalStorageOn) {
    localStor(localStorageKey,newDb)
  }
  // return new array with no connection to original db
  let locations = newDb.map(c => c);
  return locations;
}

// =====================
// CRUD
async function delLoc(id) {
  const index = db.findIndex(c => c._id === id);
  if (index === -1) return;
  db.splice(index, 1);
  _returnDB();
}

function editOrAdd(newLoc) {
  // return on empty
  if (!newLoc) return;

  // toggle between edit and add
  if (newLoc._id) _editLoc(newLoc);
  else _addLoc(newLoc);
  _returnDB(db);
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


// =====================
// SORT & FILTER
function sortBy(key, isAsec = true) {
  const keyType = typeof db[0][key] || typeof data[0][key];
  if (keyType === "string") {
    if (isAsec) db.sort((a, b) => a[key].localeCompare(b[key]));
    else db.sort((a, b) => b[key].localeCompare(a[key]));
  } else db.sort();
  return _returnDB(db)
}

function filterBy(value, key = "category") {
  if (!value) return;
  if (value === "all") return _returnDB();
  const filteredDb = db.filter(item => item[key] === value);
  return filteredDb;
}

