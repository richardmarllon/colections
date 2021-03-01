import axios from "axios";
import { useState } from "react";
import Card from "../Card/Card";
import CardList from "../CardList/CardList";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { searchCharacter } from "../../Redux/Actions/actions";
import { useHistory } from "react-router-dom";
import { DivSearch, InputField } from "./styles";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const SearchField = ({ onRicky }) => {
  const [value, setValue] = useState();
  const history = useHistory();

  const distpatch = useDispatch();

  const handleSearch = (evt) => {
    evt.preventDefault();

    if (onRicky) {
      console.log("noricky");
      let search = value.split(" ").join("+");
      console.log(search);
      axios
        .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
        .then((response) => {
          let character = [];
          response.data.results.map((item) => {
            character.push({
              type: "ricky",
              name: item.name,
              img: item.image,
            });
          });

          distpatch(searchCharacter(character[0]));
        });
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
          distpatch(searchCharacter(character[0]));
        });
    }
    history.push("/result");
  };

  return (
    <>
      <DivSearch>
        <InputField
          placeholder="Encontre seu personagem favorito!"
          onChange={(evt) => {
            setValue(evt.target.value);
          }}
        ></InputField>
        <IconButton
          onClick={(evt) => {
            handleSearch(evt);
          }}
        >
          <SearchIcon />
        </IconButton>
      </DivSearch>
    </>
  );
};

export default SearchField;
