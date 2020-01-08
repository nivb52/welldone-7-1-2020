import React, { useState, useEffect, Children } from "react";
import Toolbar from "../Toolbar";
import List from "./List";


const Cards = ({getCards, deleteCard, editOrAddCards, title = "Global Cards"}) => {
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

  const handleCatChoose = id => {
    if (id === selectCard) return setSelectCard();
    setSelectCard(id);
  };

  const _findCat = id => {
    return cards.find(c => c._id === id);
  };

  const catEdit = id => {
    const foundCat = _findCat(id);
    setEditCard(foundCat);
    // will be set as edited on save
  };

  const catAdd = () => {
    setEditCard({});
    // will be added on save
  };

  const catView = id => {
    const foundCat = _findCat(id);
    setViewCard(foundCat);
  };

  const handleInput = e => {
    setNameInput(e.target.value);
  };

  const catDelete = async id => {
    isAjaxingForCards = true;
    await deleteCard(id);
    loadCards();
    unSelect();
    isAjaxingForCards = false;
  };

  const handleEnter = e => {
    if (e.keyCode === 13) return handleSave();
  };

  const handleSave = async () => {
    // required field
    if (!nameInput.trim()) return alert("you must enter name");
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
    <div className="categories">
      <Toolbar
        id={selectCard}
        onEdit={editCard}
        edit={catEdit}
        add={catAdd}
        view={catView}
        del={catDelete}
        back={unSelect}
      >
        {title}
      </Toolbar>

      {cards[0] && !editCard && !viewCard && (
        <List
          list={cards}
          handleClick={handleCatChoose}
          classCondition={isHighlited}
        />
      )}
      {viewCard && (
        <div className="view-categories">
          <span>{viewCard.name}</span>
        </div>
      )}
      {editCard && (
        <div className="edit-categories">
          <input
            autoFocus
            onKeyDown={handleEnter}
            placeholder={editCard.name}
            onChange={handleInput}
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
