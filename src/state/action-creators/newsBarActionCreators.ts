import { Dispatch } from "redux";

import { NewsBarActionType } from "../action-types/index";
import { NewsBarAction } from "../actions/index";

import { SwipeEventData } from "react-swipeable";

import { threshold } from "../../scripts/newsBarScripts";

export const swipingSlideAction = (e: SwipeEventData) => {
  return (dispatch: Dispatch<NewsBarAction>) => {
    dispatch({ type: NewsBarActionType.NEWSBAR_DRAG, offset: e.deltaX });
  };
};

export const swipedSlideAction = (e: SwipeEventData, length: number, dir: 1 | -1) => {
  return (dispatch: Dispatch<NewsBarAction>) => {
    const t = threshold(e.event.target);
    const direction = e.absX;
    if (direction >= t) {
      console.log(`Fully swiped left or right`);
      dispatch({ type: dir > 0 ? NewsBarActionType.NEWSBAR_NEXT : NewsBarActionType.NEWSBAR_PREV, length });
    } else {
      //Set offset to 0 if the drag didn't reach the threshold
      dispatch({ type: NewsBarActionType.NEWSBAR_DRAG, offset: 0 });
    }
  };
};

export const finishSlideChangeAction = () => {
  return (dispatch: Dispatch<NewsBarAction>) => {
    dispatch({ type: NewsBarActionType.NEWSBAR_DONE });
  };
};

export const jumpToSlideAction = (desired: number) => {
  return (dispatch: Dispatch<NewsBarAction>) => {
    dispatch({ type: NewsBarActionType.NEWSBAR_JUMP, desired: desired });
  };
};
