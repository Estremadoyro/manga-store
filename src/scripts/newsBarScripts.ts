import { Carousel } from "../classes/Carousel";

export const previous = (slides: number, current: number): number => {
  //Go to end when swipping left at the first element
  return (current - 1 + slides) % slides;
};

export const next = (slides: number, current: number): number => {
  //Go to start when swipping right at the last element
  return (current + 1) % slides;
};

export const threshold = (target: EventTarget | null): number => {
  const width = (target as HTMLElement).clientWidth;
  //20% must be swiped right or left to be accepted into next slide
  return width / 5;
};
export const generateAnimations = (state: Carousel, length: number): React.CSSProperties => {
  const transitionTime = 400;
  const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
  const smooth = `transform ${transitionTime}ms ease`;
  const style: React.CSSProperties = {
    transform: "translateX(0)",
    width: `${100 * (length + 2)}%`,
    right: `${(state.active + 1) * 100}%`,
  };

  if (state.desired !== state.active) {
    const pref = Math.sign(state.offset || 0);
    const dir = Math.sign(state.desired - state.active);
    // havent fully swiped yet
    const shift = (100 * (pref || dir)) / (length + 2);
    style.transition = smooth;
    style.transform = `translateX(${shift}%)`;
  } else if (!isNaN(state.offset)) {
    // havent fully swiped yet
    if (state.offset !== 0) {
      style.transform = `translateX(${state.offset}px)`;
    } else {
      style.transition = elastic;
    }
  }
  return style;
};
