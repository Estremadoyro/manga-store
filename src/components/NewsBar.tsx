import React from "react";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { useCarousel } from "../hooks/useCarousel";

import { NewInBar } from "./NewInBar";

import "../styles/NewsBar.css";

import dr_stone from "../static/newsbar/dr_stone.jpg";
import tpn from "../static/newsbar/tpn.jpg";
import spyxfamily from "../static/newsbar/spyxfamily.jpg";

interface Manga {
  name: string;
  volume: number;
  bg_img: string;
}

interface IProps {
  interval?: number;
}

export const NewsBar: React.FC<IProps> = ({ interval = 5000 }) => {
  const mangas: Array<Manga> = [
    { name: "Dr. Stone", volume: 17, bg_img: dr_stone },
    { name: "The Promised Neverland", volume: 20, bg_img: tpn },
    // { name: "Spy x Family", volume: 6, bg_img: spyxfamily },
  ];
  const length = mangas.length;
  const { active, desired } = useTypedSelector((state) => state.newsBar);
  const { finishSlideChangeAction } = useActions();

  // autoTransitionSlideAction(desired, interval);

  const [handlers, style] = useCarousel(length);
  console.log(style);

  return (
    <div className="newsbar_container">
      {/* <div className="newsbar_title">NUEVO!</div> */}
      <div className="newsbar_wrapper" {...handlers}>
        <NewInBar mangas={mangas} />
      </div>
    </div>
  );
};
