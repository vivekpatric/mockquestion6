import {createStore} from 'redux';
import { BirdReducer } from './reducer/BirdReducer';
const store =createStore(BirdReducer);
export default store;