import { FAV_LIST_ADD, FAV_LIST_REMOVE } from "../Actions/actionsType";

// const defaultState = JSON.parse(localStorage.getItem(key));
let defaultState = [{}];
const SetDefaultState = () => {
  let key = "listOfFav";
  if (localStorage.getItem(key)) {
    defaultState = JSON.parse(localStorage.getItem(key));
  }
};
SetDefaultState();

export const favList = (state = defaultState, action) => {
  switch (action.type) {
    case FAV_LIST_ADD:
      state = [...state, action.listOfCharacter];
      localStorage.setItem("listOfFav", JSON.stringify(state));
      return state;
    case FAV_LIST_REMOVE:
      let newList = state.filter(
        (item) => item.name !== action.characterToRemove.name
      );
      localStorage.setItem("listOfFav", JSON.stringify(newList));
      return newList;
    default:
      return state;
  }
};
