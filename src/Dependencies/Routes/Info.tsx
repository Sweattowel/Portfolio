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
                    <li>
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
            <ul>
                {Projects.map((Project: ProjectType, index: number) => (
                    <li
                        key={index}
                        className="min-h-[20vh] w-full flex flex-col justify-evenly border mb-2 pl-2 pr-2"
                    >
                        <h2
                            className="highlight mb-2"
                        >
                            {Project.Title}
                        </h2>
                        <p
                            className="pt-2"
                        >
                            {Project.Desc}
                        </p>
                        <ul>
                            {Project.Tech.map((tech: string, techIndex: number) => (
                                <li 
                                    key={techIndex}
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                        <NavLink 
                            to={Project.Path}
                            className="interactable "
                        >
                            Project Document
                        </NavLink>
                    </li>
                ))}
            </ul>
        </section>
    )
};