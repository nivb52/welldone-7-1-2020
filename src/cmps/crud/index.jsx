import "./cards.css";

import React, { useState, Suspense } from "react";
import Toolbar from "./Toolbar";
import List from "../common/List";
import Input from "../common/Input";

const Map = React.lazy(() => import("../map"));

const Cards = ({
  cards,
  deleteCard,
  editOrAddCards,
  title = "Global Cards",
  inputs = ["name"],
  editInputs = ["name"],
  classInput = "mr-bottom-1rem",
  doOnSelect = () => {},
  showMap,
  children
}) => {
  const _findCard = id => {
    let found = cards.find(c => c._id === id);
    found = found === -1 ? null : found;
    return found;
  };

  // #####################
  // Invoke Parent Functions
  const cardAdd = () => {
    setEditCard({});
    // will be added on 'handleBlur'
  };

  const cardDelete = id => {
    deleteCard(id);
    // emit to parent
    unSelect();
  };

  // ==============
  // handle on user Inputs
  const handleSave = () => {
    // emit to parent
    editOrAddCards(editCard);
    unSelect();
  };

  const handleInput = (key, value) => {
    setEditCard({ ...editCard, [key]: value });
  };

  const handleBlur = (key, value) => {
    setEditCard({ ...editCard, [key]: value });
  };

  const onEnter = () => {
    handleSave();
  };
  // end handle inputs
  // ==============

  // ###############
  // Invoke Local Function (mostly, some invoke parent function)
  const [selectCardId, setSelectCardId] = useState();
  const [editCard, setEditCard] = useState();
  const [viewCard, setViewCard] = useState();

  const handleCardChoose = item => {
    if (item._id === selectCardId) unSelect();
    else {
      console.log("item ", item);
      // emit to parent
      doOnSelect(item);
      setSelectCardId(item._id);
    }
  };

  const cardEdit = id => {
    const foundCard = _findCard(id);
    setEditCard(foundCard);
    setViewCard();
    // will be set as edited on 'handleBlur'
  };

  const cardView = id => {
    const foundCard = _findCard(id);
    setViewCard(foundCard);
    setEditCard();
  };

  const isHighlited = c => {
    return selectCardId && c._id === selectCardId ? "highlight" : "";
  };

  const unSelect = () => {
    setSelectCardId(null);
    setEditCard();
    setViewCard();
    doOnSelect(null);
  };

  return (
    <div className="cards">
      {/* <!-- ================ ============== --> */}
      {/* <!-- ========== Top Toolbar ============== --> */}
      {/* <!-- ================ ============== --> */}
      <Toolbar
        id={selectCardId}
        onEdit={editCard}
        edit={cardEdit}
        add={cardAdd}
        view={cardView}
        del={cardDelete}
        back={unSelect}
      >
        {title}
      </Toolbar>
      {/* <!-- ================ ============== --> */}
      {/* <!-- ========== LIST ============== --> */}
      {/* <!-- ================ ============== --> */}
      {cards && cards[0] && !editCard && !viewCard && (
        <List
          list={cards}
          itemClass="capitalized"
          handleClick={handleCardChoose}
          classCondition={isHighlited}
        />
      )}
      {/* <!-- ================ ============== --> */}
      {/* <!-- =========== View Card ============== --> */}
      {/* <!-- ================ ============== --> */}
      {viewCard && (
        <div className="view-card">
          {inputs &&
            inputs.map((field, i) => {
              return (
                <span key={i} className="capitalized mr-bottom-1rem block">
                  {field + " : " + viewCard[field]}
                </span>
              );
            })}
          {viewCard && showMap && (
            <Suspense fallback={<div>Loading...</div>}>
              <Map coords={viewCard.coords} />
            </Suspense>
          )}
        </div>
      )}
      {/* <!-- ================ ============== --> */}
      {/* <!-- ========== Edit Card & New Card ============== --> */}
      {/* <!-- ================ ============== --> */}
      {editCard && (
        <div className="edit-card capitalized">
          {editInputs &&
            editInputs[0] &&
            editInputs.map((field, i) => {
              return (
                <Input
                  key={i}
                  label={field}
                  classInput={classInput}
                  onEnter={onEnter}
                  placeholder={editCard[field] || field}
                  defaultValue={editCard[field]}
                  handleBlur={handleBlur}
                  handleInput={handleInput}
                />
              );
            })}
          {children}
          <button className="btn btn-save" onClick={handleSave}>
            save
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;
