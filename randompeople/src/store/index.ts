import { createStore } from 'redux';

import rootReducer from './modules/users/reducer';

const store = createStore(rootReducer); 

export default store;