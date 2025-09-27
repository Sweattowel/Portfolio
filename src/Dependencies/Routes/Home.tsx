import React from "react";

// Model Imports

import { AboutMeDataType } from "../../Models/Elements";

// Page Resources

import { AboutMeData } from "../Data/Resources";

export default function Home()
{

    return (
        <section
            className="RoutePage"
        >
            <ul>
                {AboutMeData.map((Data: AboutMeDataType, index: number) => (
                    <li
                        key={index}
                        className="mb-2"
                    >
                        <h2
                            className="highlight"
                        >
                            {Data.Title}
                        </h2>
                        <p>
                            {Data.Desc}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
};