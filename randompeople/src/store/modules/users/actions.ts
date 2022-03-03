import { ActionTypes, iUser } from './types';

export function dataUsersRequest() {
  return {
    type: ActionTypes.dataUsersRequest,
    payload: {}
  }
}

export function dataUsersSuccess(data: []) {
  return {
    type: ActionTypes.dataUsersSuccess,
    payload: {
      data,
    }
  }
}

export function dataUsersFailure() {
  return {
    type: ActionTypes.dataUsersFailure,
    payload: {}
  }
}



