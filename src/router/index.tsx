import React,{StrictMode} from "react";
import { Routes, Route } from "react-router-dom"
import { Home } from "pages/home";

import { Layout } from "components/layout";
import { Search } from "pages/search";
import { SearchResults } from "pages/SearchResults";
import { SearchForm } from "components/search-form";


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/"  element={<Layout />}>
                <Route index element={<Home />} />
                {/* <Route path="/search/:query" element={<SearchResults />} /> */}
            </Route>
        </Routes>
    )
}

