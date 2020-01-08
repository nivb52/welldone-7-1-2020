import React from "react";
export default function List({list, handleClick, classCondition}) {
  return (
    <>
      {list.map(item => (
      <div
        className={"category " + classCondition(item)}
        key={item._id}
        onClick={() => handleClick(item._id)}
      >
        <div className="category-name">
          <span>{item.name}</span>
        </div>
      </div>
      ))}
    </>
  );
}
