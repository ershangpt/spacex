import { put, takeLatest, all } from 'redux-saga/effects';

function* getMissions(state) {
  const params = Object.keys(state.payload).length ? `&${new URLSearchParams(state.payload).toString()}` : '';
  const json = yield fetch('https://api.spaceXdata.com/v3/launches?limit=100' + params)
    .then(response => response.json());
  
  yield put({ type: "GET_DATA", payload: json });
}

export default function* () {
  yield all([
    takeLatest('FETCH', getMissions)
  ])
}