import React, { Suspense, StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { AppRoutes } from "router/index";

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <RecoilRoot>
        <StrictMode>
            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={AppRoutes} />
            </Suspense>
        </StrictMode>
    </RecoilRoot>
);
