import React from "react";

// Model Imports

import { PageResources } from "../Data/Resources";
import { PageResourceType } from "../../Models/Elements";
import { NavLink } from "react-router-dom";

export default function Head()
{

    return (
        <section
            className="w-[90vw] flex flex-col justify-evenly p-1 m-auto mb-1 border-b"
        >
            <h1
                className="m-2 p-2 text-2xl font-bold highlight"
            >
                Thoams Portfolio
            </h1>
            <ul
                className=""
            >
                {PageResources.map((PageResource : PageResourceType, index : number) => (
                    <NavLink  
                        draggable 
                        to={PageResource.Path} 
                        about={PageResource.Desc} 
                        key={index}
                        className="interactable"
                        aria-label={PageResource.Desc}
                    >
                        {PageResource.Title}
                    </NavLink>
                ))}
            </ul>
        </section>
    )
};