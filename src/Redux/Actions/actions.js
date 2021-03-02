import {
  FAV_LIST_ADD,
  FAV_LIST_REMOVE,
  SEARCHED_CHARACTER,
} from "./actionsType";

//cria um objeto que vai ser utilizado para fazer o dispatch no meu codigo, recebe o valor a ser armazenado e retorna o valor e o tipo da ação
export const searchCharacter = (character) => ({
  type: SEARCHED_CHARACTER,
  character: character,
});

export const favListAdd = (listOfCharacter) => ({
  type: FAV_LIST_ADD,
  listOfCharacter: listOfCharacter,
});

export const favListRemove = (characterToRemove) => ({
  type: FAV_LIST_REMOVE,
  characterToRemove: characterToRemove
});
