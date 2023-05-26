import { Action, handleActions } from "redux-actions";
import {
  fetchItemsAction,
} from "./actions";

const initialState: {
  uploadedFiles: any[];
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
  uploadedFiles: [],
  checkedIds: [],
  count: 0,
  image: null
};

const ACTION_HANDLERS: any = {
  [fetchItemsAction]: {
    next: (
      state: State.Images,
      action: Type.ReduxAction<Pick<State.Images, "items">>
    ): State.Images => ({
      ...state,
      ...action.payload,
    }),
    throw: (state: State.Images): State.Images => ({
      ...state,
    }),
  },
};

export {
  fetchItemsAction,
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions(ACTION_HANDLERS, initialState as any);
