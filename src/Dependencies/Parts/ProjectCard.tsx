import React, { useState } from "react"
import { ProjectDisplayType, ProjectToolsType } from "../Models";

type ProjectPropsType = 
{
    projectProps: ProjectDisplayType
};

export default function ProjectCard({ projectProps }: ProjectPropsType)
{
    const [see, setSee] = useState(false);
    const [seeTool, setSeeTool] = useState(-1);

    return (
        <li
            className="h-full w-full flex flex-col justify-evenly items-center p-2 m-2 bg-WHITE divide-y divide-dashed border "
                
                onPointerLeave={() => {setSee(false);if (see){setSeeTool(-1)}}}
            >
            <h1
                className="h-full w-full flex justify-center items-center bg-HIGHLIGHT text-WHITE hover:cursor-pointer hover:opacity-90"
                onPointerDown={() => setSee(!see)}
            >
                {projectProps.projectName}
            </h1>
            
            <section
                className={`${!see ? "h-[0vh] opacity-12 z-0" : "z-1 h-full opacity-100 p-2 m-2"} animate transition-all ease-in-out duration-100 h-full w-full`}
            >
                {see &&
                    <p>
                        {projectProps.projectDesc}
                        {projectProps.projectDesc}
                        {projectProps.projectDesc}
                        {projectProps.projectDesc}
                    </p>
                }
                { see &&
                    <ul
                        className="w-full flex border-t border-b m-2 p-2 justify-evenly items-center bg-HIGHLIGHT"
                    >
                        {projectProps.projectTools.map((prop: ProjectToolsType, index:number) => (
                            <li
                                key={index}
                                className={`w-full h-full hover:opacity-50 hover:cursor-pointer border ${seeTool == index && "bg-WHITE"}`}
                                onPointerDown={() => {if (see){setSeeTool(index)}}}
                            >
                                {prop.ToolName}
                            </li>
                        ))}
                    </ul>
                }
                {see && seeTool !== -1 &&
                    <p
                        
                    >
                        {projectProps.projectTools[seeTool].ToolUse}
                    </p>
                }
            </section>
            
        </li>
    )
}