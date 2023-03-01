import { imagesReducer } from './images/reducer';
import { modalsReducer } from './modals/reducer';
import * as modalActions from './modals/actions';
import * as imagesActions from './images/actions';

export const reducers = { imagesReducer, modalsReducer };
export const actions = { ...modalActions, ...imagesActions };
