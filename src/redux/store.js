import { devToolsEnhancer } from '@redux-devtools/extension';
import { combineReducers, createStore } from 'redux';
import { contactsReducer, filterReducer } from './redusers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  // form:,
  filters: filterReducer,
});

const enhancer = devToolsEnhancer();

const store = createStore(rootReducer, enhancer);

export default store;
