export function makeId(length = 7) {
  let txt = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

export function debounce (func, wait = 2000, immediate = null) {
// If `immediate` is passed, trigger the function on the
// leading edge, instead of the waiting.

	let timeout;
	return function() {
		const context = this, args = arguments;
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

export function compareString(a, b, key) {
  if (a[key] < b[key])  return -1;
  if (a[key] > b[key]) return 1;
  return 0;
}
