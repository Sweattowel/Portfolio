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
        url: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714003200&semt=sph", 
    })
    const skillImages = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7uwLyomLuj-z2wdukzRfaViu2o_urpD0h8eOGOdtcLQ&s",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7uwLyomLuj-z2wdukzRfaViu2o_urpD0h8eOGOdtcLQ&s",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png",
    ]
    const NASAADDRESS = process.env.REACT_APP_NASA_API_KEY;
    class handleImage
    {
        static getPictureOfTheDay = async () => 
        {
            try {

                const cachedData = localStorage.getItem("nasaData");
                if (cachedData) 
                {
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
                    localStorage.setItem("nasaData", JSON.stringify(data))                    
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
                    {skillImages.map((image: string, index: number) => (
                        <img key={index} className="z-1 animate-moveDown fixed w-[6%] top-0 mt-[-5vh]" src={image} alt="Skill" style={{ animationDelay: `${index * -1}s` }}/>
                    ))}
                </div>
            <div className="bg-WHITE h-full w-[90%] flex flex-col m-auto shadow-lg z-0">
                <div className="flex flex-col mt-5 pb-2 rounded ">
                    <div className="w-full md:w-[50%] md:h-[50%] h-full m-auto flex flex-col items-center mb-5">
                        <h1 className="flex m-auto w-[80%] text-center justify-center text-HIGHLIGHT font-serif text-[3rem]">
                            About me
                        </h1>
                        <p className="flex m-auto md:w-full w-[80%] text-center md:mb-0 mb-10">
                        An intermediate Web Developer with experience and skills that are reflected in my use of the following; React, JS, TS, C#, Use of libraries such as Tailwind and framer-motion, Front and Back-end design with SQL Database integration, Stakeholder communications, API Writing, Ubuntu Linux DB Hosting and more according to my persistent personal development.
                        </p>
                    </div>
                    <div className="md:w-[80%] w-[90%] flex justify-center m-auto z-0">
                        <img src={`${imageData.url}`}
                            alt={`${imageData.title}`}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                <h1 className="z-0 flex m-auto mb-5 w-[80%] text-center justify-center text-HIGHLIGHT font-serif text-[3rem] border-b">
                    My Experiences
                </h1>
                <div className="z-0 md:h-[50vh] h-[100vh] justify-evenly flex flex-col">
                    <ul className="flex md:flex-row flex-col w-full h-full justify-evenly">
                        <li className="z-0 bg-WHITE shadow-lg md:h-[80%] h-[30%] w-full md:w-[30%] shadow-inner-lg bg-WHITE">
                            <h1 className="bg-DARK text-LIGHT rounded p-2 text-center">
                                Front-back end Design
                            </h1>
                            <ul className="flex flex-col h-[25vh] text-center justify-evenly w-[80%] m-auto">
                                <li>
                                    React.JS Front end pages
                                </li>
                                <li>
                                    Node.JS && dotnet C# Server design
                                </li>
                                <li>
                                    Responsible API design
                                </li>
                                <li>
                                    Class based Programming
                                </li>
                                <li>
                                    Api use, see Nasa image of the day above
                                </li>
                            </ul>
                        </li>
                        <li className="z-0 bg-WHITE shadow-lg md:h-[80%] h-[30%] w-full md:w-[30%] shadow-inner-lg">
                            <h1 className="bg-DARK text-LIGHT rounded p-2 text-center">
                                Collaboration and improvement
                            </h1>
                            <ul className="flex flex-col h-[25vh] text-center justify-evenly w-[80%] m-auto">
                                <li>
                                    Open attitude towards feedback and reception of work
                                </li>
                                <li>
                                    Discussion and open Collaboration with developers and clientelle
                                </li>
                                <li>
                                    Persistent attitude towards learning
                                </li>
                                <li>
                                    Research and developing previously developed skills
                                </li>
                            </ul>
                        </li>
                        <li className="z-0 bg-WHITE shadow-lg md:h-[80%] h-[30%] w-full md:w-[30%] shadow-inner-lg">
                            <h1 className="bg-DARK text-LIGHT rounded p-2 text-center">
                                Technology
                            </h1>
                            <ul className="flex flex-col h-[25vh] text-center justify-evenly w-[80%] m-auto">
                                <li>
                                    Strong Basis in HTML, CSS and JS/TS
                                </li>
                                <li>
                                    Experience with React JSX & TSX, Axios, Express, MySql, Github, VS And more!
                                </li>
                                <li>
                                    Practiced knowledge of CSS styling using Tailwind CSS
                                </li>
                                <li>
                                    Experienced with CyberSecurity standards such as Sanitizing, Encryption, LOA And social engineering
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </ div>
    )
}