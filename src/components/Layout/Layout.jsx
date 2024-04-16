import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage.jsx"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage.jsx"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage.jsx"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
import AppBar from "../AppBar/AppBar.jsx";
import Loader from "../Loader/Loader.jsx";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";

const Layout = () => {
    return (
        <>
            <AppBar />
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contacts" element={
                        <PrivateRoute>
                            <ContactsPage />
                        </PrivateRoute>
                    } />
                    <Route path="/login" element={
                        <RestrictedRoute>
                            <LoginPage />
                        </RestrictedRoute>
                    } />

                    <Route path="/register" element={
                        <RestrictedRoute>
                            <RegistrationPage />
                        </RestrictedRoute>
                    } />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default Layout;