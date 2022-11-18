import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { HOME_PAGE } from "../config";
import useAuth from "../hooks/useAuth";

GuestGuard.propTypes = {
    children: PropTypes.node,
};

export default function GuestGuard({ children }) {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) return <Navigate to={HOME_PAGE} />;

    return <>{children}</>;
}
