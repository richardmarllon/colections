import axios from "axios";
import { useState } from "react";
import Card from "../Card/Card";
import CardList from "../CardList/CardList";
import styled from "styled-components";

const SearchField = ({ onRicky }) => {
  const [value, setValue] = useState();
  const [character, setCharacter] = useState([]);

  const handleSearch = (evt) => {
    evt.preventDefault();

    if (onRicky) {
      console.log("noricky");
    } else {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
        .then((response) => {
          let character = [];
          character.push({
            type: "pokemon",
            name: response.data.name,
            img: response.data.sprites.other["official-artwork"].front_default,
          });
          setCharacter(character);
        });
    }
  };

  console.log(character, "resposta");

  return (
    <>
      <form>
        <input
          onChange={(evt) => {
            setValue(evt.target.value);
          }}
        ></input>
        <button
          onClick={(evt) => {
            handleSearch(evt);
          }}
        >
          Busca
        </button>
      </form>
      {character.length > 0 && <CardList list={character}></CardList>}
    </>
  );
};

export default SearchField;
