import { SEARCHED_CHARACTER } from "./actionsType";

//cria um objeto que vai ser utilizado para fazer o dispatch no meu codigo, recebe o valor a ser armazenado e retorna o valor e o tipo da ação
export const searchCharacter = (character) => ({
  type: SEARCHED_CHARACTER,
  character: character,
});
