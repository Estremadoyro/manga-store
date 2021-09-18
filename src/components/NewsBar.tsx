import React, { Children, ReactChildren, ReactNode } from "react";

import { useCarousel } from "../hooks/useCarousel";

import "../styles/NewsBar.css";

interface IProps {
  children: JSX.Element[] & ReactNode;
}

export const NewsBar: React.FC<IProps> = ({ children }) => {
  const slides = React.Children.toArray(children);
  const slidesLength = slides.length;

  const [handlers, style] = useCarousel(slidesLength);

  const beforeSlides = <NewsBarItem>{slides[2]}</NewsBarItem>;
  const actualSlides = slides.map((slide, index) => <NewsBarItem key={index}>{slide}</NewsBarItem>);
  const afterSlides = <NewsBarItem>{slides[0]}</NewsBarItem>;

  return (
    <div className="newsbar_container">
      <div className="newsbar_title">NUEVO!</div>
      <div className="newsbar_wrapper" {...handlers} style={style}>
        {beforeSlides}
        {actualSlides}
        {afterSlides}
      </div>
    </div>
  );
};

const NewsBarItem: React.FC = ({ children }) => {
  return <div className="newsbar_item">{children}</div>;
};
