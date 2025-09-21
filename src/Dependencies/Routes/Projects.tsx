import React from "react";

export default function Projects()
{

    let projects: ProjectDisplayType[] = [
        {
            projectName: "Portfolio",
            projectDesc: "Write and maintain a complete and up to date portfolio with a focus on a purely functional website that is fast secure and efficient utilizing established web development community technology",
            projectTools: 
            [
                "React", 
                "Tailwind", 
                "Vercel", 
                "GIT", 
                "VScode"
            ],
            projectLesson: "Creating a functional website using React can be slow and non functional if done incorrectly, to ensure user experience i maintained a steady approach to development that took heed of every decision made, from removing unnecessary fluff that would otherwise slow down the user or non necessarily add functionality",
        },
        {
            projectName: "ThoamAuth",
            projectDesc: "Create a self hosted authentication and authorization platform with integrated admin control and base notifications",
            projectTools: 
            [
                "C#",
                "ASPNet Tools",
                "Sha256 HASHING",
            ],
            projectLesson: "The impetus for creating a authentication platform was the search of knowledge in cybersecurity, creating this service required not only programming, but attempts of breaking into it myself, from this i learned the ins and out of base SQL injection and how to counter with escaping, i experienced the affect of unexpected payloads and error responses providing means of getting in without retrieving data and i learned of how to defend against such measures",
        },
        {
            projectName: "Spotify TV",
            projectDesc: "Solve a real issue involving the automation of created playlists allowing for a `TV esque` selection of podcasts as shows with music from created playlists acting as the `Ads` ",
            projectTools: 
            [
                "Spotify Development API",
                "C#",
                "ASPNet",
                "Samsung Development API",
            ],
            projectLesson: "In the development of Spotify TV, issues such as verification and new environments with differing technology were discovered, the act of simply running the program was turned into a brand new learning experience that delayed development as i researched",
        }
    ];

    return (
        <main
            className="min-h-[100vh] flex flex-col m-2 p-2 divide-y"
        >
            <section
                className="text-left p-2 m-2"
            >
                <h2 
                    className="font-bold text-xl"
                >
                    Overview
                </h2>
                <p>
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                </p>
            </section>
            <section
                className="text-center"
            >
                <h2 
                    className="font-bold text-2xl text-HIGHLIGHT p-2"
                >
                    Projects
                </h2>
                <ul
                    className="min-w-full h-full"
                >
                    {projects.map((project: ProjectDisplayType, index: number) => (
                        <li
                            key={index}
                            className="h-[70vh] w-full flex flex-col justify-evenly items-center p-2 m-2 bg-WHITE divide-y divide-dashed border "
                        >
                            <section
                                className={`h-[40%] w-full flex justify-evenly items-center text-center ${index % 2 !== 0 && "flex-row-reverse"}`}
                            >
                                <div 
                                    className="w-[70%] flex flex-col justify-evenly items-center m-2 p-2"
                                >
                                    <h3
                                        className="w-full font-bold text-xl m-2 p-2 bg-HIGHLIGHT text-WHITE"
                                    >
                                        {project.projectName}
                                    </h3>
                                    <p>
                                        {project.projectDesc}
                                    </p>
                                </div>
                                <ul 
                                    className="w-[30%] flex flex-col justify-evenly items-center h-full border-r overflow-y-auto m-2 p-2"
                                >
                                    {project.projectTools.map((tool: string, toolIndex: number) => (
                                        <p key={toolIndex}>{tool}</p>
                                    ))}
                                </ul>
                            </section>
                            <p
                                className="min-h-[70%] w-full flex justify-center items-center m-2 p-2"
                            >
                                {project.projectLesson}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}
type ProjectDisplayType = {
    projectName: string,
    projectDesc: string,
    projectTools: string[],
    projectLesson: string,
}