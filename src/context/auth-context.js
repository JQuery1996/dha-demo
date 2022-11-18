import PropTypes from "prop-types";
import { createContext, useEffect, useReducer } from "react";
import { setSession } from "../utils/jwt";
import axios from "../utils/axios";

// List of mock users
import { USERS } from "../config";

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
};

const handlers = {
    INITIALIZE: (state, action) => {
        const { isAuthenticated, user } = action.payload;
        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user,
        };
    },
    LOGIN: (state, action) => {
        const { user } = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },
    LOGOUT: (state) => ({
        ...state,
        isAuthenticated: false,
        user: null,
    }),
    REGISTER: (state, action) => {
        const { user } = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            user,
        };
    },
};

const reducer = (state, action) =>
    handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext({
    ...initialState,
    method: "jwt",
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    register: () => Promise.resolve(),
});

AuthProvider.propTypes = {
    children: PropTypes.node,
};

function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const initialize = async () => {
            try {
                const user = localStorage.getItem("user");
                if (user) {
                    dispatch({
                        type: "INITIALIZE",
                        payload: {
                            isAuthenticated: true,
                            user: JSON.parse(user),
                        },
                    });
                } else {
                    dispatch({
                        type: "INITIALIZE",
                        payload: {
                            isAuthenticated: false,
                            user: null,
                        },
                    });
                }
            } catch (error) {
                console.log(error);
                dispatch({
                    type: "INITIALIZE",
                    payload: {
                        isAuthenticated: false,
                        user: null,
                    },
                });
            }
        };
        initialize();
    }, []);

    const login = async (email, password) => {
        // const response = await axios.post("LOGIN_API", {
        //     Email: email,
        //     Password: password,
        // });

        // const user = JSON.parse(atob(response.data.split(".")[1]));
        // setSession(response.data);

        const user = USERS.find(
            (u) => u.email === email && u.password === password,
        );

        if (!user) throw "email or password is incorrect";
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
            type: "LOGIN",
            payload: {
                user,
            },
        });
    };

    const register = async (email, password, fullName) => {
        const response = await axios.post("REGISTER_API", {
            Email: email,
            Password: password,
            Username: fullName,
        });

        const accessToken = response.data.token;

        const user = JSON.parse(atob(accessToken.split(".")[1]));

        setSession(accessToken);

        dispatch({
            type: "REGISTER",
            payload: { user },
        });
    };

    const logout = async () => {
        // setSession(null);
        localStorage.removeItem("user");
        // axios configuration.
        delete axios.defaults.headers.common.Authroization;
        dispatch({ type: "LOGOUT" });
    };

    return (
        <AuthContext.Provider
            value={{ ...state, mehtod: "jwt", login, logout, register }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };
