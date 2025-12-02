import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import { ProjectType } from "../../Models/Elements";
import { Projects } from "../Data/Resources";
import Error from "../Global/Error";

export default function ProjectDocument()
{

    const Location: string = useLocation().pathname;
    const ProjectData: ProjectType | undefined = Projects.find(p => p.Path === Location);

    if (!ProjectData) {
        return (
            <Error ErrorMessage="Failed to retrieve project data" ErrorCode={500} />
        )
    }

    return (
        <main
            className="RoutePage border-t"
        >
            <NavLink 
                to={'/Information'}
                className="interactable "
            >
                &#8630; Back
            </NavLink>
                
            <h1
                className="highlight text-xl"
            >
                {ProjectData.Title}
            </h1>
            <p>
                {ProjectData.DocumentOverview}
            </p>
            <ul
                className="mb-2 p-1 border"
            >
                <h2
                    className="highlight"
                >
                    Considerations
                </h2>
                {ProjectData.DocumentConsiderations.map((Consid: string, index:number) => (
                    <li
                        key={index}
                    >
                        {Consid}
                    </li>
                ))}
            </ul>
            <ul
                className="mb-2 p-1 border"
            >
                <h2
                    className="highlight"
                >
                    Challenges
                </h2>
                {ProjectData.DocumentChallenges.map((Chall: string, index:number) => (
                    <li
                        key={index}
                    >
                        {Chall}
                    </li>
                ))}
            </ul>
            <ul
                className="mb-2 p-1 border"
            >
                <h2
                    className="highlight"
                >
                    ToughtProcesses
                </h2>
                {ProjectData.DocumentThoughtProcess.map((Thght: string, index:number) => (
                    <li
                        key={index}
                    >
                        {Thght}
                    </li>
                ))}
            </ul>
            <button
                className="interactable"
            >
                {ProjectData.DocumentProjectLink}
            </button>
        </main>
    )
};