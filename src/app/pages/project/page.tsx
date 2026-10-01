'use client'

import { ProjectData, projStruc } from "@/app/Data";
import LeftBar from "@/app/Global/LeftBar";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Test()
{
    const searchParams = useSearchParams();

    const [project, setProject] = useState<projStruc>();

    useEffect(() => {
        const projectTitle = searchParams.get("ProjNam");
        const foundProject = ProjectData.find((p) => p.projName === projectTitle);
        if (foundProject)
        {
            setProject(foundProject)
        }
    }, [searchParams])

    if (!project)
    {
        return (
            <main>
                <LeftBar />
                <section className="md:ml-[15%] ml-[25%] p-2">
                    Waiting for data...
                </section>
            </main>
        )
    }

    return (
        <main>
            <LeftBar />
            <section className="md:ml-[15%] ml-[25%] p-2">
                <div
                    className="h-[10vh] flex flex-col justify-evenly border-b pb-2"
                >
                    <h1
                        className="text-2xl"
                    >
                        {project?.projName}
                    </h1>
                    <p
                        className="text-sm"
                    >
                        {project.descShort}
                    </p>
                </div>
                <section 
                    className="h-[80vh] flex flex-col justify-between"
                >
                    <ul className="h-full flex flex-col text-center divide-y">
                        {project.descLong.map((d: string, index: number) => (
                            <li key={index}
                                className="h-full p-2 mt-2 mb-2"
                            >
                                {d}
                            </li>
                        ))}
                    </ul>
                    <ul className="flex flex-row justify-evenly items-center">
                        {project.techUsed.map((t: string, index: number) => (
                            <li key={index}
                            
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                    <div
                        className="h-[10vh] flex flex-row justify-evenly items-center"
                    >
                        <Link
                            href={project.repoLink}
                            className="h-[8vh] flex flex-row justify-evenly items-center mt-2 mb-2 hover:opacity-70 border rounded-full"
                        >
                            <img src={project.imgSource || "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fugly-rat-pictures-htkgui2lbr935i8r.jpg&f=1&nofb=1&ipt=d9edfb324d9b15db538bc54e0032709406d9a115aba4abf1a7a93cec4d046f37&ipo=images"} alt="ProjectIcon" 
                                className="max-h-[100%] rounded-full"
                            />
                            <p className="p-2 m-2">
                                Link to project respository
                            </p>
                        </Link>
                        {project.publicAccess && project.publicAccessLink != "" && 
                            <Link
                                className="h-[8vh] flex items-center text-xl border rounded-full p-2 hover:opacity-70"
                                href={project.publicAccessLink}
                            >
                                See in action
                            </Link>
                        }
                    </div>
                </section>
                
            </section>
        </main>
    )
}