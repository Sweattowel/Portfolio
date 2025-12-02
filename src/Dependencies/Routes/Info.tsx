import React from "react";
// Model Imports

import { ExperienceType, ProjectType } from "../../Models/Elements";

// Page Resources

import { CreatorExperience, Projects } from "../Data/Resources";
import { NavLink } from "react-router-dom";


export default function Info()
{

    return (
        <section
            className="RoutePage"
        >
            <h1
                className="highlight text-2xl border-b mb-4"
            >
                Info
            </h1>
            <ul>
                {CreatorExperience.map((Expr: ExperienceType, index: number) => (
                    <li
                        key={index}
                        className="pb-2 border-b"
                    >
                        <h2
                            className="highlight mb-2"
                        >
                            {Expr.Title}
                        </h2>
                        <p>
                            {Expr.Desc}
                        </p>
                    </li>
                ))}
            </ul>
            <h1
                className="highlight text-2xl border-b mb-4"
            >
                Projects
            </h1>
            <ul
                className="grid grid-flow-col grid-rows-2 gap-4"
            >
                {Projects.map((Project: ProjectType, index: number) => (
                    <li
                        key={index}
                        className=" w-[45vw] flex flex-col justify-evenly border-b mb-2 pb-2"
                    >
                        <h2
                            className="highlight mb-2"
                        >
                            {Project.Title}
                        </h2>
                        <p
                            className="pt-2 w-full border-b"
                        >
                            {Project.Desc}
                        </p>
                        <ul
                            className="pb-2 pt-2"
                        >
                            {Project.Tech.slice(0, Math.min(3, Project.Tech.length)).map((tech: string, techIndex: number) => (
                                <li 
                                    key={techIndex}
                                    className={`${techIndex == 2 && "animate-pulse"}  w-[80%]`}
                                >
                                    {techIndex == 2 ? "..." : tech}
                                </li>
                            ))}
                        </ul>
                        <NavLink 
                            to={Project.Path}
                            className="interactable "
                        >
                            {Project.Title} Document
                        </NavLink>
                    </li>
                ))}
            </ul>
        </section>
    )
};