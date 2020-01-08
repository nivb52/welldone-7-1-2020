import React, { useState, useEffect } from "react";
import Toolbar from "../Toolbar";
import List from "./List";
import Input from "./Input";

const Cards = ({
  getCards,
  deleteCard,
  editOrAddCards,
  title = "Global Cards"
}) => {
  let isAjaxingForCards = false;

  const [cards, setCards] = useState([]);
  const [selectCard, setSelectCard] = useState();
  const [editCard, setEditCard] = useState();
  const [viewCard, setViewCard] = useState();
  const [nameInput, setNameInput] = useState(editCard);

  const loadCards = async () => {
    isAjaxingForCards = true;
    const cards = await getCards();
    setCards(cards);
    isAjaxingForCards = false;
  };

  useEffect(() => {
    loadCards();
  }, []);

  const handleCardChoose = id => {
    if (id === selectCard) return setSelectCard();
    setSelectCard(id);
  };

  const _findCard = id => {
    return cards.find(c => c._id === id);
  };

  const cardEdit = id => {
    const foundCat = _findCard(id);
    setEditCard(foundCat);
    // will be set as edited on save
  };

  const cardAdd = () => {
    setEditCard({});
    // will be added on save
  };

  const cardView = id => {
    const foundCat = _findCard(id);
    setViewCard(foundCat);
  };

  const catDelete = async id => {
    isAjaxingForCards = true;
    await deleteCard(id);
    loadCards();
    unSelect();
    isAjaxingForCards = false;
  };

  const handleInput = value => {
    setNameInput(value);
  };

  const onEnter = () => {
    handleSave();
  };

  const handleSave = async () => {
        // required field
    if (!nameInput && !nameInput.trim()) return alert("you must enter name");
    // else continue saving...
    const editedCat = { ...editCard, name: nameInput };
    await editOrAddCards(editedCat);
    setEditCard(null);
    loadCards();
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
        del={catDelete}
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
