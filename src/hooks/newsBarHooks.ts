export const previous = (slides: number, current: number) => {
  //Go to end when swipping left at the first element
  return (current - 1 + slides) % slides;
};

export const next = (slides: number, current: number) => {
  //Go to start when swipping right at the last element
  return (current + 1) % slides;
};

export const threshold = (target: EventTarget | null) => {
  const width = (target as HTMLElement).clientWidth;
  //33% must be swiped right or left to be accepted into next slide
  return width / 3;
};
