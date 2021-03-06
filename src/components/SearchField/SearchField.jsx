import axios from "axios";
import { useState } from "react";
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
      let search = value.split(" ").join("+");
      axios
        .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
        .then((response) => {
          let character = [];
          response.data.results.map((item) => {
            character.push({
              type: "rickys",
              name: item.name,
              img: item.image,
            });
          });

          distpatch(searchCharacter(character[0]));
        })
        .catch((err) => {
          history.push("/error");
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
        })
        .catch((err) => {
          history.push("/error");
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
