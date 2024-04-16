import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage.jsx"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage.jsx"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage.jsx"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import Layout from "../Layout/Layout.jsx";
import Loader from "../Loader/Loader.jsx";

const RoutesChain = () => {
    return (
        <>
            <Layout />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contacts" element={
                            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
                        }
                    />
                    <Route path="/login" element={
                            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
                        }
                    />

                    <Route path="/register" element={
                            <RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />
                        }
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default RoutesChain;