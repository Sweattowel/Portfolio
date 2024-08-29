import React from "react"

interface ProjectStruc{
    projectName: string,
    projectSummary: string,
    projectGithubLink: string,
    projectTechnologyUsed: string[]
}
export default function MyProjects()
{
    const projects: ProjectStruc[] = [
        {
            projectName: "AlieSohn Pottery",
            projectSummary: "AlieSohn Pottery is a collaborative E-Commerce Site which leverages React, tailwind and more to create a seamless first come first serve store experience",
            projectGithubLink: "https://github.com/Sweattowel/AlieSohn-Pottery",
            projectTechnologyUsed: [
                "React",
                "tailwind CSS",
                "Multer", 
                "dotnet", 
                "node.JS", 
                "Bcrypt",
                "JWT",
                "Material UI", 
                "Framer-motion", 
                "Prettier",
                "Twin server scripts with JS and C#",
            ]
        },
        {
            projectName: "JavaScript Connector",
            projectSummary: "A designed data transmitter used to take in SQL data as JSON, transform that data with the editing of columns and specific sets before return or asssigning said data to a new location.",
            projectGithubLink: "https://github.com/Sweattowel/connector",
            projectTechnologyUsed: [
                "JSON",
                "Next.js",
                "Tailwind",
                "Typescript",
            ]
        },
        {
            projectName: "Research and development",
            projectSummary: "A multitude of basic projects and components that seek to explore and create based on new concepts, this includes but does not limit itself to, 2D Engine rendering, 3D engine rendering, API experimentation, New and experimental design choices! Please visit github to find out more",
            projectGithubLink: "https://github.com/Sweattowel/3dEngineAndOtherExperiments",
            projectTechnologyUsed: [
                "2D rotation and movement using Math",
                "4D matrix rotation handling X, Y, Z and W adjustment in a 3D environment",
                "Full Coordinate to Screen pipeline",
                "Controlling data through components",
            ]
        },
        {
            projectName: "Used Car Ecommerce platform",
            projectSummary: "Recreation of a public Ecommerce site, Primarily used to learn Next.js with its file based routing, No monetary gain was achieved via this recreation.",
            projectGithubLink: "https://github.com/Sweattowel/car-page",
            projectTechnologyUsed: [
                "Next.js",
                "Tailwind",
                "VS",
            ]
        },
        {
            projectName: "C# RPG",
            projectSummary: "A Educational Hobby activity in which i design and playest a C# written console RPG, its purpose being to learn and reinforce C# programming and to reinforce the basics of programming",
            projectGithubLink: "https://github.com/Sweattowel/C--RPG",
            projectTechnologyUsed: [
                "C#"
            ]
        },
        {
            projectName: "Developer Portfolio",
            projectSummary: "A Fresh portfolio Created and designed by yours truly with an emphasis on colour standards, style and up to date standards. Hosted on Vercel.",
            projectGithubLink: "https://github.com/Sweattowel/Portfolio",
            projectTechnologyUsed: [
                "React.JS",
                "Nasa Photo API",
                "Tailwind",
                "ENV",
            ]
        },
    ]
    const skills: string[] = [
        "HTML, CSS JS, TS and C#",
        "REACT.JS With both JSX and TSX  Axios, Express, MySql, Github, VS And more!",
        "Api Communication with Axios and Express",
        "Database handling with MySql using both JS and C# to facilitate queries",
        "Bcrypt, Multer, Dotnet, Node.JS, JWT, Cors and ENV",
    ]
    const considerations: string[] = [
        "Maintaining standards of OOP for clarity and ease of maintenance",
        "Dutifully adding comments for ease of access",
        "Ensuring sanitary API calls",
        "Clean use of MySql Query commands to ensure safe effective and consistent data",
        "Encryption of userDetails as well as defining LOA for users",
    ]
    return (
        <div className="bg-LIGHT  h-full w-full">
            <div className="bg-WHITE h-full w-[90%] flex flex-col m-auto shadow-lg">
                <h1 className="text-HIGHLIGHT text-[2rem] font-serif w-[80%] h-[5vh] flex justify-center items-center m-auto">
                    Projects
                </h1>
                <ul
                    className="w-[90%] flex flex-row flex-wrap m-auto justify-evenly items-center p-4 border"
                >
                    {projects.map((project: ProjectStruc, index: number) => (
                        <li
                            key={index}
                            className="w-[400px] h-[600px] border rounded p-4 m-4 flex flex-col justify-evenly items-center shadow-lg hover:shadow-2xl hover:scale-110 transition ease-in-out duration-500"
                        >
                            <h2
                                className="text-HIGHLIGHT text-[1.2rem] font-serif w-[80%] h-[5vh] border-b flex justify-center items-center"
                            >
                                {project.projectName}
                            </h2>
                            <p
                                className="text-center p-4 m-4"
                            >
                                {project.projectSummary}
                            </p>
                            <button
                                onClick={() => 
                                    window.open(project.projectGithubLink)
                                }
                                className="border rounded p-2 m-2 text-HIGHLIGHT bg-DARK"
                            >
                                Open on github
                            </button>
                            <ul
                                className="h-[20%] p-4 flex flex-wrap justify-center items-center"
                            >
                                {project.projectTechnologyUsed.map((tech: string, techIndex: number) => (
                                    <li
                                        className="text-[0.8rem] text-center"
                                    >
                                        -{tech}-
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                <div className="flex md:flex-row flex-col w-[90%] md:h-[60vh] h-[100vh] m-auto">
                    <div className="m-auto h-[45vh] shadow-lg hover:scale-110 hover:shadow-2xl duration-500">
                        <h1 className="mt-2 border-b-2 md:text-[2rem] text-[1rem] text-HIGHLIGHT font-bold font-serif h-[10%] w-[80%] m-auto text-center justify-center flex items-center">
                            Technology used
                        </h1>
                        <ul className="md:h-[90%] h-[90%] w-[80%] m-auto text-center justify-center flex flex-col items-center">
                            {skills.map((skill: string, index: number) => (
                                <li
                                    key={index}
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="m-auto h-[45vh] shadow-lg hover:scale-110 hover:shadow-2xl duration-500">
                        <h1 className="mt-2 border-b-2 md:text-[2rem] text-[1rem] text-HIGHLIGHT font-bold font-serif w-[80%] m-auto text-center justify-center flex items-center">
                            Considerations
                        </h1>
                        <ul className="md:h-[80%] h-[35vh] w-[80%] m-auto text-center justify-center flex flex-col items-center text-center">
                            {considerations.map((consideration: string, index: number) => (
                                <li
                                    key={index}
                                >
                                    {consideration}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </ div>
    )
}