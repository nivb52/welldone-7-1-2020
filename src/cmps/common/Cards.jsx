import React, { useState } from "react";
import Toolbar from "../Toolbar";
import List from "./List";
import Input from "./Input";
import "./cards.css";

const Cards = ({
  cards,
  deleteCard,
  editOrAddCards,
  title = "Global Cards"
}) => {
  const [selectCard, setSelectCard] = useState();
  const [editCard, setEditCard] = useState();
  const [viewCard, setViewCard] = useState();
  const [nameInput, setNameInput] = useState(editCard);

  const handleCardChoose = id => {
    if (id === selectCard) return setSelectCard();
    setSelectCard(id);
  };

  const _findCard = id => {
    return cards.find(c => c._id === id);
  };

  const cardEdit = id => {
    const foundCard = _findCard(id);
    setEditCard(foundCard);
    // will be set as edited on save
  };

  const cardAdd = () => {
    setEditCard({});
    // will be added on save
  };

  const cardDelete = id => {
    deleteCard(id);
    unSelect();
  };

  const handleSave = () => {
    // required field
    if (!nameInput && !nameInput.trim()) return alert("you must enter name");
    // else continue saving...
    const editedCard = { ...editCard, name: nameInput };
    editOrAddCards(editedCard);
    unSelect();
  };

  const cardView = id => {
    const foundCard = _findCard(id);
    setViewCard(foundCard);
  };

  const handleInput = value => {
    setNameInput(value);
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
  };

  return (
    <div className="cards">
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

      {cards[0] && !editCard && !viewCard && (
        <List
          list={cards}
          handleClick={handleCardChoose}
          classCondition={isHighlited}
        />
      )}
      {viewCard && (
        <div className="view-card">
          <span>{viewCard.name}</span>
        </div>
      )}
      {editCard && (
        <div className="edit-card">
          <Input
            onEnter={onEnter}
            placeholder={editCard.name}
            handleInput={handleInput}
          />
          <button className="btn" onClick={handleSave}>
            save
          </button>
        </div>
      )}
    </div>
  );
};

export default Cards;
