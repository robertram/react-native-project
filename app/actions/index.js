import { DELETE_IMAGES } from './types';
import { SEARCH_IMAGE_START } from './types';
import { GET_IMAGES_SUCCESS } from './types';
import { GET_IMAGES_FAILURE } from './types';
import { ADD_NUMBER } from './types';
import axios from 'axios';


export const addNumber = (numbers) => (
  {
    type: ADD_NUMBER,
    data: numbers
  }
);

export const getImages = (images) => (
  {
    type: SEARCH_IMAGE_START,
    data: images,
  }
);

export const deleteImages = (images) => (
  {
    type: DELETE_IMAGES,
    data: images,
  }
);

export const imageSuccess = (images) => (
  {
    type: GET_IMAGES_SUCCESS,
    data: images,
  }
);

export const imageFailure = (error) => (
  {
    type: GET_IMAGES_FAILURE,
    error: error
  }
);

export function searchImagesBy() {
  console.log('image term')

  return (dispatch) => {
    dispatch(getImages());
    return fetch('https://api.unsplash.com/search/photos?query=office&client_id=sk6CBTMciDoHkiXCD-GKdV5D4LrtLzCdy1yIGCLBWsA')
      .then((response) => response.json())
      .then((json) => console.log('result ', json.results))
      .then(dispatch({ type: 'GET_IMAGES_SUCCESS', payload: json.results }))
      .catch((error) => dispatch({ type: 'GET_IMAGES_FAILURE', payload: error }))
      .finally(() => setLoading(false));
  };
}

export async function axiosSearch() {
  return (dispatch) => {
    dispatch(getImages());
    axios.get('https://api.unsplash.com/search/photos?query=office&client_id=sk6CBTMciDoHkiXCD-GKdV5D4LrtLzCdy1yIGCLBWsA', {
      params: {
        _limit: 2
      }
    })
      //.then((response) => console.log('reponse', response))
      .then((response) => dispatch(imageSuccess(response.data.results)))
      .catch((error) => dispatch(imageFailure(error)))
  };
}

