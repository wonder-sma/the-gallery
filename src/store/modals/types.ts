export type ModalsState = {
  [key: string]: {
    isOpen: boolean,
    data: {
      [key: string]: any;
    },
  }
}

export enum ModalsActionTypes {
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
  CLOSE_ALL_MODAL = 'CLOSE_ALL_MODAL'
}

export type OpenModalAction = {
  type: ModalsActionTypes.OPEN_MODAL;
  payload: {
    name: keyof ModalsState;
    isOpen: boolean;
    data?: {};
  }
}

export type CloseModalAction = {
  type: ModalsActionTypes.CLOSE_MODAL;
  payload: {
    name: keyof ModalsState;
    isOpen: boolean;
    data?: {};
  }
}

export type CloseAllModalAction = {
  type: ModalsActionTypes.CLOSE_ALL_MODAL;
}

export type ModalsAction = OpenModalAction | CloseModalAction | CloseAllModalAction;
