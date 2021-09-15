import { useEffect } from "react";
import { useSwipeable, SwipeableHandlers } from "react-swipeable";
import { useTypedSelector } from "./useTypedSelector";
import { useActions } from "./useActions";

import { Carousel } from "../classes/Carousel";

import { generateAnimations } from "../scripts/newsBarScripts";
export const useCarousel = (length: number): [SwipeableHandlers, React.CSSProperties] => {
  const { offset, desired, active } = useTypedSelector((state) => state.newsBar);
  const { swipedSlideAction, swipingSlideAction, finishSlideChangeAction } = useActions();
  const State = new Carousel(offset, desired, active);
  const handlers = useSwipeable({
    onSwiped(e) {
      swipingSlideAction(e);
    },
    onSwipedLeft(e) {
      swipedSlideAction(e, length, 1);
    },
    onSwipedRight(e) {
      swipedSlideAction(e, length, -1);
    },
    trackMouse: true,
    trackTouch: true,
  });

  // finishSlideChangeAction(State.desired, 400);

  useEffect(() => {
    const id = setTimeout(() => finishSlideChangeAction(), 400);
    return () => clearTimeout(id);
  }, [desired]);
  const style = generateAnimations(State, length);
  return [handlers, style];
};
