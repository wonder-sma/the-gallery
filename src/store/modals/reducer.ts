import { ModalsAction, ModalsActionTypes, ModalsState } from './types';

const initialState: ModalsState = {
  addImageModal: {
    isOpen: false,
    data: {},
  },
  showImageModal: {
    isOpen: false,
    data: {},
  }
};

export const modalsReducer = (state = initialState, action: ModalsAction): ModalsState => {
  switch (action.type) {

    case ModalsActionTypes.OPEN_MODAL:
      return {
        ...state,
        ...{
          [action.payload.name]: {
            ...state[action.payload.name],
            isOpen: action.payload.isOpen,
            data: { ...state[action.payload.name].data, ...action.payload.data }
          }
        }
      };

    case ModalsActionTypes.CLOSE_MODAL:
      return {
        ...state,
        ...{
          [action.payload.name]: {
            ...state[action.payload.name],
            isOpen: action.payload.isOpen,
            data: { ...state[action.payload.name].data, ...action.payload.data }
          }
        }
      };

    case ModalsActionTypes.CLOSE_ALL_MODAL:
      const newState = {} as ModalsState;
      const keys = Object.keys(state);
      for (let i = 0; i < keys.length; ++i) {
        newState[keys[i]] = { isOpen: false, data: {} };
      }
      return newState;

    default:
      return state;
  }
};
