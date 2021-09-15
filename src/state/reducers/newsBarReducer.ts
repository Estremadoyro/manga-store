import { NewsBarAction } from "../actions/index";
import { NewsBarActionType } from "../action-types/index";

import { next, previous } from "../../scripts/newsBarScripts";

interface NewsBarState {
  offset: number;
  desired: number;
  active: number;
}

const initialNewsBarState: NewsBarState = {
  offset: 0,
  desired: 0,
  active: 0,
};

export const newsBarReducer = (state: NewsBarState = initialNewsBarState, action: NewsBarAction): NewsBarState => {
  switch (action.type) {
    case NewsBarActionType.NEWSBAR_JUMP:
      return { ...state, desired: action.desired };
    case NewsBarActionType.NEWSBAR_NEXT:
      return { ...state, desired: next(action.length, state.active) };
    case NewsBarActionType.NEWSBAR_PREV:
      return { ...state, desired: previous(action.length, state.active) };
    case NewsBarActionType.NEWSBAR_DONE:
      return { ...state, offset: NaN, active: state.desired };
    case NewsBarActionType.NEWSBAR_DRAG:
      return { ...state, offset: action.offset };
    default:
      return state;
  }
};
