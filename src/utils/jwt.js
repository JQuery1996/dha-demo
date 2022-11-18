import jwtDecode from "jwt-decode";
import axios from "./axios";

const isValidToken = (accessToken) => {
    if (!accessToken) {
        return false;
    }

    const decode = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;

    return decode.exp > currentTime;
};

const handleTokenExpired = (exp) => {
    let expiredTimer;

    const currentTime = Date.now() / 1000;

    const timeLeft = exp - currentTime;

    clearTimeout(expiredTimer);

    expiredTimer = setTimeout(() => {
        alert("Token Expired ");
        localStorage.removeItem("accessToken");
        window.location.href = "/";
    }, timeLeft);
};

const setSession = (accessToken) => {
    if (accessToken) {
        localStorage.setItem("accessToken", accessToken);
        // axios configuration
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        // handle when token is expired

        const { exp } = jwtDecode(accessToken);
        handleTokenExpired(exp);
    } else {
        localStorage.removeItem("accessToken");
        // axios configuration.
        delete axios.defaults.headers.common.Authroization;
    }
};

export { isValidToken, setSession };
