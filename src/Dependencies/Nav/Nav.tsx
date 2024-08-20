import React from "react";
import { Link, useLocation } from "react-router-dom";


export default function Nav() {
  const location = useLocation();

  return (
    <div className="z-10 w-[100vw] h-[5vh] flex flex-row justify-evenly w-full bg-BLACK text-LIGHT text-center items-center">
      <div className="w-[25%] font-serif md:text-[2rem] text-[0.8rem]">
        Thomas Moloney
      </div>
      <ul className="w-[75%] h-full flex flex-row justify-evenly items-center text-center">
        <NavItem to="/" currentPathname={location.pathname}>
          About Me
        </NavItem>
        <NavItem to="/MyProjects" currentPathname={location.pathname}>
          My Projects
        </NavItem>
        <NavItem to="/Contact" currentPathname={location.pathname}>
          Contact me
        </NavItem>
      </ul>
    </div>
  );
}

// Individual NavItems Assist in creating a nice user experience
function NavItem({ to, children, currentPathname }: { to: string, children: React.ReactNode, currentPathname: string })
{
  const isActive = currentPathname === to;

  const linkClass = isActive ? "bg-HIGHLIGHT" : "";

  return (
    <li className={`hover:bg-HIGHLIGHT pl-2 pr-2 h-[80%] flex text-center justify-center items-center rounded ${linkClass}`}>
      <Link to={to}>
        {children}
      </Link>
    </li>
  );
}
