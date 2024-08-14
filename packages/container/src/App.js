import React from "react";
import Marketing from "./components/Marketing";
import Header from './components/Header';
import { BrowserRouter } from "react-router-dom";

export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Marketing />
            </div>
        </BrowserRouter>
    )
}