import { GET_IMAGES } from './types';
import { DELETE_IMAGES } from './types';
import { SEARCH_IMAGE } from './types';

export const getImages = (images) => (
  {
    type: GET_IMAGES,
    data: images,
  }
);

export const deleteImages = (images) => (
  {
    type: DELETE_IMAGES,
    data: images,
  }
);

function searchImages(searchTerm) {
  return {
    type: SEARCH_IMAGE,
    searchTerm,
  };
}

export function searchImagesBy(term) {
  console.log('image term', term)
  return (dispatch) => {
    dispatch(searchImages());
    return fetch('https://api.unsplash.com/search/photos?query=office&client_id=sk6CBTMciDoHkiXCD-GKdV5D4LrtLzCdy1yIGCLBWsA')
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
}