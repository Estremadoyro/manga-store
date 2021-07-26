import React from "react";

import LogoNoBg from "../static/brand/vector/logo-no-bg.svg";

import "../styles/NavBar.css";

export const NavBarLogo: React.FC = () => {
  return <img className="logo_nav_bar" src={LogoNoBg} alt="logo" />;
};
