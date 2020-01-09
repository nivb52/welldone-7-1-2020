export function makeId(length = 7) {
  let txt = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}

export function compareString(a, b, key) {
  if (a[key] < b[key])  return -1;
  if (a[key] > b[key]) return 1;
  return 0;
}
