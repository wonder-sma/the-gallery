import { ImagesAction, ImagesActionTypes, ImagesState } from './types';

const initialState: ImagesState = {
  images: [],
  errors: {},
  loadings: {},
};

export const imagesReducer = (state = initialState, action: ImagesAction): ImagesState => {
  switch (action.type) {

    case ImagesActionTypes.LOAD_IMAGE:
      return { ...state, images: [...state.images, action.payload.image], errors: {} };

    case ImagesActionTypes.SET_ERROR:
      return { ...state, errors: { ...state.errors, ...action.payload.errors } };

    case ImagesActionTypes.CLEAR_ERRORS:
      return { ...state, errors: {} };

    case ImagesActionTypes.CHANGE_COMMENT:
      return {
        ...state,
        images: [
          ...state.images.map(image => {
            if (image.id === action.payload.id) {
              return {
                id: image.id,
                url: image.url,
                comment: action.payload.comment
              };
            }
            return image;
          })
        ]
      };

    case ImagesActionTypes.SET_LOADING:
      return { ...state, loadings: { ...state.loadings, ...action.payload } };

    default:
      return state;
  }
};
