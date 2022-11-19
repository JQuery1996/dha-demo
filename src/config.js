import {
    ChallengeIcon,
    FastGraduateIcon,
    OnFireIcon,
    TopStudentIcon,
} from "./illustration";
import { PATH_APP } from "./routes/path";

export const HOST_API = process.env.REACT_APP_HOST_API_KEY || "";

export const HOME_PAGE = "/";

export const PATH_AFTER_LOGIN = PATH_APP.root;

export const ROLE = {
    NORMAL: "NORMAL_USER",
    ADMIN: "ADMIN_USER",
    MANAGER: "MANAGER_USER",
};
export const USERS = [
    {
        email: "normal_user@dh.com",
        password: "P@ssw0rd",
        role: ROLE.NORMAL,
        totalPoints: 91,
    },
    {
        email: "manager_user@dh.com",
        password: "P@ssw0rd",
        role: ROLE.MANAGER,
        totalPoints: 79,
    },
    {
        email: "admin_user@dh.com",
        password: "P@ssw0rd",
        role: ROLE.ADMIN,
        totalPoints: 36,
    },
];

export const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const SIDEBARCONTENT = {
    [ROLE.NORMAL]: [
        { label: "LMS", path: "/" },
        { label: "Points", path: PATH_APP.Points.root },
        { label: "Rewards", path: "/" },
        { label: "Voting", path: PATH_APP.Voting.root },
        { label: "Profile", path: "/" },
        { label: "Chat", path: "/" },
        { label: "F&Q", path: "/" },
    ],
    [ROLE.MANAGER]: [
        { label: "LMS", path: "/" },
        { label: "Points", path: PATH_APP.Points.root },
        { label: "Rewards", path: "/" },
        { label: "Voting", path: PATH_APP.Voting.root },
        { label: "Profile", path: "/" },
        { label: "Chat", path: "/" },
        { label: "F&Q", path: "/" },
    ],
    [ROLE.ADMIN]: [
        { label: "LMS", path: "/" },
        { label: "Points", path: PATH_APP.Points.root },
        { label: "Rewards", path: "/" },
        { label: "Voting", path: PATH_APP.Voting.root },
        { label: "Profile", path: "/" },
        { label: "Chat", path: "/" },
        { label: "F&Q", path: "/" },
    ],
};

export const SIDEBAROTHERCONTENT = {
    [ROLE.NORMAL]: ["Feedback", "Report Issues", "Surveys"],
    [ROLE.MANAGER]: ["Feedback", "Report Issues", "Surveys"],
    [ROLE.ADMIN]: ["Feedback", "Report Issues", "Surveys"],
};

export const SIDEBATSETTINGSCONTENT = {
    [ROLE.NORMAL]: ["Settings"],
    [ROLE.MANAGER]: ["Settings", "Activities"],
    [ROLE.ADMIN]: ["Settings", "Activities"],
};
export const SIDEBARICONS = {
    LMS: "feather-tv btn-round-md bg-blue-gradiant me-3",
    Points: "feather-award btn-round-md bg-red-gradiant me-3",
    Rewards: "feather-globe btn-round-md bg-gold-gradiant me-3",
    Voting: "feather-award btn-round-md bg-red-gradiant me-3",
    Profile: "feather-zap btn-round-md bg-mini-gradiant me-3",
    Chat: "feather-user btn-round-md bg-primary-gradiant me-3",
    "F&Q": "feather-zap btn-round-md bg-mini-gradiant me-3",
};

export const SIDEBAROTHERICONS = {
    Feedback: "font-xl text-current feather-home me-3",
    "Report Issues": "font-xl text-current feather-map-pin me-3",
    Surveys: "font-xl text-current feather-youtube me-3",
};

export const SIDEBARSETTINGSICONS = {
    Settings: "font-sm feather-settings me-3 text-grey-500",
    Activities: "font-sm feather-pie-chart me-3 text-grey-500",
};

export const ORGANIZATIONS = [
    "Digital Horizon",
    "Nabd",
    "Dar-Alber",
    "Aljalila-Foundation",
    "Erada",
    "Noor-Dubai",
    "Dubai-Charity",
];

export const NOMINATED_USERS = [
    "Hiba Dimashky",
    "Mohammad Amen",
    "Baraa Hamood",
    "Hasan Takaleh",
];

export const BADGES = [
    "Team Player",
    "Hard Worker",
    "Problem Solver",
    "Innovator",
];

export const POINT_HISTORY_TABLE = [
    {
        Id: 1,
        Action: "Voting to Mohammad Amen",
        Date: "Oct 10 2022",
        Points: "15 points",
    },
    {
        Id: 2,
        Action: "Share a Milestone",
        Date: "June 02 2022",
        Points: "20 points",
    },
    {
        Id: 3,
        Action: "Complete a NABDH video",
        Date: "Jan 14 2022",
        Points: "25 points",
    },
];

export const POINT_MILESTONES = [
    {
        Id: 1,
        label: "3 years in hospital",
        date: "01/01/2022",
    },
    {
        Id: 2,
        label: "Finish nursing course",
        date: "02/10/2021",
    },
    {
        Id: 3,
        label: "2 years in hospital",
        date: "01/01/2021",
    },
];

export const MILESTONE_TYPES = ["Anniversary", "Course", "Certificate"];

export const VOTING_LIST = [
    {
        avatar: "user-1.png",
        user: "Mohammad Amen",
        organization: "Digital Horizon",
        numberOfVoters: [
            { label: "Team Player", votes: 13 },
            { label: "Hard Worker", votes: 19 },
        ],
        badges: [TopStudentIcon, OnFireIcon],
    },
    {
        avatar: "user-2.png",
        user: "Surfiya Zakir",
        organization: "Nabd",
        numberOfVoters: [
            { label: "Innovator", votes: 13 },
            { label: "Problem Solver", votes: 19 },
        ],
        badges: [FastGraduateIcon, ChallengeIcon],
    },
    {
        avatar: "user-3.png",
        user: "Hendrix Stamp",
        organization: "Dar-Alber",
        numberOfVoters: [
            { label: "Innovator", votes: 16 },
            { label: "Problem Solver", votes: 19 },
            { label: "Team Player", votes: 22 },
        ],
        badges: [FastGraduateIcon, ChallengeIcon, TopStudentIcon],
    },
    {
        avatar: "user-4.png",
        user: "Aliqa Macale",
        organization: "Erada",
        numberOfVoters: [{ label: "Problem Solver", votes: 33 }],
        badges: [ChallengeIcon],
    },
    {
        avatar: "user-5.png",
        user: "Stephen Grider",
        organization: "Dubai-Charity",

        numberOfVoters: [
            { label: "Team Player", votes: 24 },
            { label: "Hard Worker", votes: 9 },
        ],
        badges: [TopStudentIcon, OnFireIcon],
    },
];

export const USER_IMAGES_DIRECTORY = "/assets/images/users/";
