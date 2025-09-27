// Component Imports

import Home from '../Routes/Home';
import Info from '../Routes/Info';
import Contact from '../Routes/Contact';


// Model Imports

import { AboutMeDataType, ExperienceType, PageResourceType, ProjectType } from '../../Models/Elements';

// Page Resources

export const PageResources : PageResourceType[] = [
  {
    Title: "Home",
    component: Home,
    Path: "/",
    Desc: "Front Page of portfolio",
  },
  {
    Title: "Infomation",
    component: Info,
    Path: "/Information",
    Desc: "Contains information about the project creator",
  },
  {
    Title: "Contact",
    component: Contact,
    Path: "/Contact",
    Desc: "Methods to contact project creator",
  },
];

// Experience

export const Projects: ProjectType[] = [
    {
        Title: "Test",
        Path: "/TestProjectLink",
        Desc: "TestDescTestDescTestDescTestDescTestDescTestDescTestDesc",
        Tech: [],       
        DocumentOverview: "",
        DocumentConsiderations: [],
        DocumentChallenges: [],
        DocumentThoughtProcess: [],
    },
    {
        Title: "SpotifyTV",
        Path: "/SpotifyTVProject",
        Desc: "TestDescTestDescTestDescTestDescTestDescTestDescTestDesc",
        Tech: [
            "TechTEST",
            "TechTEST",
            "TechTEST",
        ],
        DocumentOverview: "Create a Spotify application that interfaces with user playlists of both music and podcasts/shows, use this to create a tv programme of sorts where random podcasts are selected to create a random queue, this queue will then have interruptions akin to advertisements as seen on regular tv both between shows and during as requested",
        DocumentConsiderations: [
            "ConsidTEST",
            "ConsidTEST",
            "ConsidTEST",
            "ConsidTEST",
        ],
        DocumentChallenges: [
            "ChallTEST",
            "ChallTEST",
            "ChallTEST",
        ],
        DocumentThoughtProcess: [
            "ThoughtTEST",
            "ThoughtTEST",
            "ThoughtTEST",
        ],
    },
    {
        Title: "ThoamAuth",
        Path: "/ThoamAuthProject",
        Desc: "TestDescTestDescTestDescTestDescTestDescTestDescTestDesc",
        Tech: [],       
        DocumentOverview: "",
        DocumentConsiderations: [],
        DocumentChallenges: [],
        DocumentThoughtProcess: [],
    },
    {
        Title: "Portfolio",
        Path: "/TestProjectLink",
        Desc: "TestDescTestDescTestDescTestDescTestDescTestDescTestDesc",
        Tech: [],       
        DocumentOverview: "",
        DocumentConsiderations: [],
        DocumentChallenges: [],
        DocumentThoughtProcess: [],
    },
];

export const CreatorExperience : ExperienceType[] =
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

// About Me

export const AboutMeData : AboutMeDataType[] = 
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