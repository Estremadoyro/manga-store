import React, { useState } from "react";

import "../styles/NewInBar.css";

interface element {
  name: string;
  volume: number;
}

interface IProps {
  mangas: Array<element>;
}

export const NewInBar: React.FC<IProps> = ({ mangas }) => {
  const [currentManga, setCurrentManga] = useState<number>(0);
  return (
    <div className="newinbar_manga">
      {mangas[currentManga].name}, Vol. {mangas[currentManga].volume}
    </div>
  );
};
