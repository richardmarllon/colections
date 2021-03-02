import { SEARCHED_CHARACTER } from "../Actions/actionsType";

const defaultState = [];

export const Search = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCHED_CHARACTER:
      state = [action.character];
      return state;

    default:
      return state;
  }
};
