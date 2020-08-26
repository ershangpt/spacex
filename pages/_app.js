
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../scripts/reducer/index';
import rootSaga from '../scripts/saga/index';

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
  
const  sagaMidleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMidleware))
sagaMidleware.run(rootSaga)


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
