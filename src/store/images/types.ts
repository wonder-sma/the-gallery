export type Image = {
  id: string;
  url: string;
  comment: string;
}

export type Errors = {
  [key: string]: string;
}

export type ImagesState = {
  images: Array<Image> | [];
  errors: Errors | {};
}

export enum ImagesActionTypes {
  LOAD_IMAGE = 'LOAD_IMAGE',
  SET_ERROR = 'SET_ERROR',
  CLEAR_ERRORS = 'CLEAR_ERRORS',
  CHANGE_COMMENT = 'CHANGE_COMMENT',
}

export type LoadImageAction = {
  type: ImagesActionTypes.LOAD_IMAGE;
  payload: {
    image: {
      id: string;
      url: string;
      comment: string;
    }
  }
}

export type SetErrorAction = {
  type: ImagesActionTypes.SET_ERROR;
  payload: {
    errors: { [key: string]: string };
  }
}

export type ClearErrorsAction = {
  type: ImagesActionTypes.CLEAR_ERRORS;
  payload: {
    errors: {};
  }
}

export type ChangeCommentAction = {
  type: ImagesActionTypes.CHANGE_COMMENT;
  payload: {
    id: string;
    comment: string;
  }
}

export type ImagesAction = LoadImageAction | SetErrorAction | ClearErrorsAction | ChangeCommentAction;
