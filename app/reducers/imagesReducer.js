import { 
  GET_IMAGES_START, 
  GET_IMAGES_SUCCESS, 
  GET_IMAGES_FAILURE,
  DELETE_IMAGES, 
  SEARCH_IMAGE } from '../actions/types';

const initialState = {
  searchTerm: '',
  images: [{name: 'Cecilia'}],
  fetching: false,
  error: null,
}

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES_START:
      return {
        ...state,
        fetching: true,
      }
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.payload,
        fetching: false,
      }
    case GET_IMAGES_FAILURE:
      return {
        ...state,
        images: action.payload,
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