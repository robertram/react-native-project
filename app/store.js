import { createStore, combineReducers, applyMiddleware } from 'redux';
import imagesReducer from './reducers/imagesReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  imagesReducer
})

const configureStore = () => {
  createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;


