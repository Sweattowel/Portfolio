
export type projStruc = {
    ID: number
    imgSource: string,
    projName: string,
    repoLink: string,
    techUsed: string[],
    descShort: string,
    descLong: string[],
    publicAccess: boolean,
    publicAccessLink: string
};

export const ProjectData: projStruc[] = [
    {
        ID: 0,
        imgSource: "",
        projName: "PortFolio",
        repoLink: "https://github.com/Sweattowel/Portfolio",
        techUsed: [
            "Vercel", "Typescript", "Next.js"
        ],
        descShort: "Custom portfolio to display skills to potential employers",
        descLong: [
            "An exercise in designing a thoughful and interactive display of my skills and abilities for the purpose of gainful employment",
            "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
            "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
            "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
            "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
        ],
        publicAccess: true,
        publicAccessLink: "https://thomas-moloney-portfolio.vercel.app/"
    },
    {
        ID: 1,
        imgSource: "",
        projName: "PortFolioo",
        repoLink: "https://github.com/Sweattowel/Portfolio",
        techUsed: [
            "Vercel", "Typescript", "Next.js"
        ],
        descShort: "Custom portfolio to display skills to potential employers",
        descLong: [
            "An exercise in designing a thoughful and interactive display of my skills and abilities for the purpose of gainful employment"
        ],
        publicAccess: false,
        publicAccessLink: ""  
    },
];
