import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import "./main.scss";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import * as serviceWorker from "./serviceWorker";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { AuthProvider } from "./context/auth-context";
import Router from "./routes";

class Root extends Component {
    render() {
        return (
            <AuthProvider>
                <HelmetProvider>
                    <ReduxProvider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                            <BrowserRouter basename={"/"}>
                                <Router />
                            </BrowserRouter>
                        </PersistGate>
                    </ReduxProvider>
                </HelmetProvider>
            </AuthProvider>
        );
    }
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Root />);
serviceWorker.register();
