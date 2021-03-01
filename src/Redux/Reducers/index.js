// vai combinar todos os reducers e exportar em uma unica variavel para ser usada no index.js da store.

import { combineReducers } from "redux";
import { Search } from "./Search";

const reducers = combineReducers({ Search });

export default reducers;
