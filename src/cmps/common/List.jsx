import React from "react";
export default function List({
  list,
  handleClick,
  parentClass = "card",
  nameClass = "card-name",
  classCondition = () => {return},
  itemClass = ''
}) {
  return (
    <>
      {list.map(item => (
        <div
          className={parentClass + " " + classCondition(item)}
          key={item._id}
          onClick={() => handleClick(item)}
        >
          <div className={nameClass}>
            <span className={itemClass}>{item.name}</span>
            {/* {item.coords && <span className={'block ' + itemClass}>{item.coords}</span>} */}
          </div>
        </div>
      ))}
    </>
  );
}
