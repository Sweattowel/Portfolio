export type projPara = {
    para: string,
    paraImgUrl: string
}
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
            "Vercel", "Typescript", "Next.js", "Vercel"
        ],
        descShort: "Custom portfolio to display skills to potential employers",
        descLong: [
            "An exercise in designing a thoughful and interactive display of my skills and abilities for the purpose of gainful employment",
            "Display use of Next.js web programming with dynamically generated Project pages and error handling",
            "Demonstrate both the ability to code something that works and something that can be built upon and maintained ",
            "Host project in publically accessible web server while maintaining an understanding what should be and shouldnt be, available on the site such as PID or what skills i possess",
            "Make a beautiful page ",
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
            "MetaSploit", "Nmap", "WireShark", "Kali Linux", "Meterpeter"
        ],
        descShort: "Addressing and responding to cyber-warfare",
        descLong: [
            "Information and Systems defence skills gained via study, practice and experience",
            "Versed in the use of penetration testing software, such as Kali linux with Metasploit and Nmap for the legal and ethical penetration testing of systems",
            "Strong knowledge of input sanitization and resulting hazards that may result as a result of poor control",
            "Set up and continuous configuration of systems for the purpose of maintained service",
            "Deeply ingrained awareness of phishing, social engineering and other intruder methodology",
            "Routine and continuous self development of skills",
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
            "DOTNET", "Next.js", "Aspnet", "C# & JS", "Hosting", "Tailwind"
        ],
        descShort: "Home made website for home made pottery",
        descLong: [
            "Eccommerce Website purpose built for the selling and management of a small pottery business",
            "Maintain a secure web development environment for customers and the client alike",
            "Demonstrate programming and development of a website that both entices customers to come in, and ensures their trouble free experience",
            "Create and maintain a stable database of customers, orders and admins using SQL technology",
            "Use of Cybersecurity skills ot maining the security of key stakeholders",
            "Learn and develope continuously",
        ],
        publicAccess: false,
        publicAccessLink: ""  
    },
    {
        ID: 3,
        imgSource: "",
        projName: "Networking",
        repoLink: "",
        techUsed: [
            "Routing", "Firewall", "Dynamic DNS", "VPN", "Nginx", "Port management"
        ],
        descShort: "Experience in running sophisticated home networks",
        descLong: [
            "Developed tested and used a custom made private home lab to learn more about systems and their function",
            "Tried tested and succeeded at mangaging multiple client computers as well as IOT devices",
            "Maintain control of bandwidth and successful coverage of home location for access",
            "Maintain protections for users via Multiple means such as",
            "Software based control such as dynamic DNS, Ad-Guard, Software acceleration, Custom Filtering of trackers, blockers and distractors",
            "Hardware control via maintaining proper configurations and set up access control"
        ],
        publicAccess: false,
        publicAccessLink: ""  
    },
];
