import {
  GET_IMAGES_START,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
  DELETE_IMAGES,
  SEARCH_IMAGE,
  ADD_NUMBER
} from '../actions/types';

const initialState = {
  searchTerm: '',
  images: [],
  fetching: false,
  error: null,
  numbers: [{key: 1, name: 'robert'}, {key: 1, name: 'felipe'}],
}

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        ...state,
        numbers: state.numbers.concat({
          key: Math.random(),
          name: action.data
        })
      }
    case GET_IMAGES_START:
      return {
        ...state,
        fetching: true,
      }
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.data,
        fetching: false,
        error: null,
      }
    case GET_IMAGES_FAILURE:
      return {
        ...state,
        images: action.data,
        fetching: false,
      }
    case DELETE_IMAGES:
      return {
        ...state,
        images: state.images.concat(
          { name: "Robert" }
        )
      }
    case SEARCH_IMAGE:
      return {
        ...state,
        images: [],
        fetching: true,
      }
    default:
      return state;
  }
}

export default imagesReducer;