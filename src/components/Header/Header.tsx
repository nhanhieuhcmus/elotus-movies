import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { commonConfigs } from '../../configs/common';
import "./Header.scss";
import logo from "../../../public/elotus-movie-icon.png";

const headerNav = [
  {
    display: "Now Playing",
    path: "/now-playing",
  },
  {
    display: "Top Rated",
    path: "/top-rated",
  },
];

function Header() {
  const { pathname } = useLocation();
  console.log("check pathname: ", pathname);
  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="" />
            {commonConfigs.brandName}
          </div>
        </Link>
        <ul className="header__nav">
          {headerNav.map((item, index) => (
            <li key={index} className={`${index === active ? "active" : ""}`}>
              <Link to={item.path}>{item.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
