import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";

// layouts

// guards
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";

// path after login
// import { PATH_AFTER_LOGIN } from "../config";

// components
import Load from "../components/Load";

// loadable

const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<Load />}>
            <Component {...props} />
        </Suspense>
    );
};

export default function Router() {
    return useRoutes([
        // App Routes
        {
            path: "/",
            children: [
                {
                    element: <Demo />,
                    index: true,
                },

                {
                    path: "login",

                    element: (
                        <GuestGuard>
                            <Login />
                        </GuestGuard>
                    ),
                },
                {
                    path: "register",
                    element: (
                        <GuestGuard>
                            <Register />
                        </GuestGuard>
                    ),
                },

                {
                    path: "forgot",
                    element: (
                        <GuestGuard>
                            <Forgot />
                        </GuestGuard>
                    ),
                },
                {
                    path: "home",
                    element: (
                        <AuthGuard>
                            <Home />
                        </AuthGuard>
                    ),
                },
                {
                    path: "defaultBadge",
                    element: (
                        <AuthGuard>
                            <Badge />
                        </AuthGuard>
                    ),
                },
                {
                    path: "defaultgroup",
                    element: (
                        <AuthGuard>
                            <Group />
                        </AuthGuard>
                    ),
                },
                {
                    path: "defaultstorie",
                    element: (
                        <AuthGuard>
                            <Storie />
                        </AuthGuard>
                    ),
                },
                {
                    path: "defaultemailbox",
                    element: (
                        <AuthGuard>
                            <Email />
                        </AuthGuard>
                    ),
                },
                {
                    path: "defaultemailopen",
                    element: (
                        <AuthGuard>
                            <Emailopen />
                        </AuthGuard>
                    ),
                },
                {
                    path: "defaultmessage",
                    element: (
                        <AuthGuard>
                            <Chat />
                        </AuthGuard>
                    ),
                },
                {
                    path: "defaultvideo",
                    element: (
                        <AuthGuard>
                            <Videos />
                        </AuthGuard>
                    ),
                },
                {
                    path: "defaultanalytics",
                    element: (
                        <AuthGuard>
                            <Analytics />
                        </AuthGuard>
                    ),
                },
                {
                    path: "accountinformation",
                    element: (
                        <AuthGuard>
                            <Account />
                        </AuthGuard>
                    ),
                },
                {
                    path: "defaultmember",
                    element: (
                        <AuthGuard>
                            <Member />
                        </AuthGuard>
                    ),
                },
                {
                    path: "socialaccount",
                    element: (
                        <AuthGuard>
                            <Socialaccount />
                        </AuthGuard>
                    ),
                },
                {
                    path: "payment",
                    element: (
                        <AuthGuard>
                            <Payment />
                        </AuthGuard>
                    ),
                },
                {
                    path: "helpbox",
                    element: (
                        <AuthGuard>
                            <Helpbox />
                        </AuthGuard>
                    ),
                },
                {
                    path: "notfound",
                    element: (
                        <AuthGuard>
                            <Notfound />
                        </AuthGuard>
                    ),
                },
                {
                    path: "shop2",
                    element: (
                        <AuthGuard>
                            <ShopTwo />
                        </AuthGuard>
                    ),
                },
                {
                    path: "shop3",
                    element: (
                        <AuthGuard>
                            <ShopThree />
                        </AuthGuard>
                    ),
                },
                {
                    path: "singleproduct",
                    element: (
                        <AuthGuard>
                            <Singleproduct />
                        </AuthGuard>
                    ),
                },
                {
                    path: "cart",
                    element: (
                        <AuthGuard>
                            <Cart />
                        </AuthGuard>
                    ),
                },
                {
                    path: "defaultlive",
                    element: (
                        <AuthGuard>
                            <Live />
                        </AuthGuard>
                    ),
                },
                {
                    path: "defaultjob",
                    element: (
                        <AuthGuard>
                            <Event />
                        </AuthGuard>
                    ),
                },
                {
                    path: "defaulthotel",
                    element: (
                        <AuthGuard>
                            <Hotel />
                        </AuthGuard>
                    ),
                },
                {
                    path: "grouppage",
                    element: (
                        <AuthGuard>
                            <Grouppage />
                        </AuthGuard>
                    ),
                },
                {
                    path: "userpage",
                    element: (
                        <AuthGuard>
                            <Userpage />
                        </AuthGuard>
                    ),
                },
                {
                    path: "authorpage",
                    element: (
                        <AuthGuard>
                            <Authorpage />
                        </AuthGuard>
                    ),
                },
                {
                    path: "defaulthoteldetails",
                    element: (
                        <AuthGuard>
                            <Hotelsingle />
                        </AuthGuard>
                    ),
                },
                {
                    path: "notification",
                    element: (
                        <AuthGuard>
                            <Notification />
                        </AuthGuard>
                    ),
                },
                {
                    path: "defaultsettings",
                    element: (
                        <AuthGuard>
                            <Settings />
                        </AuthGuard>
                    ),
                },
                {
                    path: "points",
                    element: (
                        <AuthGuard>
                            <Points />
                        </AuthGuard>
                    ),
                },
                {
                    path: "voting",
                    element: (
                        <AuthGuard>
                            <Voting />
                        </AuthGuard>
                    ),
                },
            ],
        },
    ]);
}

