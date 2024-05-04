import React from "react"

export default function MyProjects()
{
    return (
        <div className="bg-LIGHT  h-full w-full">
            <div className="bg-WHITE h-full w-[90%] flex flex-col m-auto shadow-lg">
                <div className="w-[80%] h-[20%] md:ml-[15%] m-auto flex flex-row">
                    <h1 className="border-b-2 text-[2rem] text-HIGHLIGHT font-bold font-serif w-full md:w-[50%] h-[10vh] text-center justify-center flex items-center">
                        What im working on
                    </h1>
                </div>
                <div className="flex md:flex-row flex-col w-full h-full justify-evenly">

                    <div className="shadow-lg md:w-[30%] w-full h-[45vh] flex flex-col">
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
                        <button onClick={() => window.open("https://github.com/Sweattowel/AlieSohn-Pottery")} className="ring ring bg-DARK hover:ring-HIGHLIGHT hover:ring-HIGHLIGHT text-LIGHT w-[80%] m-auto">
                            View On Github
                        </button>
                    </div>

                    <div className="shadow-lg md:w-[30%] w-full h-[45vh] flex flex-col">
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
                        <button onClick={() => window.open("https://github.com/Sweattowel/Python_spotify_control")} className="ring ring bg-DARK hover:ring-HIGHLIGHT hover:ring-HIGHLIGHT text-LIGHT w-[80%] m-auto">
                            View On Github
                        </button>
                    </div>

                    <div className="shadow-lg md:w-[30%] w-full h-[45vh] flex flex-col">
                        <h1 className="text-LIGHT bg-DARK rounded justify-center flex text-[2rem] font-bold font-serif mt-2">
                            This very page
                        </h1>
                        <div className="mt-[5%]">
                            <h2 className="text-HIGHLIGHT font-bold justify-center flex">
                                Summary
                            </h2>
                            <p className="w-[90%] h-[15vh] h-[10vh] flex m-auto text-center border-b border-HIGHLIGHT">
                                A Fresh portfolio Created and designed by yours truly with an emphasis on colour standards, style and up to date standards.
                                <br />
                                Hosted on Vercel.
                            </p>
                        </div>
                        <button onClick={() => window.open("https://github.com/Sweattowel/Portfolio")} className="ring ring bg-DARK hover:ring-HIGHLIGHT hover:ring-HIGHLIGHT text-LIGHT w-[80%] m-auto">
                            View On Github
                        </button>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col w-[90%] md:h-[60vh] h-[100vh] m-auto">
                    <div className="m-auto h-[45vh] shadow-lg">
                        <h1 className="mt-2 border-b-2 md:text-[2rem] text-[1rem] text-HIGHLIGHT font-bold font-serif h-[10%] w-[80%] m-auto text-center justify-center flex items-center">
                            Technology used
                        </h1>
                        <ul className="md:h-[90%] h-[90%] w-[80%] m-auto text-center justify-center flex flex-col items-center">
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
                    <div className="m-auto h-[45vh] shadow-lg">
                        <h1 className="mt-2 border-b-2 md:text-[2rem] text-[1rem] text-HIGHLIGHT font-bold font-serif w-[80%] m-auto text-center justify-center flex items-center">
                            Considerations
                        </h1>
                        <ul className="md:h-[80%] h-[35vh] w-[80%] m-auto text-center justify-center flex flex-col items-center">
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