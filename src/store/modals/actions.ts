import { CloseAllModalAction, CloseModalAction, ModalsActionTypes, OpenModalAction } from './types';

export const openModalAction = (payload: OpenModalAction['payload']): OpenModalAction => {
  return { type: ModalsActionTypes.OPEN_MODAL, payload };
};

export const closeModalAction = (payload: CloseModalAction['payload']): CloseModalAction => {
  return { type: ModalsActionTypes.CLOSE_MODAL, payload };
};

export const closeAllModalAction = (): CloseAllModalAction => {
  return { type: ModalsActionTypes.CLOSE_ALL_MODAL };
};
