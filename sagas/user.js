import { call, delay, all, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCEESS,
  SIGN_UP_FAILURE,
  //
  SIGN_IN_REQUEST,
  SIGN_IN_SUCEESS,
  SIGN_IN_FAILURE,
  //
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCEESS,
  LOAD_MY_INFO_FAILURE,
} from "../reducers/user";

// ACTION AREA ///////////////////////////////////////////////////////////////
function signUpAPI(data) {
  return {
    data: {
      id: 1,
      email: "aaa@abc.com",
      nickname: "TEST",
    },
  };
  // return axios.post("http:localhost:4000/api/signup", data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);

    yield put({
      type: SIGN_UP_SUCEESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: SIGN_UP_FAILURE,
      data: result.data,
    });
  }
}
/////////////////////////////////////////////////////////////////////////////

// ACTION AREA ///////////////////////////////////////////////////////////////
function signInAPI(data) {
  return axios.post("/api/user/signin", data);
}

function* signIn(action) {
  try {
    const result = yield call(signInAPI, action.data);

    yield put({
      type: SIGN_IN_SUCEESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: SIGN_IN_FAILURE,
      data: result.data,
    });
  }
}
/////////////////////////////////////////////////////////////////////////////
// ACTION AREA ///////////////////////////////////////////////////////////////
function LoadMyInfoAPI() {
  return axios.post("/api/user/LoadMyInfo");
}

function* LoadMyInfo() {
  try {
    const result = yield call(LoadMyInfoAPI);

    yield put({
      type: LOAD_MY_INFO_SUCEESS,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      data: result.data,
    });
  }
}
/////////////////////////////////////////////////////////////////////////////

// WATCH AREA
function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchSignIn() {
  yield takeLatest(SIGN_IN_REQUEST, signIn);
}

function* watchloadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, LoadMyInfo);
}

// INCLUDE AREA
export default function* userSaga() {
  yield all([
    fork(watchSignUp),
    fork(watchSignIn),
    fork(watchloadMyInfo),
    //
  ]);
}
