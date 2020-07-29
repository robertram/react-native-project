import { DELETE_IMAGES } from './types';
import { SEARCH_IMAGE_START } from './types';
import { GET_IMAGES_SUCCESS } from './types';
import { GET_IMAGES_FAILURE } from './types';

export const getImages = (images) => (
  {
    type: SEARCH_IMAGE_START,
    data: images,
    fetching: false,
    error: null
  }
);

export const deleteImages = (images) => (
  {
    type: DELETE_IMAGES,
    data: images,
  }
);

export function searchImagesBy() {
  console.log('image term')

  return (dispatch, getState) => {
    dispatch(getImages());
    return fetch('https://api.unsplash.com/search/photos?query=office&client_id=sk6CBTMciDoHkiXCD-GKdV5D4LrtLzCdy1yIGCLBWsA')
      .then((response) => response.json())
      .then((json) => console.log('result ', json.results))
      .then(dispatch({type: 'GET_IMAGES_SUCCESS', payload: json.results}))
      .catch((error) => dispatch({type: 'GET_IMAGES_FAILURE', payload: error}))
      .finally(() => setLoading(false));
  };
}