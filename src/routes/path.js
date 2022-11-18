function path(root, sublink) {
    return `${root}${sublink}`;
}

const ROOTS_APP = "";

export const PATH_AUTH = {
    root: ROOTS_APP,
    login: path(ROOTS_APP, "/login"),
    register: path(ROOTS_APP, "/register"),
    verify: path(ROOTS_APP, "/verify"),
    resetPassword: path(ROOTS_APP, "/reset-password"),
    newPassword: path(ROOTS_APP, "/new-password"),
    forgot: path(ROOTS_APP, "/forgot"),
};

export const PATH_PAGE = {
    comingSoon: "/coming-soon",
    maintenance: "/maintenance",
    pricing: "/pricing",
    payment: "/payment",
    about: "/about",
    contact: "/contact-us",
    faqs: "/faqs",
    page403: "/403",
    page404: "/404",
    page500: "/500",
    components: "/components",
};

export const PATH_APP = {
    root: ROOTS_APP,
    Home: {
        root: path(ROOTS_APP, "/home"),
    },
    DefaultBadge: {
        root: path(ROOTS_APP, "/defaultBadge"),
    },
    DefaultGroup: {
        root: path(ROOTS_APP, "/defaultgroup"),
    },
    DefaultStorie: {
        root: path(ROOTS_APP, "/defaultstorie"),
    },
    DefaultEmailBox: {
        root: path(ROOTS_APP, "/defaultemailbox"),
    },
    DefaultEmailOpen: {
        root: path(ROOTS_APP, "/defaultemailopen"),
    },
    DefaultMessage: {
        root: path(ROOTS_APP, "/defaultmessage"),
    },
    DefaultVideo: {
        root: path(ROOTS_APP, "/defaultvideo"),
    },
    DefaultAnalytics: {
        root: path(ROOTS_APP, "/defaultanalytics"),
    },
    DefaultMember: {
        root: path(ROOTS_APP, "/defaultmember"),
    },
    Socialaccount: {
        root: path(ROOTS_APP, "/socialaccount"),
    },
    Payment: {
        root: path(ROOTS_APP, "/payment"),
    },
    HelpBox: {
        root: path(ROOTS_APP, "/helpbox"),
    },
    NotFound: {
        root: path(ROOTS_APP, "/notfound"),
    },
    Shop2: {
        root: path(ROOTS_APP, "/shop2"),
    },
    Shop3: {
        root: path(ROOTS_APP, "/shop3"),
    },
    SingleProduct: {
        root: path(ROOTS_APP, "/singleproduct"),
    },
    Cart: {
        root: path(ROOTS_APP, "/cart"),
    },
    DefaultLive: {
        root: path(ROOTS_APP, "/defaultlive"),
    },
    DefaultJob: {
        root: path(ROOTS_APP, "/defaulthotel"),
    },
    DefaultHotel: {
        root: path(ROOTS_APP, "/defaulthotel"),
    },
    GroupPage: {
        root: path(ROOTS_APP, "/grouppage"),
    },
    UserPage: {
        root: path(ROOTS_APP, "/userpage"),
    },
    AuthorPage: {
        root: path(ROOTS_APP, "/authorpage"),
    },
    DefaultHotelDetails: {
        root: path(ROOTS_APP, "/defaulthoteldetails"),
    },
    Notification: {
        root: path(ROOTS_APP, "/notification"),
    },
    DefaultSettings: {
        root: path(ROOTS_APP, "/defaultsettings"),
    },
    DefaultEvent: {
        root: path(ROOTS_APP, "/defaultjob"),
    },
};