// // Authentication
const Login = Loadable(lazy(() => import("../pages/Login")));

const Register = Loadable(lazy(() => import("../pages/Register")));

const Forgot = Loadable(lazy(() => import("../pages/Forgot")));

// General

const Demo = Loadable(lazy(() => import("../demo/Demo")));

const Home = Loadable(lazy(() => import("../pages/Home")));

const Badge = Loadable(lazy(() => import("../pages/Badge")));

const Group = Loadable(lazy(() => import("../pages/Group")));

const Storie = Loadable(lazy(() => import("../pages/Storie")));

const Email = Loadable(lazy(() => import("../pages/Email")));

const Emailopen = Loadable(lazy(() => import("../pages/Emailopen")));

const Chat = Loadable(lazy(() => import("../pages/Chat")));

const Videos = Loadable(lazy(() => import("../pages/Videos")));

const Analytics = Loadable(lazy(() => import("../pages/Analytics")));

const Account = Loadable(lazy(() => import("../pages/Account")));

const Member = Loadable(lazy(() => import("../pages/Member")));

const Socialaccount = Loadable(lazy(() => import("../pages/Socialaccount")));

const Payment = Loadable(lazy(() => import("../pages/Payment")));

const Helpbox = Loadable(lazy(() => import("../pages/Helpbox")));

const Notfound = Loadable(lazy(() => import("../pages/Notfound")));

const ShopTwo = Loadable(lazy(() => import("../pages/ShopTwo")));

const ShopThree = Loadable(lazy(() => import("../pages/ShopThree")));

const Singleproduct = Loadable(lazy(() => import("../pages/Singleproduct")));

const Cart = Loadable(lazy(() => import("../pages/Cart")));

const Live = Loadable(lazy(() => import("../pages/Live")));

const Event = Loadable(lazy(() => import("../pages/Hotel")));

const Grouppage = Loadable(lazy(() => import("../pages/Grouppage")));

const Userpage = Loadable(lazy(() => import("../pages/Userpage")));

const Authorpage = Loadable(lazy(() => import("../pages/Authorpage")));

const Hotel = Loadable(lazy(() => import("../pages/Hotel")));

const Hotelsingle = Loadable(lazy("../pages/Hotelsingle"));

const Notification = Loadable(lazy(() => import("../pages/Notification")));

const Settings = Loadable(lazy(() => import("../pages/Settings")));

const Points = Loadable(lazy(() => import("../pages/Points")));

const Voting = Loadable(lazy(() => import("../pages/Voting")));
