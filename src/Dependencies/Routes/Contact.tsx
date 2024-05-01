import React from "react";

export default function Contact(){
    return (
        <div className="bg-LIGHT h-[95vh] w-full">
            <div className="bg-WHITE h-full w-[90%] flex flex-col m-auto shadow-lg">
                <h1 className="text-HIGHLIGHT text-center text-[3rem] font-bold font-serif w-full h-[10vh]">
                    CONTACT ME
                </h1>
                <div className="bg-DARK w-[80%] h-[80%] text-LIGHT flex flex-col ml-auto mr-auto justify-evenly items-center rounded">
                    <p className="text-LIGHT text-[2.5rem] text-center w-full rounded mb-10">
                        You Can find me at:
                    </p>
                    <div className="border-b border-HIGHLIGHT text-[2rem]">
                        Email: tom_moloney10@hotmail.com
                    </div>
                    <div className="border-b border-HIGHLIGHT text-[2rem]">
                        My Github: <a className="hover:text-HIGHLIGHT hover:ring-HIGHLIGHT" href="https://github.com/Sweattowel"> &gt; Sweattowel &lt; </a>
                    </div>               
                </div>

            </div>
        </ div>
    )
}