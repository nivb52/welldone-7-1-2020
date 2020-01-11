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
  

// // FROM UNDERSCORE
// export function debounce (func, wait = 2000, immediate = null) {
// // If `immediate` is passed, trigger the function on the
// // leading edge, instead of the waiting.

// 	let timeout;
// 	return function() {
// 		const context = this, args = arguments;
// 		const later = function() {
// 			timeout = null;
// 			if (!immediate) func.apply(context, args);
// 		};
// 		const callNow = immediate && !timeout;
// 		clearTimeout(timeout);
// 		timeout = setTimeout(later, wait);
// 		if (callNow) func.apply(context, args);
// 	};
// };

