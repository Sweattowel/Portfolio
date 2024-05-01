import React from "react"

export default function MyProjects()
{
    return (
        <div className="bg-LIGHT md:h-[95vh] h-full w-full">
            <div className="bg-WHITE h-full w-[90%] flex flex-col m-auto shadow-lg">
                <div className="w-[80%] h-[20vh] ml-[15%] flex flex-row">
                    <h1 className="text-[2rem] text-HIGHLIGHT font-bold font-serif w-full md:w-[50%] h-full text-center justify-center flex items-center">
                        What im working on
                    </h1>
                </div>
                <div className="flex md:flex-row flex-col w-full h-full justify-evenly">

                    <div className="shadow-lg md:w-[30%] w-full md:h-[80%] h-full mb-[5%] flex flex-col">
                        <h1 className="text-LIGHT bg-DARK rounded justify-center flex text-[2rem] font-bold font-serif mt-2">
                            AlieSohn Pottery
                        </h1>
                        <div className="mt-[5%]">
                            <h2 className="text-HIGHLIGHT font-bold justify-center flex">
                                Summary
                            </h2>
                            <p className="w-[90%] h-[15vh] h-[10vh] flex m-auto text-center border-b border-HIGHLIGHT">
                                AlieSohn Pottery is a collaborative E-Commerce Site which leverages React, tailwind and more to create a seamless first come first serve store experience
                            </p>
                        </div>
                            <button className="ring ring bg-DARK hover:ring-HIGHLIGHT hover:ring-HIGHLIGHT text-LIGHT w-[80%] m-auto">
                                View On Github
                            </button>
                    </div>

                    <div className="shadow-lg md:w-[30%] w-full md:h-[80%] h-full mb-[5%] flex flex-col">
                        <h1 className="text-LIGHT bg-DARK rounded justify-center flex text-[2rem] font-bold font-serif mt-2">
                            Spotify-Control
                        </h1>
                        <div className="mt-[5%]">
                            <h2 className="text-HIGHLIGHT font-bold justify-center flex">
                                Summary
                            </h2>
                            <p className="w-[90%] h-[15vh] h-[10vh] flex m-auto text-center border-b border-HIGHLIGHT">
                                A Seamless API controller for Spotify to control the music in otherwise tense operations
                            </p>
                        </div>
                            <button className="ring ring bg-DARK hover:ring-HIGHLIGHT hover:ring-HIGHLIGHT text-LIGHT w-[80%] m-auto">
                                View On Github
                            </button>
                    </div>
                    
                    <div className="shadow-lg md:w-[30%] w-full md:h-[80%] h-full mb-[5%] flex flex-col">
                        <h1 className="text-LIGHT bg-DARK rounded justify-center flex text-[2rem] font-bold font-serif mt-2">
                            This very page
                        </h1>
                        <div className="mt-[5%]">
                            <h2 className="text-HIGHLIGHT font-bold justify-center flex">
                                Summary
                            </h2>
                            <p className="w-[90%] h-[15vh] h-[10vh] flex m-auto text-center border-b border-HIGHLIGHT">
                                A Fresh portfolio Created and designed by yours truly with an emphasis on colour standards
                            </p>
                        </div>
                            <button className="ring ring bg-DARK hover:ring-HIGHLIGHT hover:ring-HIGHLIGHT text-LIGHT w-[80%] m-auto">
                                View On Github
                            </button>
                    </div>
                </div>

                <div className="justify-evenly flex md:flex-row flex-col w-full h-[100vh]">
                    <div className="h-[50vh]">
                        <h1 className="md:text-[2rem] text-[1rem] text-HIGHLIGHT font-bold font-serif w-full text-center justify-center flex items-center">
                            Technology used
                        </h1>
                        <ul className="shadow-lg h-full w-full text-center justify-center flex flex-col items-center">
                            <li>
                                HTML, CSS JS, TS and C#
                            </li>
                            <li>
                                REACT.JS With both JSX and TSX  Axios, Express, MySql, Github, VS And more!
                            </li>
                            <li>
                                Api Communication with Axios and Express
                            </li>
                            <li>
                                Database handling with MySql using both JS and C# to facilitate queries
                            </li>
                            <li>
                                Bcrypt, Multer, Dotnet, Node.JS, JWT, Cors and ENV
                            </li>                        
                        </ul>                        
                    </div>
                    <div className="h-[50vh]">
                        <h1 className="md:text-[2rem] text-[1rem] text-HIGHLIGHT font-bold font-serif w-full text-center justify-center flex items-center">
                            Considerations
                        </h1>
                        <ul className="shadow-lg h-full w-full text-center justify-center flex flex-col items-center">
                            <li>
                                Maintaining standards of OOP for clarity and ease of maintenance
                            </li>
                            <li>
                                Dutifully adding comments for ease of access
                            </li>
                            <li>
                                Ensuring sanitary API calls
                            </li>
                            <li>
                                Clean use of MySql Query commands to ensure safe effective and consistent data
                            </li>
                            <li>
                                Encryption of userDetails as well as defining LOA for users
                            </li>                        
                        </ul>                        
                    </div>
                </div>
            </div>
        </ div>
    )
}