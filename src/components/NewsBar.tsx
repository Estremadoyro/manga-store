import React from "react";

import "../styles/NewsBar.css";

export const NewsBar: React.FC = () => {
  return (
    <div className="newsbar_container">
      <div className="newsbar_wrapper">
        <div className="newsbar_title">NUEVO!</div>
        <div className="newsbar_manga">Dr. Stone, Vol. 17</div>
      </div>
    </div>
  );
};
