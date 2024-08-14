import React from "react";
import Marketing from "./components/Marketing";
import Header from './components/Header';
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const generateClassName = createGenerateClassName({
    productionPrefix: 'con'
});

export default () => {
    return (
        <StylesProvider>
            <BrowserRouter>
                <div>
                    <Header />
                    <Marketing />
                </div>
            </BrowserRouter>
        </StylesProvider>
    );
}