import Link from "next/link";

export default function LeftBar()
{
    const socialMedia = [
        {
            imgSource:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F23%2FGithub-Logo-PNG-Image-1.png&f=1&nofb=1&ipt=c746b08774a418cc48f070256193115905cdacb450b39d2e74bea82705d91785&ipo=images",
            Link:"https://github.com/Sweattowel"
        },
        {
            imgSource:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F23%2FGithub-Logo-PNG-Image-1.png&f=1&nofb=1&ipt=c746b08774a418cc48f070256193115905cdacb450b39d2e74bea82705d91785&ipo=images",
            Link:"https://github.com/Sweattowel"
        },
        {
            imgSource:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F23%2FGithub-Logo-PNG-Image-1.png&f=1&nofb=1&ipt=c746b08774a418cc48f070256193115905cdacb450b39d2e74bea82705d91785&ipo=images",
            Link:"https://github.com/Sweattowel"
        },
        {
            imgSource:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F23%2FGithub-Logo-PNG-Image-1.png&f=1&nofb=1&ipt=c746b08774a418cc48f070256193115905cdacb450b39d2e74bea82705d91785&ipo=images",
            Link:"https://github.com/Sweattowel"
        },
        {
            imgSource:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F23%2FGithub-Logo-PNG-Image-1.png&f=1&nofb=1&ipt=c746b08774a418cc48f070256193115905cdacb450b39d2e74bea82705d91785&ipo=images",
            Link:"https://github.com/Sweattowel"
        },
        {
            imgSource:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F23%2FGithub-Logo-PNG-Image-1.png&f=1&nofb=1&ipt=c746b08774a418cc48f070256193115905cdacb450b39d2e74bea82705d91785&ipo=images",
            Link:"https://github.com/Sweattowel"
        },
        {
            imgSource:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F23%2FGithub-Logo-PNG-Image-1.png&f=1&nofb=1&ipt=c746b08774a418cc48f070256193115905cdacb450b39d2e74bea82705d91785&ipo=images",
            Link:"https://github.com/Sweattowel"
        },
        {
            imgSource:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F23%2FGithub-Logo-PNG-Image-1.png&f=1&nofb=1&ipt=c746b08774a418cc48f070256193115905cdacb450b39d2e74bea82705d91785&ipo=images",
            Link:"https://github.com/Sweattowel"
        },
    ];
    const projectList = [
        {
            imgSource: "",
            text: ""
        },
        {
            imgSource: "",
            text: ""
        },
        {
            imgSource: "",
            text: ""
        },
        {
            imgSource: "",
            text: ""
        },
    ];
    return (
        <div
            className="flex flex-col w-[20%] h-[100vh] fixed p-2 text-center border-r border-white item-center justify-between"
        >
            <div className="flex flex-col justify-evenly">
                <img className="rounded-full" 
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbnails.lbry.com%2FI4gzYhWHl-Y&f=1&nofb=1&ipt=39389a2c71ea29b805f1fd2c82068c837f2f53d9e04414ce5e4a5bd20e38d382&ipo=images" alt="Picture" 
                />
                <h1 className="text-xl font-bold w-full">
                    Yhoams Portfolio
                </h1>
            </div>
            <p>
                Leftbar
            </p>
            <ul>
                {projectList.map((proj, index:number) => (
                    <li key={index}

                    >
                        <img src={proj.imgSource} alt="ProjectPicture" />
                        <p>
                            {proj.text}
                        </p>
                    </li>
                ))}
            </ul>
            <ul className="grid grid-cols-4">
                {socialMedia.map((sm, index: number) => (
                    <Link
                        className="hover:opacity-[50%]"
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