import PropTypes from "prop-types";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Load from "../components/Load";

// hooks
import useAuth from "../hooks/useAuth";
import Login from "../pages/Login";

AuthGuard.propTypes = {
    childern: PropTypes.node,
};

export default function AuthGuard({ children }) {
    const { isAuthenticated, isInitialized } = useAuth();

    const { pathname } = useLocation();

    const [requestLocation, setRequestLocation] = useState("");

    if (!isInitialized) return <Load />;

    if (!isAuthenticated) {
        if (pathname !== requestLocation) setRequestLocation(pathname);

        return <Login />;
    }

    if (requestLocation && pathname !== requestLocation) {
        setRequestLocation(null);
        return <Navigate to={requestLocation} />;
    }

    return <>{children}</>;
}
