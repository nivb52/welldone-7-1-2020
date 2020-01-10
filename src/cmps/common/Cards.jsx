import React, { useState } from "react";
import Toolbar from "../Toolbar";
import List from "./List";
import Input from "./Input";
import Mapbox from "../map";
import "./cards.css";

const Cards = ({
  cards,
  deleteCard,
  editOrAddCards,
  title = "Global Cards",
  inputs = ["name"],
  editInputs = ["name"],
  classInput = "mr-bottom-1rem",
  currentEdit = () => {},
  showMap,
  children
}) => {
  const [selectCard, setSelectCard] = useState();
  const [editCard, setEditCard] = useState();
  const [viewCard, setViewCard] = useState();

  const _findCard = id => {
    let found = cards.find(c => c._id === id);
    found = found === -1 ? null : found
    return found
  };

  const handleCardChoose = id => {
    if (id === selectCard) return unSelect();
    setSelectCard(id);
    const foundCard = _findCard(id);
    currentEdit(foundCard);
  };

  const cardEdit = id => {
    const foundCard = _findCard(id);
    setEditCard(foundCard);
    // will be set as edited on 'handleBlur'
  };

  const cardAdd = () => {
    setEditCard({});
    // will be added on 'handleBlur'
  };

  const cardDelete = id => {
    deleteCard(id);
    unSelect();
  };

  const handleSave = () => {
    editOrAddCards(editCard);
    unSelect();
  };

  const handleInput = (key, value) => {
    setEditCard({ ...editCard, [key]: value });
  };

  const handleBlur = (key, value) => {
    setEditCard({ ...editCard, [key]: value });
  };

  const cardView = id => {
    const foundCard = _findCard(id);
    setViewCard(foundCard);
  };

  const onEnter = () => {
    handleSave();
  };

  const isHighlited = c => {
    return selectCard ? (c._id === selectCard ? "highlight" : "") : "";
  };

  const unSelect = () => {
    setSelectCard();
    setEditCard();
    setViewCard();
    currentEdit()
  };

  return (
    <div className="cards">
      {/* <!-- ================ ============== --> */}
      {/* <!-- ========== Top Toolbar ============== --> */}
      {/* <!-- ================ ============== --> */}
      <Toolbar
        id={selectCard}
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
                  {field +' : '+ viewCard[field]}
                </span>
              );
            })}
          {viewCard && showMap && <Mapbox  coords={viewCard.coords} />}
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
