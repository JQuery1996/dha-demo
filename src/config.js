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
    },
    {
        email: "manager_user@dh.com",
        password: "P@ssw0rd",
        role: ROLE.MANAGER,
    },
    {
        email: "admin_user@dh.com",
        password: "P@ssw0rd",
        role: ROLE.ADMIN,
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
    [ROLE.NORMAL]: ["LMS", "Points", "Rewards", "Profile", "Chat", "F&Q"],
    [ROLE.MANAGER]: ["LMS", "Points", "Rewards", "Profile", "Chat", "F&Q"],
    [ROLE.ADMIN]: ["LMS", "Points", "Rewards", "Profile", "Chat", "F&Q"],
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
