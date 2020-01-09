import React from "react";

export default function Select({
  title = "select",
  isShowAllOption = true,
  dataList,
  onSelect = (e) => {console.log('select', e.target.value);},
  valueKey,
  showKey = valueKey,
  selectedOption = '',
  idKey = "",
  idKeyExp = "",
  optionClass = "capitalized",
  getSelectList = () => {
    //getSelectList defualt: do nothing
    return;
  }
}) {
  const uniqueKey = (item, i) => {
    return idKey ? item[idKey] : idKeyExp ? idKeyExp(item, i) : i;
  };
  return (
    <>
      <label htmlFor=""> {title} </label>
      <select className="btn" onClick={getSelectList} onChange={onSelect} value={selectedOption}>
        { isShowAllOption && <option value="all"> all</option>}
        {dataList && dataList[0] && dataList.map((item, i) => (
          <option
            className={optionClass} 
            key={uniqueKey(item, i)}
            value={item[valueKey]}
          >
            {item[showKey]}
          </option>
        ))}
      </select>
    </>
  );
}
