import React from "react";

import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";
import { NewsBar } from "./NewsBar";

import dr_stone from "../static/newsbar/dr_stone.jpg";
import tpn from "../static/newsbar/tpn.jpg";
import spyxfamily from "../static/newsbar/spyxfamily.jpg";

import "../styles/NewsBar.css";

interface Manga {
  name: string;
  volume: number;
  bg_img: string;
}

export const Navigation: React.FC = () => {
  const mangas: Array<Manga> = [
    { name: "Dr. Stone", volume: 17, bg_img: dr_stone },
    { name: "The Promised Neverland", volume: 20, bg_img: tpn },
    { name: "Spy x Family", volume: 6, bg_img: spyxfamily },
  ];
  return (
    <>
      <NavBar />
      <SearchBar />
      <div className="newsbar">
        <NewsBar>
          {mangas.map((manga, index) => (
            <div className="newsbar_manga_slide" key={index} style={{ backgroundImage: `url(${manga.bg_img})` }}>
              <div className="newsbar_manga_title_volume">
                {" "}
                {manga.name}, Vol. {manga.volume}
              </div>
            </div>
          ))}
        </NewsBar>
      </div>
    </>
  );
};
