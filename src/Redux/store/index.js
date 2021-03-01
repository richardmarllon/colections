import {createStore} from 'redux'
import reducers from '../Reducers/index'
// cria a store na nuvem do app

const store = createStore(reducers);

export default store;