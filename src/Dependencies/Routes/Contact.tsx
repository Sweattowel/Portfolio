import React from "react";

export default function Contact()
{
    return (
        <div className="bg-LIGHT h-[95vh] w-full">
            <div className="bg-WHITE h-full w-[90%] flex flex-col m-auto shadow-lg">
                <h1 className="text-HIGHLIGHT text-[1.5rem] md:text-[3rem] font-bold font-serif w-full h-[10vh] items-center flex justify-center">
                    CONTACT ME
                </h1>
                <div className="bg-DARK w-[80%] h-[80%] text-LIGHT flex flex-col ml-auto mr-auto justify-evenly items-center rounded ring ring-HIGHLIGHT">
                    <p className="text-LIGHT md:text-[2.5rem] text-[1.5rem] text-center w-full rounded mb-10">
                        You Can find me at:
                    </p>
                    <div className="border-b border-HIGHLIGHT text-[2rem] text-[1rem] w-[60%] text-center">
                        LinkedIn:
                    </div>
                    <a className="hover:text-HIGHLIGHT hover:ring-HIGHLIGHT" href="https://www.linkedin.com/in/thomas-moloney-538204294/"> &gt; Thomas Moloney &lt; </a>
                    <div className="border-b border-HIGHLIGHT text-[2rem] w-[60%] text-center">
                        My Github:
                    </div>
                    <a className="hover:text-HIGHLIGHT hover:ring-HIGHLIGHT" href="https://github.com/Sweattowel"> &gt; Sweattowel &lt; </a>

                </div>

            </div>
        </ div>
    )
}