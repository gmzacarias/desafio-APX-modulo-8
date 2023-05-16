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
import { CheckEmail } from "pages/check-email";
import { Login } from "pages/login";
import { SignUp } from "pages/signup";


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
                element: <CheckEmail />,
            },
            {
                path: "/auth/signin",
                element: <Login />,
            },
            {
                path: "/auth/signup",
                element: <SignUp />,
            },
            {
                path: "/nearpets",
                element: <NearPets />,
            }
        ]
    },

])