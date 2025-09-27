import React from "react";
import { PageResources, Projects } from "../Data/Resources";
import { PageResourceType, ProjectType } from "../../Models/Elements";
import { NavLink } from "react-router-dom";

export default function Tail()
{

    return (
        <section
            className="RoutePage flex flex-row justify-space-between"
        >
            <ul
                className="w-full flex flex-col p-2 justify-center max-h-[50vh]"
            >
                {PageResources.map((PageResource: PageResourceType, index: number) => (
                    <NavLink 
                        to={PageResource.Path} 
                        about={PageResource.Desc} 
                        key={index}
                        className="p-1 m-1 hover:border-black border-b border-white text-sm"
                        aria-label={`BottomNav - ${PageResource.Desc}`}
                    >
                        {PageResource.Title}
                    </NavLink>
                ))}
                {Projects.map((Project: ProjectType, index: number) => (
                    <NavLink 
                        to={Project.Path} 
                        about={Project.Desc} 
                        key={index}
                        className="p-1 m-1 hover:border-black border-b border-white text-sm"
                        aria-label={`BottomNav - ${Project.Desc}`}
                    >
                        {Project.Title}
                    </NavLink>
                ))}
            </ul>
            <p
                className="w-full flex justify-center items-center max-h-[50vh]"
            >
                Portfolio is a copyrighted project
            </p>
        </section>
    )
};