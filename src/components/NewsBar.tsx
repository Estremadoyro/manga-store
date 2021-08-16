import React from "react";

import { NewInBar } from "./NewInBar";

import "../styles/NewsBar.css";

interface Manga {
  name: string;
  volume: number;
}

export const NewsBar: React.FC = () => {
  const mangas: Array<Manga> = [
    { name: "Dr. Stone", volume: 17 },
    { name: "The Promised Neverland", volume: 20 },
    { name: "Spy x Family", volume: 6 },
  ];

  return (
    <div className="newsbar_container">
      <div className="newsbar_wrapper">
        <div className="newsbar_title">NUEVO!</div>
        <NewInBar mangas={mangas} />
      </div>
    </div>
  );
};
