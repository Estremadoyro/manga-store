import { Dispatch } from "redux";

import { useSwipeable, SwipeableHandlers, SwipeEventData } from "react-swipeable";

import { NewsBarActionType } from "../action-types/index";
import { NewsBarAction } from "../actions/index";

import { threshold } from "../../hooks/newsBarHooks";

const transitionTime = 400;
const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
const smooth = `transform ${transitionTime}ms ease`;

const style: React.CSSProperties = {
  transform: "translateX(0)",
  width: `${100 * (length + 2)}%`,
  // left: `-${(state.active + 1) * 100}%`,
};

const swiped = (e: SwipeEventData, length: number, dir: 1 | -1) => {
  return (dispatch: Dispatch<NewsBarAction>) => {
    const t = threshold(e.event.target);
    // const direction = dir * e.deltaX;
    const direction = e.absX;

    if (direction >= t) {
      dispatch({ type: dir > 0 ? NewsBarActionType.NEWSBAR_NEXT : NewsBarActionType.NEWSBAR_PREV, length });
    } else {
      dispatch({ type: NewsBarActionType.NEWSBAR_DRAG, offset: 0 });
    }
  };
};

export const useCarousel = (length: number, interval: number) => {
  return (dispatch: Dispatch<NewsBarAction>): [number, (n: number) => void, SwipeableHandlers, React.CSSProperties] => {
    const handlers = useSwipeable({
      onSwiping(e) {
        //User is currenty swipping, so we keep track of it
        dispatch({ type: NewsBarActionType.NEWSBAR_DRAG, offset: -e.deltaX });
      },
      onSwipedLeft(e) {
        swiped(e, length, 1);
      },
      onSwipedRight(e) {
        swiped(e, length, -1);
      },
      trackMouse: true,
      trackTouch: true,
    });
    //dummy
    return [1, (n) => 1 + 1, handlers, style];
  };
};
