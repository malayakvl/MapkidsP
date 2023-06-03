import { Action, handleActions } from "redux-actions";
import {
  fetchItemsAction,
  addUploadedFile,
  removeUploadedFile,
  uploadDoneAction
} from "./actions";

const initialState: {
  checkedIds: any[];
  isFetched: boolean;
  count: number;
  loading: boolean;
  items: any[];
  image: any;
} = {
  items: [],
  loading: false,
  isFetched: false,
  checkedIds: [],
  count: 0,
  image: null,
};

const ACTION_HANDLERS: any = {
  [fetchItemsAction]: {
    next: (
      state: State.Images,
      action: Type.ReduxAction<Pick<State.Articles, "items">>
    ): State.Images => ({
      ...state,
      ...action.payload,
    }),
    throw: (state: State.Articles): State.Articles => ({
      ...state,
    }),
  },
};

export {
  fetchItemsAction,
  addUploadedFile,
  removeUploadedFile,
  uploadDoneAction
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions(ACTION_HANDLERS, initialState as any);
