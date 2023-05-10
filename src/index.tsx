import React, { Suspense, StrictMode } from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "router/index";
import { RecoilRoot } from "recoil";

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <RecoilRoot>
        <StrictMode>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </Suspense>
        </StrictMode>
    </RecoilRoot>
);
