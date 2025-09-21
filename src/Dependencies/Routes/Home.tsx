import React from "react"

export default function Home()
{
    let PortfolioUserData : meDataType[] = 
    [
        {
            Title: "About me",
            Desc: "Dedicated curious learning with a passion for furthering his understanding of how thing work. From Taking apart vaccums and game consoles as well as teaching himself to program, i enjoy combining hands on problem solving with continuous study and development."
        },
        {
            Title: "Brief overview",
            Desc: "Fascinated by the world around me, I've always had a drive to understand why things work the way they do, whether in electronics, computing, mechanics, programming and cybersecurity. i focus on uncovering the reason behind how it works moreso then knowing that it works"
        },
    ];

    let PortfolioUserExpr : meExprType[] =
    [
        {
            Title: "3D Technician",
            Desc: "Virtual tour 3D is a cost-effective marketing company which operates in Southeast Queensland that provides virtual tours of commercial, residential, and industrial spaces. As a 3D technician, I conducted various tasks which enabled effective outcomes, especially during the 2020-2021 COVID -19 lockdown period. ",
            Highlights: 
            [
                "Matterport camera operation at a wide variety of worksites from homes to offices, businesses etc.",
                "Staged SLR camera shooting of properties at various angles to ensure the effectiveness of photo display.",
                "Video recording of tour for house presentation via SLR camera with gimbal attachment ",
                "Basic house preparation and cleaning for appropriate presentation within advertisements",
                "Independent on-site problem solving from working around and with others to dealing with adverse conditions.",
                "Unsupervised route planning to ensure punctual arrival at job sites. ",

            ],
            DateStart: new Date(Date.UTC(2020,6,1)).toISOString(),
            DateEnd: new Date(Date.UTC(2022,12,1)).toISOString(),
        },
        {
            Title: "Gym Receptionist/Personal-Group Trainer ",
            Desc: "Springfield health and fitness was an independent and well-equipped gym facility which operates within the Orion Shopping Centre. As a gym receptionist my duties included maintaining the gym floor, answering phone calls and emails as well as signing in existing member and signing up new members. My other role within the business was conducting training sessions for clients, from personal one on one training to group training",
            Highlights: 
            [
                "Maintaining OHS policies via general management of gym equipment via cleaning, inspecting, and reporting of faults. ",
                "Planning and conducting safe and effective group training plans for groups of 3+ members, whilst ensuring their safety through vigilant adjusting of program and corrections for clients.",
                "Creation of personal training programs to safely and effectively improve the physical health of clients.",
                "Gym maintenance inclusive of gym cleanliness.",
            ],
            DateStart: new Date(Date.UTC(2022,1,1)).toISOString(),
            DateEnd: new Date(Date.UTC(2024,6,1)).toISOString(),
        },
        {
            Title: "Packaging/ Warehousing",
            Desc: "JWL Orora warehouse is a large well established can packaging and delivery business operating within and around Australia. As one of its packaging team members I was tasked with ensuring the safe and quality packing of packaging materials for the effective transport of its can products ",
            Highlights: 
            [
                "Vigilant outlook on safety regarding heavy equipment, packets and vehicles including forklifts and trucks",
                "Maintaining a steady workflow throughout the day with routine inspection of work quality",
                "Repair and maintenance of top-frames using tools such as hammers, chisels etc",
                "Cleaning and preservation of work area cleanliness ",
            ],
            DateStart: new Date(Date.UTC(2025,4,1)).toISOString(),
            DateEnd: new Date().toISOString(),
        },
    ];

    return (
        <main
            className="flex flex-col m-2 p-2 divide-y"
        >   

            {PortfolioUserData.map((data: meDataType ,index: number) => (
                <section
                    key={index}
                    className={index % 2 === 0 ? "text-left" : "text-right"}
                >
                    <h2 
                        className="font-bold text-xl"
                    >
                        {data.Title}
                    </h2>
                    <p>
                        {data.Desc}
                    </p>
                </section>
            ))}
            <section>
                <h2
                    className="font-bold text-xl text-center m-2 p-2"
                >
                    Job Experience
                </h2>
                <ul>
                    {PortfolioUserExpr.map((Expr: meExprType, index: number) => (
                        <li
                            key={index}
                            className="flex flex-col justify-center items-center text-center m-2 p-2"
                        >
                            <h2
                                className="w-full text-WHITE p-2 m-2 bg-HIGHLIGHT"
                            >
                                {Expr.Title} | {Expr.DateStart.slice(0,10)} To {Expr.DateEnd.slice(0,10)}
                            </h2>
                            <p>
                                {Expr.Desc}
                            </p>

                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}
type meDataType = {
    Title: string,
    Desc: string | string[]
}
type meExprType = {
    Title: string,
    Desc: string,
    Highlights: string[],
    DateStart: string,
    DateEnd: string
}