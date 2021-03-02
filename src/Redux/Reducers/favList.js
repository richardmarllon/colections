import { FAV_LIST_ADD, FAV_LIST_REMOVE } from "../Actions/actionsType";
let key = "listOfFav";
const defaultState = JSON.parse(localStorage.getItem(key));

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
