import { SEARCHED_CHARACTER } from "../Actions/actionsType";

const defaultState = [];

export const Search = (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case SEARCHED_CHARACTER:
      console.log("entrou", action);
      state = [action.character];
      return state;

    default:
      return state;
  }
};
