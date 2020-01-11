export function makeId(length = 7) {
  let txt = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

export function hasOwnNestedProperty(obj,propertyPath){
	// if (typeof obj !== 'object' && obj !== null) throw Error ('provided type is not a object or is a null')
	const properties = propertyPath.split('.');
	for (let i = 0; i < properties.length; i++ ){
		const currKey = properties[i]
		if (obj && obj.hasOwnProperty(currKey)) {
			obj = obj[currKey]
		} else return false
	}
	return true
}

export function compareString(a, b, key) {
	if (a[key] < b[key])  return -1;
	if (a[key] > b[key]) return 1;
	return 0;
  }
  

export function localStor(key,data=null){
	if (!key || typeof key !== 'string'  ) throw Error ('local storage key must be string')
	// In case there is no data: GetItem =>		
	if (!data) {
		const loadedDB = JSON.parse(localStorage.getItem(key)) || null;
		return loadedDB
	// In case there is data: SetItem =>		
	} else {
		localStorage.setItem(key, JSON.stringify(data));
		return
	}
}

export const isExitsAsType = (check,type) => {
	if (!check || !type) throw Error ('Please provide 2 Arguments, type for check, and type wanted ' )
	if (typeof type !== 'string' ) throw Error ('type should be a string' )
	return check && typeof check === type
}