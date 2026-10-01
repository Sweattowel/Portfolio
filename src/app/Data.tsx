
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
        projName: "CyberSecurity",
        repoLink: "https://github.com/Sweattowel/CustomScripts",
        techUsed: [
            "MetaSploit", "Nmap", "WireShark", "Kali Linux", "meterpeter"
        ],
        descShort: "Addressing and responding to cyber-warfare",
        descLong: [
            "Information and Systems defence skills gained via study, practice and experience"
        ],
        publicAccess: false,
        publicAccessLink: ""  
    },
    {
        ID: 2,
        imgSource: "",
        projName: "AlieSohn",
        repoLink: "https://github.com/Sweattowel/aliesohn",
        techUsed: [
            "DOTNET", "Next.js", "Aspnet", "C# & JS", "Networking & hosting", "Tailwind"
        ],
        descShort: "Home made website for home made pottery",
        descLong: [
            "Eccommerce Website purpose built for the selling and management of a small pottery business"
        ],
        publicAccess: false,
        publicAccessLink: ""  
    },
];
