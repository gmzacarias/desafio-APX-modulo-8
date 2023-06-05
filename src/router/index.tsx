import React from "react";
import { createBrowserRouter } from "react-router-dom"
import { Home } from "pages/home";
import { ErrorPage } from "pages/error";
import { Layout } from "components/layout";
import { MyData } from "pages/my-data";
import { ReportPet } from "pages/report-pet";
import { MyReports } from "pages/my-reports";
import { NearPets } from "pages/near-pets";
import { EditPet } from "pages/edit-pet";
import { Auth } from "pages/auth";
import { SignIn } from "pages/signin";
import { SignUp } from "pages/signup";
import { About } from "pages/about";
import { ForgotPassword } from "pages/forgot-password";
import { ResetPassword } from "pages/reset-password";


export const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/reportpet",
                element: <ReportPet />,
            },
            {
                path: "/myreports",
                element: <MyReports />,
            },
            {
                path: "/myreports/editpet",
                element: <EditPet />,
            },
            {
                path: "/mydata",
                element: <MyData />,
            },
            {
                path: "/auth",
                element: <Auth />,
            },
            {
                path: "/auth/signin",
                element: <SignIn />,
            },
            {
                path: "/auth/signup",
                element: <SignUp />,
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword />
            },
            {
                path: "/reset-password",
                element: <ResetPassword />
            },
            {
                path: "/nearpets",
                element: <NearPets />,
            }
        ]
    },

])