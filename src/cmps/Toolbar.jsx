import React from "react";

const Toolbar = ({ catId, back,view, edit, del, add }) => {
  const handleClick = (type, id) => {
    switch (type) {
      case "back":
        back();
        break;
      case "view":
        view(id);
        break;
      case "edit":
        edit(id);
        break;
      case "del":
        del(id);
        break;
      case "add":
      add();
        break;
      default:
        return;
    }
  };
  return (
    <div className="toolbar">
      <h1>Categories</h1>

      {!catId && (
        <button onClick={() => handleClick("add")} className="btn">
          new category
        </button>
      )}

      {catId && (
        <div className="toolbar-btn">
          <button
            onClick={() => handleClick("back")}
            className="btn"
          >
            back
          </button>
          <button
            onClick={() => handleClick("view", catId)}
            className="btn btn-info"
          >
            view
          </button>
          <button
            onClick={() => handleClick("edit", catId)}
            className="btn btn-success"
          >
            edit
          </button>
          <button
            onClick={() => handleClick("del", catId)}
            className="btn btn-danger"
          >
            delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Toolbar;
