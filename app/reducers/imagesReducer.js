import { GET_IMAGES, DELETE_IMAGES, SEARCH_IMAGE } from '../actions/types';

const initialState = {
  searchTerm: '',
  images: [],
  fetching: false,
}

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: images + 1,
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