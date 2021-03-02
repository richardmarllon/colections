import { FAV_LIST_ADD, FAV_LIST_REMOVE } from "../Actions/actionsType";
const defaultState = [];

export const favList = (state = defaultState, action) => {
  switch (action.type) {
    case FAV_LIST_ADD:
      state = [...state, action.listOfCharacter];
      console.log(state, "adicionou esse: ", action.listOfCharacter);
      localStorage.setItem("listOfFav", JSON.stringify(state));
      return state;
    case FAV_LIST_REMOVE:
      console.log("entrou");
      let newList = state.filter(
        (item) => item.name !== action.characterToRemove.name
      );
      console.log(state);
      localStorage.setItem("listOfFav", JSON.stringify(newList));
      return newList;
    default:
      return state;
  }
};
