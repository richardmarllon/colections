// vai combinar todos os reducers e exportar em uma unica variavel para ser usada no index.js da store.

import { combineReducers } from "redux";
import { Search } from "./Search";
import { favList } from "./favList";

const reducers = combineReducers({ Search, favList });

export default reducers;
