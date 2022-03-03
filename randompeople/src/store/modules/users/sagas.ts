import { AxiosResponse } from "axios";
import { all, call, takeLatest, put } from "redux-saga/effects";
import api from "../../../services/api";

import { dataUsersSuccess, dataUsersFailure } from "./actions";

import { ActionTypes } from "./types";

function* getUsers() {
  try {
    const response:AxiosResponse = yield call(api.get, '');
    
    const { results } = response.data;
    
    const formatDataUsers = results.map(({ dob, id, nat, registered, ...rest}) => {
      return rest;
    });
    
    yield put(dataUsersSuccess(formatDataUsers))
  } catch(e) {
    console.log(e);
    yield  put(dataUsersFailure())
  }

};

export default all([
  takeLatest(ActionTypes.dataUsersRequest, getUsers)
]);