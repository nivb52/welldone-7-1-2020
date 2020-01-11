import { hasOwnNestedProperty } from "./UtilServices.js";

export const isLocalStorageOn =
hasOwnNestedProperty(window, "document.location.hostname") &&
window.document.location.hostname === "localhost"
  ? false
  : true;
