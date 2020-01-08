import React from "react";
export default function List({
  list,
  parentClass = "card",
  nameClass = "card-name",
  handleClick,
  classCondition
}) {
  return (
    <>
      {list.map(item => (
        <div
          className={parentClass + " " + classCondition(item)}
          key={item._id}
          onClick={() => handleClick(item._id)}
        >
          <div className={nameClass}>
            <span>{item.name}</span>
          </div>
        </div>
      ))}
    </>
  );
}
