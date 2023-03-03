import { AppDispatch } from '../index';
import { ImagesActionTypes, Errors, Loadings } from './types';
import { v4 as uuidv4 } from 'uuid';

export const loadImageAction = (payload: { id: string; url: string; comment: string; }) => {
  return async (dispatch: AppDispatch) => {
    try {
      const { id, url, comment } = payload;
      let image = { id, url, comment: comment.trim() };
      let errors = {};
      if (!id) {
        const httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b[-a-zA-Z0-9()@:%_+.~#?&\/=]*$/;
        const isValidUrl = httpRegex.test(url.trim());
        if (!isValidUrl) {
          console.log('Please enter a valid url');
          errors = { ...errors, url: 'Please enter a valid url' };
        }
        if (!(image.comment.length <= 38)) {
          console.log('Comment must be no more than 38 characters');
          errors = { ...errors, comment: 'Comment must be no more than 38 characters' };
        }
        if (!Object.keys(errors).length) {
          image.id = uuidv4();
          localStorage[image.id] = JSON.stringify(image);
        } else {
          await Promise.reject(errors);
        }
      }
      dispatch({ type: ImagesActionTypes.LOAD_IMAGE, payload: { image } });
    } catch (errors) {
      dispatch({ type: ImagesActionTypes.SET_ERROR, payload: { errors: { ...errors as Errors } } });
    }
  };
};

export const clearErrorsAction = (payload: { errors: {} }) => {
  return { type: ImagesActionTypes.CLEAR_ERRORS, payload };
};

export const changeCommentAction = (payload: { id: string, comment: string }) => {
  const value = JSON.parse(localStorage[payload.id]);
  value.comment = payload.comment;
  localStorage[payload.id] = JSON.stringify(value);
  return { type: ImagesActionTypes.CLEAR_ERRORS, payload };
};

export const setLoadingAction = (payload: Loadings) => {
  return { type: ImagesActionTypes.SET_LOADING, payload };
};

