import React, { useEffect, useState } from "react"


interface NASAData
{
    date: string;
    explanation: string;
    hdurl: string; 
    media_type: string;
    service_version: string;
    title: string;
    url: string; 
}

export default function AboutMe()
{
    const [imageData, setImageData] = useState({
        date: new Date().toISOString(),
        explanation: "Failed to collect image of the day",
        hdurl: "", 
        media_type: 'image',
        service_version: '',
        title: 'Default',
        url: "", 
    })
    const skillImagesVerti = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7uwLyomLuj-z2wdukzRfaViu2o_urpD0h8eOGOdtcLQ&s",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png",
    ]
    const skillImagesHoriz = [
        "https://logowik.com/content/uploads/images/axios5736.logowik.com.webp",
        "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxaFoW7q-SAWWdKEGQ7KxWixUeLFn7wCPF5xEHB9D-fQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeNc1xa6WIHBesr3OHp16RhD1Hu0VKsfkLaqogMKK-wA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKh3TBmwA4QWDrifoSZtLl9B1yKA4mtPYjo6Z0xTxp9w&s",
    ]

    const skills: string[][] = [
        [
            "Responsive Front end pages",
            "Knowledge of colour theory and human interaction",
            "Node.JS && dotnet C# Server programming",
            "Responsible secure API design",
            "Class based Programming with strong knowledge of C#",
            "Persistent growth in safe internet practice"
        ],
        [
            "Open attitude towards feedback and reception of work",
            "Discussion and open Collaboration with developers and clientelle",
            "Persistent attitude towards learning and developing all skills",
            "Open mind towards retreading and improving prior skills",
        ],
        [
            "Strong Basis in HTML, CSS and JS/TS",
            "Experience with React, React.Next, JSX & TSX, Axios, Express, MySql, Github, VS And more!",
            "Practiced knowledge of CSS styling using Regular/Tailwind CSS",
            "Experienced with CyberSecurity standards such as Sanitizing, Encryption, LOA And Real life social security",
        ]
    ]
    const NASAADDRESS = process.env.REACT_APP_NASA_API_KEY;
    class handleImage
    {
        static getPictureOfTheDay = async () => 
        {
            try {
                const currDate = new Date().toString().split(' ');
                
                const formatDate = currDate[0] + currDate[1] + currDate[2] + currDate[3]

                const cachedData = sessionStorage.getItem(`nasa-picture-Date:${formatDate}`);
                if (cachedData) 
                {
                    // Reducing the toal amount of API calls to reduce cost and improve user experience
                    setImageData(JSON.parse(cachedData))
                    return;
                }
                const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASAADDRESS}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data: NASAData = await response.json();
                if (data)
                {
                    setImageData(data)
                    sessionStorage.setItem(`nasa-picture-Date:${formatDate}`, JSON.stringify(data))                    
                }
                else 
                {
                    console.error('Media type is not an image');
                }
            } catch (error) {
                console.error('Error fetching data');
            }
        }
    }
    useEffect(() => {
        handleImage.getPictureOfTheDay();
    }, [])



    return (
        <div className="bg-LIGHT md:h-full w-full">
                <div className="fixed h-[500vh] w-full mt-[50vh] ml-[10%] flex flex-col z-1">
                    {skillImagesVerti.map((image: string, index: number) => (
                        <img key={index} className="z-1 animate-moveDown fixed w-[6%] top-0 mt-[-5vh]" src={image} alt="Skill" style={{ animationDelay: `${index * -1}s` }}/>
                    ))}
                </div>
                <div className="fixed h-[10vh] w-[60%] left-[10%] top-20 ml-[10%] flex flex-row z-1 items-center justify-between">
                    {window.innerWidth > 768 && skillImagesHoriz.map((image: string, index: number) => (
                        <img key={index} className="z-1 animate-moveRight fixed w-[3%]" src={image} alt="Skill" style={{ animationDelay: `${index * -1}s` }}/>
                    ))}
                </div>
            <div className="bg-WHITE h-full w-[90%] flex flex-col m-auto shadow-lg z-0">
                
                <div className="flex flex-col mt-[15vh] pb-2 rounded ">
                    <div className="w-[90%] md:w-[60%] md:h-[60%] h-full m-auto flex flex-col items-center mb-5 bg-WHITE z-0 shadow-lg">
                        <h1 className="flex m-auto w-[80%] text-center justify-center text-HIGHLIGHT font-serif text-[3rem]">
                            About me
                        </h1>
                        <p className="flex m-auto w-[80%] text-center md:mb-0 mb-10 md:h-[15vh] h-[30vh]">
                            A Web Developer with experience and skills that are reflected in my use of the following; React, JS, TS, C#, Use of libraries such as Tailwind and framer-motion, Front and Back-end design with SQL Database integration, Stakeholder communications, API Writing, Ubuntu Linux DB Hosting and more according to my persistent personal development.
                        </p>
                    </div>
                    <div className="md:w-[80%] w-[90%] flex justify-center m-auto z-0">
                        {imageData.url !== '' ? (
                            <div>
                                {imageData.media_type == 'video' ? (
                                    <iframe 
                                        src={imageData.url} 
                                        frameBorder="0"
                                        className="rounded-t-lg shadow-lg w-full min-h-[50vh] min-w-[50vw]"
                                        >
                                        
                                    </iframe>
                                ) : (
                                    <img src={`${imageData.url}`}
                                        alt={`${imageData.title}`}
                                        className="rounded-t-lg shadow-lg"
                                    />                                        
                                )}
                                <div className=" divide-y rounded-b bg-DARK text-HIGHLIGHT">
                                    <p className="w-[80%] m-auto flex justify-center">
                                        {imageData.title} 
                                    </p>
                                    <p className="w-[80%] m-auto flex justify-center">
                                        {imageData.media_type} provided by NASA
                                    </p>
                                </div>                               
                            </div>
                         
                        ) : (
                            <div 
                                className="animate-pulse transition duration-[2000ms] rounded-lg shadow-lg w-[80%] min-h-[10vh] h-[80%] bg-DARK text-LIGHT flex justify-center items-center"
                            >
                                LOADING...
                            </div>
                        )}

                    </div>
                </div>
                <h1 className="z-0 flex m-auto mb-5 w-[80%] text-center justify-center text-HIGHLIGHT font-serif text-[3rem] border-b">
                    My Experiences
                </h1>
                <div className="z-0 md:h-[50vh] h-[100vh] justify-evenly flex flex-col">
                    <ul className="flex md:flex-row flex-col w-full h-full justify-evenly">
                        <li className="z-0 bg-WHITE shadow-lg md:h-[80%] h-[30%] w-full md:w-[30%] shadow-inner-lg bg-WHITE">
                            <h1 className="bg-gradient-to-b from-BLACK via-DARK to-BLACK text-LIGHT rounded p-2 text-center">
                                Front-back end Design
                            </h1>
                            <ul className="flex flex-col h-[25vh] text-center justify-evenly w-[80%] m-auto">
                                {skills[0].map((skill: string, index: number) => (
                                    <li
                                        key={index}
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="z-0 bg-WHITE shadow-lg md:h-[80%] h-[30%] w-full md:w-[30%] shadow-inner-lg">
                            <h1 className="bg-gradient-to-b from-BLACK via-DARK to-BLACK text-LIGHT rounded p-2 text-center">
                                Collaboration and improvement
                            </h1>
                            <ul className="flex flex-col h-[25vh] text-center justify-evenly w-[80%] m-auto">
                                {skills[1].map((skill: string, index: number) => (
                                    <li
                                        key={index}
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="z-0 bg-WHITE shadow-lg md:h-[80%] h-[30%] w-full md:w-[30%] shadow-inner-lg">
                            <h1 className="bg-gradient-to-b from-BLACK via-DARK to-BLACK text-LIGHT rounded p-2 text-center">
                                Technology
                            </h1>
                            <ul className="flex flex-col h-[25vh] text-center justify-evenly w-[80%] m-auto">
                                {skills[2].map((skill: string, index: number) => (
                                    <li
                                        key={index}
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </ div>
    )
}