import React from "react";
import ProjectCard from "../Parts/ProjectCard";
import { ProjectDisplayType } from "../Models";

export default function Projects()
{

    let projects: ProjectDisplayType[] = [
        {
            projectName: "Portfolio",
            projectDesc: "Write and maintain a complete and up to date portfolio with a focus on a purely functional website that is fast secure and efficient utilizing established web development community technology",
            projectTools: 
            [
                {
                    ToolName: "React",
                    ToolUse: "TestReact"
                },
                {
                    ToolName: "Tailwind",
                    ToolUse: "TestTailwind"
                },
                {
                    ToolName: "Vercel",
                    ToolUse: "TestVercel"
                },
                {
                    ToolName: "GIT",
                    ToolUse: "TestGIT"
                },
                {
                    ToolName: "VScode",
                    ToolUse: "TestVScode"
                }
                                
            ],
            projectLesson: "Creating a functional website using React can be slow and non functional if done incorrectly, to ensure user experience i maintained a steady approach to development that took heed of every decision made, from removing unnecessary fluff that would otherwise slow down the user or non necessarily add functionality",
        },
        {
            projectName: "ThoamAuth",
            projectDesc: "Create a self hosted authentication and authorization platform with integrated admin control and base notifications",
            projectTools: 
            [
                {
                    ToolName: "C#",
                    ToolUse: "Test"
                },
                {
                    ToolName: "ASPNet Tools",
                    ToolUse: "Test"
                },
                {
                    ToolName: "Encryption & Decoding",
                    ToolUse: "Test"
                },
                {
                    ToolName: "CyberSecurity",
                    ToolUse: "Test"
                },
            ],
            projectLesson: "The impetus for creating a authentication platform was the search of knowledge in cybersecurity, creating this service required not only programming, but attempts of breaking into it myself, from this i learned the ins and out of base SQL injection and how to counter with escaping, i experienced the affect of unexpected payloads and error responses providing means of getting in without retrieving data and i learned of how to defend against such measures",
        },
        {
            projectName: "Spotify TV",
            projectDesc: "Solve a real issue involving the automation of created playlists allowing for a `TV esque` selection of podcasts as shows with music from created playlists acting as the `Ads` ",
            projectTools: 
            [
                {
                    ToolName: "Spotify Development API",
                    ToolUse: "Test"
                },
                {
                    ToolName: "C#",
                    ToolUse: "Test"
                },
                {
                    ToolName: "ASPNet",
                    ToolUse: "Test"
                },
                {
                    ToolName: "Samsung Development API",
                    ToolUse: "Test"
                },
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
                    className="font-bold text-xl p-2"
                >
                    Overview
                </h2>
                <p
                    className="p-2 m-2"
                >
                    The projects that have been made a varied and far between, from basic 3D rendering to Fully authenticated back end services, all types of projects have been made, many have been "Failures", All have been learning experiences
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
                        <ProjectCard 
                            projectProps={project} 
                            key={index}
                        />
                    ))}
                </ul>
            </section>
        </main>
    )
}
