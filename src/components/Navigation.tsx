import React from "react";

import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";
import { NewsBar } from "./NewsBar";

export const Navigation: React.FC = () => {
  return (
    <>
      <NavBar />
      <SearchBar />
      <NewsBar />
    </>
  );
};
