import React, { useState } from "react"
import { ProjectDisplayType, ProjectPropsType, ProjectToolsType } from "../Models";

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
                className={`${!see ? "h-[0vh] opacity-12 z-0" : "z-1 h-full opacity-100 p-2 m-2"} transition-all ease-in-out duration-100 h-full w-full`}
            >
                {see &&
                    <p
                        className="m-2 p-2 text-center"
                    >
                        {projectProps.projectDesc}
                    </p>
                }
                { see &&
                    <ul
                        className="w-full flex border-t border-b  justify-evenly items-center bg-HIGHLIGHT"
                    >
                        {projectProps.projectTools.map((prop: ProjectToolsType, index:number) => (
                            <li
                                key={index}
                                className={`h-[5rem] flex items-center justify-center w-full p-2 hover:opacity-50 hover:cursor-pointer border ${seeTool === index && "bg-WHITE"}`}
                                onPointerDown={() => {if (see){setSeeTool(seeTool === -1 ? index : seeTool === index ? -1 : index)}}}
                            >
                                {prop.ToolName}
                            </li>
                        ))}
                    </ul>
                }
                <p
                    className={`${see && seeTool !== -1 ? "h-full m-2 p-2" : "h-[0px] opacity-0"} transition-all duration-200  mt-0 border-r border-l border-b`}
                >
                    {see && seeTool !== -1 && projectProps.projectTools[seeTool].ToolUse}
                </p>
                
            </section>
            
        </li>
    )
}