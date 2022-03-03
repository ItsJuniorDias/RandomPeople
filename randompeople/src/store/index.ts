import { createStore, applyMiddleware } from 'redux'; 
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';

import rootReducer from './modules/users/reducer';

import { IUserState } from './modules/users/types';

export interface IState {
  data: IUserState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  ),
); 

sagaMiddleware.run(rootSaga);

export default store;