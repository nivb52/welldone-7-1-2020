import React from "react";

const Toolbar = ({ children, id, back, view, edit, onEdit, del, add }) => {
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
      <h1>{children}</h1>

      {!id && (
        <>
          <button onClick={() => handleClick("add")} className="btn">
            new category
          </button>
        </>
      )}
      
      {onEdit && !id && (
        <button onClick={() => handleClick("back")} className="btn">
          back
        </button>
      )}

      {id && (
        <div className="toolbar-btn">
          <button onClick={() => handleClick("back")} className="btn">
            back
          </button>

          <button
            onClick={() => handleClick("view", id)}
            className="btn btn-info"
          >
            view
          </button>
          <button
            onClick={() => handleClick("edit", id)}
            className="btn btn-success"
          >
            edit
          </button>
          <button
            onClick={() => handleClick("del", id)}
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
