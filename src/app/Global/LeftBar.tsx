import Link from "next/link";

import { ProjectData, projStruc } from "../Data";

export default function LeftBar()
{
    const socialMedia = [
        {
            imgSource:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F23%2FGithub-Logo-PNG-Image-1.png&f=1&nofb=1&ipt=c746b08774a418cc48f070256193115905cdacb450b39d2e74bea82705d91785&ipo=images",
            Link:"https://github.com/Sweattowel",
        },
        {
            imgSource:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F23%2FGithub-Logo-PNG-Image-1.png&f=1&nofb=1&ipt=c746b08774a418cc48f070256193115905cdacb450b39d2e74bea82705d91785&ipo=images",
            Link:"https://github.com/Sweattowel",
        },
        {
            imgSource:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F23%2FGithub-Logo-PNG-Image-1.png&f=1&nofb=1&ipt=c746b08774a418cc48f070256193115905cdacb450b39d2e74bea82705d91785&ipo=images",
            Link:"https://github.com/Sweattowel",
        },
        {
            imgSource:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F23%2FGithub-Logo-PNG-Image-1.png&f=1&nofb=1&ipt=c746b08774a418cc48f070256193115905cdacb450b39d2e74bea82705d91785&ipo=images",
            Link:"https://github.com/Sweattowel",
        }
    ];

    return (
        <div
            className="flex flex-col md:w-[15%] w-[25%] h-[100vh] fixed text-center border-r border-white item-center justify-between"
        >
            <Link 
                className="flex flex-col justify-evenly h-[20%] hover:opacity-70 m-2"
                href={"/"}
            >
                <img className="rounded-full max-h-full" 
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbnails.lbry.com%2FI4gzYhWHl-Y&f=1&nofb=1&ipt=39389a2c71ea29b805f1fd2c82068c837f2f53d9e04414ce5e4a5bd20e38d382&ipo=images" alt="Picture" 
                />
                <h1 className="text-xl font-bold w-full">
                    Yhoams Portfolio
                </h1>
            </Link>
            <div
                className="h-[70%] m-2 mr-0 "
            >   
                <h2 className="h-[10%]">
                    Projects
                </h2>
                <ul className="h-[90%] w-full divide-y">
                    {ProjectData.map((proj: projStruc, index:number) => (
                        <Link key={index}
                            className="pr-2 borderw-full flex flex-row justify-evenly items-center p-2 hover:opacity-100 opacity-50"
                            href={proj.projName ? `/Pages/Project?ProjNam=${proj.projName}` : `/Pages/Error?Error=NoSource`}
                            >
                            <img src={proj.imgSource || "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fugly-rat-pictures-htkgui2lbr935i8r.jpg&f=1&nofb=1&ipt=d9edfb324d9b15db538bc54e0032709406d9a115aba4abf1a7a93cec4d046f37&ipo=images"} alt="ProjectPicture" 
                                className="w-[25%] rounded-full"
                            />
                            <p 
                                className="w-full text-[90%]"
                                >
                                {proj.projName || "Lorem ipsum"}
                            </p>
                        </Link>
                    ))}
                </ul>
            </div>
            <ul className="flex flex-row max-h-[10%]">
                {socialMedia.map((sm, index: number) => (
                    <Link
                        className="flex hover:opacity-100 opacity-50"
                        href={sm.Link}
                        key={index}
                    >
                        <img src={sm.imgSource}/>
                    </Link>
                ))}
            </ul>
        </div>
    )
}