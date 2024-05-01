import React from "react"

export default function AboutMe() {
    return (
        <div className="bg-LIGHT h-[95vh] w-full">
            <div className="bg-WHITE h-full w-[90%] flex flex-col m-auto shadow-lg">
                <div className="flex flex-row mt-5 pb-2 rounded">
                    <div className="w-[50%] h-[50%] mt-auto mb-auto flex flex-col items-center">
                        <h1 className="flex m-auto w-[80%] text-center justify-center text-HIGHLIGHT font-serif text-[3rem]">
                            About me
                        </h1>     
                        <p className="flex m-auto w-[80%] text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ducimus temporibus vero repudiandae voluptate odit consequuntur sequi, tenetur nemo autem fugiat, quibusdam necessitatibus recusandae in natus vitae commodi qui ex!    
                        </p>                       
                    </div>
                    <div className="w-[50%]">
                        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1714003200&semt=sph"
                            alt="Profile Picture"
                            className="rounded-full ring shadow-lg"
                        />                        
                    </div>
                </div>
                <div>
                    <h1 className="flex m-auto mb-5 w-[80%] text-center justify-center text-HIGHLIGHT font-serif text-[3rem] border-b">
                        My Experiences                        
                    </h1>
                    <ul className="flex flex-row w-full justify-evenly">
                        <li className="shadow-lg h-full w-[30%] shadow-inner-lg">
                            <h1 className="bg-DARK text-LIGHT rounded p-2 text-center">
                                Front-back end Design                                
                            </h1>
                            <ul className="flex flex-col h-[25vh] text-center justify-evenly">
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
                                    Organised OOP
                                </li>
                            </ul>
                        </li>
                        <li className="shadow-lg h-full w-[30%] shadow-inner-lg">
                            <h1 className="bg-DARK text-LIGHT rounded p-2 text-center">
                                Collaboration and improvement
                            </h1>
                            <ul className="flex flex-col h-[25vh] text-center justify-evenly">
                                <li>
                                    Open to criticism and feedback
                                </li>
                                <li>
                                    Discussion and open Collaboration with developers and clientelle 
                                </li>
                                <li>
                                    Learning fresh Technology
                                </li>
                                <li>
                                    Research and developing skills
                                </li>
                            </ul>
                        </li>
                        <li className="shadow-lg h-full w-[30%] shadow-inner-lg">
                            <h1 className="bg-DARK text-LIGHT rounded p-2 text-center">
                                Technology
                            </h1>
                            <ul className="flex flex-col h-[25vh] text-center justify-evenly">
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
                                    Experienced with CyberSecurity standards such as Sanitizing, Encryption and LOA 
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </ div>
    )
}