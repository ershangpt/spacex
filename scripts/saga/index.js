import { all, fork } from 'redux-saga/effects'
import filterSaga from './filter';


export default  function* () {
    yield all([
        fork(filterSaga),
    ])
  }