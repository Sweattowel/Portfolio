import React from "react";
import { PageResourceType } from "../Models";
import { Link } from "react-router-dom";

type NavProps = {
    PageResource : PageResourceType[];
}

export default function Head({ PageResource } : NavProps)
{
    return (
        <main 
            className="h-[12vh] flex flex-col border-b"
        >
            <div className="h-[10vh] flex flex-row items-center">
                <img 
                    className="h-[10vh] w-[10vh] rounded-[50%]  max-h-[100%] border"
                    src="https://pbs.twimg.com/profile_images/1020966446208364545/KIVK7DtL_400x400.jpg" alt="UserImage"
                />
                <h1
                    className="w-full text-center font-bold text-2xl"
                >
                    SweatTowel Portfolio
                </h1>
            </div>

            <ul
                className="h-[2vh] w-[50%] text-xs flex flex-row justify-evenly relative bottom-[0] divide-x"
            >
                {PageResource.map((Page: PageResourceType, index: number) => (
                    <NavLink PageResource={Page} key={index}/>
                ))}
            </ul>
        </main>
    )
}

type NavProp = {
    PageResource : PageResourceType;
}

function NavLink({PageResource} : NavProp){
    return (
        <Link 
            to={PageResource.Link}
            className="w-full hover:bg-BLACK hover:text-WHITE text-center"
        >
            {PageResource.Name}
        </Link>
    )
}