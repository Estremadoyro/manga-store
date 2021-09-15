import React, { useState } from "react";

import "../styles/NewInBar.css";

interface element {
  name: string;
  volume: number;
  bg_img: string;
}

interface IProps {
  mangas: Array<element>;
}

export const NewInBar: React.FC<IProps> = ({ mangas }) => {
  const [currentManga, setCurrentManga] = useState<number>(0);
  return (
    <>
      {mangas.map((manga, index) => (
        <div className="newinbar_manga" style={{ backgroundImage: `url(${manga.bg_img})` }} key={index}>
          {manga.name}, Vol. {manga.volume}
        </div>
      ))}
    </>
  );
};
