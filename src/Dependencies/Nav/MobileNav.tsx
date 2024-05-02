import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";


export default function MobileNav()
{

  const location = useLocation();
  const [see, isSee] = useState(false)

  return (
    <div className="w-[100vw] h-[5vh] flex flex-row justify-evenly w-full bg-DARK text-LIGHT text-center items-center">
      <div className="w-[60%] font-serif md:text-[2rem] text-[0.8rem]">
        Thomas Moloney
      </div>
      <button>
        <img onClick={() => isSee(!see)} className={`${see ? "bg-HIGHLIGHT rounded rotate-90 duration-9999" : ""} w-[6vw] h-full`} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" alt="Burger" />
      </button>
      {see && (
        <ul className="right-0 top-[4.9vh] bg-DARK rounded divide-y fixed h-[60vh] flex flex-col justify-evenly ">
          <NavItem to="/" currentPathname={location.pathname}> <button className="h-[20vh]" onClick={() => isSee(false)}>About Me</button></NavItem>
          <NavItem to="/MyProjects" currentPathname={location.pathname}><button className="h-[20vh]" onClick={() => isSee(false)}>My Projects</button></NavItem>
          <NavItem to="/Contact" currentPathname={location.pathname}><button className="h-[20vh]" onClick={() => isSee(false)}>Contact me</button></NavItem>
        </ul>
      )}

    </div>
  );
}
// Individual NavItems Assist in creating a nice user experience
function NavItem({ to, children, currentPathname }: { to: string, children: React.ReactNode, currentPathname: string })
{
  const isActive = currentPathname === to;

  const linkClass = isActive ? "bg-HIGHLIGHT" : "";

  return (
    <li className={`hover:bg-HIGHLIGHT pl-2 pr-2 h-full flex text-center justify-center items-center rounded ${linkClass}`}>
      <Link to={to}>
        <button>{children}</button>
      </Link>
    </li>
  );
}
