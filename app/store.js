import { createStore, combineReducers, applyMiddleware } from 'redux';
import imagesReducer from './reducers/imagesReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

const rootReducer = combineReducers({
  imagesReducer
})

const configureStore = () => {
  createStore(rootReducer, applyMiddleware(thunk, promise));
}

export default configureStore;