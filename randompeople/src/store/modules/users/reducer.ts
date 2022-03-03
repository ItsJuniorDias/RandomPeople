import { Reducer } from 'react';
import produce from 'immer';

import { ActionTypes, IUserState } from './types';

const INITIAL_STATE: IUserState = {
  data: []
}

const users: Reducer<IUserState> = (state = INITIAL_STATE, action) => { 
  return produce(state, draft => {
    switch(action.type) {
      case ActionTypes.dataUsersSuccess: {
        const { data } =  action.payload;
       
       return {
         ...draft,
         data
       }
      }
      case ActionTypes.dataUsersFailure: {
        break;
      }
      default: {
        return draft;
      }
    }
  });
}

export default users;