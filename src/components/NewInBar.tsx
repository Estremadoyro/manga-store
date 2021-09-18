import React, { useState } from "react";

import "../styles/NewInBar.css";

interface Manga {
  name: string;
  volume: number;
  bg_img: string;
}

export const NewInBar: React.FC<Manga> = (manga) => {
  const [currentManga, setCurrentManga] = useState<number>(0);
  return (
    <>
      <div className="newinbar_manga" style={{ backgroundImage: `url(${manga.bg_img})` }}>
        {manga.name}, Vol. {manga.volume}
      </div>
    </>
  );
};
