import { legacy_createStore } from 'redux';
import rootReducer from './reducer'; // Importez vos réducteurs

const store = legacy_createStore(rootReducer);

export default store;
